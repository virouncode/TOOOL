import {defaultScreen, addScreenControl,addScreenMute,addScreen,loadSamplesOnChange,updateKeys,updateTypes} from './modules/screen-functions.mjs'
import {refreshEvents, refreshPattern} from './modules/events.mjs';
import {parametersValues,setParameterValue} from './modules/parameters.mjs'
import {addChordGrid, writeScreenRight} from './modules/screen-functions.mjs';
import {playStatus} from './modules/player.mjs';

//Recupération des potards//
let bpmBtn = document.querySelector("#BPM"); 
let keyBtn = document.querySelector("#KEY");
let typeBtn = document.querySelector("#TYPE");
let sampleBtn = document.querySelector("#SAMPLE");
let patternBtn = document.querySelector("#PATTERN");
let reverbBtn = document.querySelector("#REVERB");
let lifeBtn = document.querySelector("#LIFE");
let sidechainBtn = document.querySelector("#SIDECHAIN");
let muteDrumBtn = document.querySelector("#MUTE_DRUM");
let accentBtn = document.querySelector("#ACCENT");
let muteBassBtn = document.querySelector("#MUTE_BASS");
let arpBtn = document.querySelector("#ARP");
let muteChordBtn = document.querySelector("#MUTE_CHORD");
let muteArpdBtn = document.querySelector("#MUTE_ARP");
let playBtn = document.querySelector("#PLAY");
let stopBtn = document.querySelector("#STOP");
let exportBtn = document.querySelector("#EXPORT");
let randomBtn = document.querySelector("#RANDOM");
let moodBtn = document.querySelector("#MOOD");

const rotativeButtons = [ //tous les potards qui ne changent pas la partition
    bpmBtn,
    reverbBtn,
    lifeBtn,
    sidechainBtn,
    accentBtn,
    arpBtn
]

const rotativePartButtons = [ //tous les boutons qui changent la partition (autres que le bouton mode)
    keyBtn,
    typeBtn
]

const muteButtons =[    
    muteDrumBtn,
    muteBassBtn,
    muteChordBtn,
    muteArpdBtn
]

const controlButtons = [
    playBtn,
    stopBtn,
    exportBtn,
    randomBtn
]
var screenRight = document.getElementById("SCREEN_RIGHT");  //Ecran de droite
//Le modèle de bouton rotatif//
window.addEventListener("load", () => {
    writeScreenRight(screenRight);
    addChordGrid();
    let op = window.inputKnobsOptions||{};
    op.knobWidth=op.knobWidth||op.knobDiameter||64;
    op.knobHeight=op.knobHeight||op.knobDiameter||64;
    op.knobMode=op.knobMode||"linear";
    let styles=document.createElement("style");
    styles.innerHTML=
  `input[type=range].inputKnob{
    -webkit-appearance:none;
    -moz-appearance:none;
    border:none;
    box-sizing:border-box;
    overflow:hidden;
    background: transparent;
    background-repeat:no-repeat;
    background-color:transparent;
    background-size: contain;
    background-position: center;
    touch-action:none;
  }
  input[type=range].inputKnob{
    width:${op.knobWidth}px; height:${op.knobHeight}px;
  }
  input[type=range].inputKnob::-webkit-slider-thumb,input[type=range].input-slider::-webkit-slider-thumb{
    -webkit-appearance:none;
    opacity:0;
  }
  input[type=range].inputKnob::-moz-range-thumb,input[type=range].input-slider::-moz-range-thumb{
    -moz-appearance:none;
    height:0;
    border:none;
  }
  input[type=range].inputKnob::-moz-range-track,input[type=range].input-slider::-moz-range-track{
    -moz-appearance:none;
    height:0;
    border:none;
  }`;
    document.head.appendChild(styles);
  
    //Initialisation du bouton
    let initKnobs=(el)=>{
      let w,h,d,fg,bg;
      if(el.inputKnobs){
        el.redraw();
        return;
      }
      let ik=el.inputKnobs={};
      el.refresh=()=>{
        d=+el.getAttribute("data-diameter");
        let st=document.defaultView.getComputedStyle(el,null);
        w=parseFloat(el.getAttribute("data-width")||d||st.width);
        h=parseFloat(el.getAttribute("data-height")||d||st.height);
        bg=el.getAttribute("data-bgcolor")||op.bgcolor;
        fg=el.getAttribute("data-fgcolor")||op.fgcolor;
        ik.sensex=ik.sensey=200;
        if(el.className.indexOf("inputKnob")>=0)
          ik.itype="k";
        else{
        }
        el.style.width=w+"px";
        el.style.height=h+"px";
        ik.frameheight=h;
        let src=el.getAttribute("data-src");
        if(src){
          el.style.backgroundImage=`url(${src})`;
          let sp=+el.getAttribute("data-sprites");
          if(sp)
            ik.sprites=sp;
          else
            ik.sprites=0;
          if(ik.sprites>=1)
            el.style.backgroundSize=`100% ${(ik.sprites+1)*100}%`;
          else if(ik.itype!="k"){
            el.style.backgroundColor=bg;
            el.style.borderRadius=Math.min(w,h)*0.25+"px";
          }
        }
        else{
          let svg;
          switch(ik.itype){
          case "k": svg=makeKnobFrames(101,fg,bg); break;
          }
          ik.sprites=100;
          el.style.backgroundImage="url(data:image/svg+xml;base64,"+btoa(svg)+")";
          el.style.backgroundSize=`100% ${(ik.sprites+1)*100}%`;
        }
        ik.valrange={min:+el.min, max:(el.max=="")?100:+el.max, step:(el.step=="")?1:+el.step};
        el.redraw(true);
      };
      el.setValue=(v)=>{
        v=(Math.round((v-ik.valrange.min)/ik.valrange.step))*ik.valrange.step+ik.valrange.min;
        if(v<ik.valrange.min) v=ik.valrange.min;
        if(v>ik.valrange.max) v=ik.valrange.max;
        el.value=v;
        if(el.value!=ik.oldvalue){
          el.setAttribute("value",el.value);
          el.redraw();
          let event=document.createEvent("HTMLEvents");
          event.initEvent("input",false,true);
          el.dispatchEvent(event);
          ik.oldvalue=el.value;
        }
      };
      ik.pointerdown=(ev)=>{
        el.focus();
        if(ev.touches)
          ev = ev.touches[0];
        let rc=el.getBoundingClientRect();
        let cx=(rc.left+rc.right)*0.5,cy=(rc.top+rc.bottom)*0.5;
        let dx=ev.clientX,dy=ev.clientY;
        let da=Math.atan2(ev.clientX-cx,cy-ev.clientY);
        if(ik.itype=="k"&&op.knobMode=="circularabs"){
          dv=ik.valrange.min+(da/Math.PI*0.75+0.5)*(ik.valrange.max-ik.valrange.min);
          el.setValue(dv);
        }
        if(ik.itype!="k"&&op.sliderMode=="abs"){
          dv=(ik.valrange.min+ik.valrange.max)*0.5+((dx-cx)/ik.sensex-(dy-cy)/ik.sensey)*(ik.valrange.max-ik.valrange.min);
          el.setValue(dv);
        }
        ik.dragfrom={x:ev.clientX,y:ev.clientY,a:Math.atan2(ev.clientX-cx,cy-ev.clientY),v:+el.value};
        document.addEventListener("mousemove",ik.pointermove);
        document.addEventListener("mouseup",ik.pointerup);
        document.addEventListener("touchmove",ik.pointermove);
        document.addEventListener("touchend",ik.pointerup);
        document.addEventListener("touchcancel",ik.pointerup);
        document.addEventListener("touchstart",ik.preventScroll);
        ev.preventDefault();
        ev.stopPropagation();
      };
      ik.pointermove=(ev)=>{
        let dv;
        let rc=el.getBoundingClientRect();
        let cx=(rc.left+rc.right)*0.5,cy=(rc.top+rc.bottom)*0.5;
        if(ev.touches)
          ev = ev.touches[0];
        let dx=ev.clientX-ik.dragfrom.x,dy=ev.clientY-ik.dragfrom.y;
        let da=Math.atan2(ev.clientX-cx,cy-ev.clientY);
        switch(ik.itype){
        case "k":
          switch(op.knobMode){
          case "linear":
            dv=(dx/ik.sensex-dy/ik.sensey)*(ik.valrange.max-ik.valrange.min);
            if(ev.shiftKey)
              dv*=0.2;
            el.setValue(ik.dragfrom.v+dv);
            break;
          case "circularabs":
            if(!ev.shiftKey){
              dv=ik.valrange.min+(da/Math.PI*0.75+0.5)*(ik.valrange.max-ik.valrange.min);
              el.setValue(dv);
              break;
            }
          case "circularrel":
            if(da>ik.dragfrom.a+Math.PI) da-=Math.PI*2;
            if(da<ik.dragfrom.a-Math.PI) da+=Math.PI*2;
            da-=ik.dragfrom.a;
            dv=da/Math.PI/1.5*(ik.valrange.max-ik.valrange.min);
            if(ev.shiftKey)
              dv*=0.2;
            el.setValue(ik.dragfrom.v+dv);
          }
          break;
        }
      };
      ik.pointerup=()=>{
        document.removeEventListener("mousemove",ik.pointermove);
        document.removeEventListener("touchmove",ik.pointermove);
        document.removeEventListener("mouseup",ik.pointerup);
        document.removeEventListener("touchend",ik.pointerup);
        document.removeEventListener("touchcancel",ik.pointerup);
        document.removeEventListener("touchstart",ik.preventScroll);
        let event=document.createEvent("HTMLEvents");
        event.initEvent("change",false,true);
        el.dispatchEvent(event);
      };
      ik.preventScroll=(ev)=>{
        ev.preventDefault();
      };
      ik.keydown=()=>{
        el.redraw();
      };
      ik.wheel=(ev)=>{
        let delta=ev.deltaY>0?-ik.valrange.step:ik.valrange.step;
        if(!ev.shiftKey)
          delta*=5;
        el.setValue(+el.value+delta);
        ev.preventDefault();
        ev.stopPropagation();
      };
      el.redraw=(f)=>{
        if(f||ik.valueold!=el.value){
          let v=(el.value-ik.valrange.min)/(ik.valrange.max-ik.valrange.min);
          if(ik.sprites>=1)
            el.style.backgroundPosition="0px "+(-((v*ik.sprites)|0)*ik.frameheight)+"px";
          else{
            switch(ik.itype){
            case "k":
              el.style.transform="rotate("+(270*v-135)+"deg)";
              break;
            }
          }
          ik.valueold=el.value;
        }
      };
      el.refresh();
      el.redraw(true);
      el.addEventListener("keydown",ik.keydown);
      el.addEventListener("mousedown",ik.pointerdown);
      el.addEventListener("touchstart",ik.pointerdown);
      el.addEventListener("wheel",ik.wheel);
    }
    let refreshque=()=>{
      let elem=document.querySelectorAll("input.inputKnob,input.input-slider");
      for(let i=0;i<elem.length;++i)
        procque.push([initKnobs,elem[i]]);
      elem=document.querySelectorAll("input[type=checkbox].input-switch,input[type=radio].input-switch");
      for(let i=0;i<elem.length;++i){
        procque.push([initSwitches,elem[i]]); 
      }
    }
    let procque=[];
    refreshque();
    setInterval(()=>{
      for(let i=0;procque.length>0&&i<8;++i){
        let q=procque.shift();
        q[0](q[1]);
      }
      if(procque.length<=0)
        refreshque();
    },50);
  });
 
  
 //Listeners// 
rotativeButtons.forEach( (button) => {
    button.addEventListener('input', (e)=>{     //lorsqu'on tourne le bouton 
        addScreen(e.target.value,e.target.id);
        e.stopPropagation();
    });
    button.addEventListener('mousedown', (e)=>{   //lorsqu'on appuie sur le bouton 
        addScreen(e.target.value,e.target.id)
        e.stopPropagation();
    });
    button.addEventListener('change', (e)=>{    //lorsqu'on relève le bouton
        defaultScreen();
        e.stopPropagation();
    });
})

rotativePartButtons.forEach( (button) => {
    button.addEventListener('input', (e)=>{    
        addScreen(e.target.value,e.target.id);
        addChordGrid();
        e.stopPropagation();
    });
    button.addEventListener('mousedown', (e)=>{ 
        addScreen(e.target.value,e.target.id);
        addChordGrid();
        e.stopPropagation();
    });
    button.addEventListener('change', (e)=>{
        refreshEvents();  //on change le playback 
        defaultScreen();
        e.stopPropagation();
    });
})

// Le bouton mood doit faire changer la liste des keys et des types, ramener le bouton type à 0
moodBtn.addEventListener('input', (e)=> {
  let moodStatus = 0; // variable 0 ou 1 pour les fonctions de mise à jour des listes d'accords
  if (e.target.checked)
    moodStatus = 1;
  else
    moodStatus = 0;

  setParameterValue(moodStatus,2);   //on écrit la valeur du mode
  updateKeys(parametersValues[2]); //on met à jour la liste des keys
  updateTypes(parametersValues[2]);//on met à jour la liste des types et on ramène le bouton type à 0
  addScreen(moodStatus,e.target.id);
  addChordGrid();
  refreshEvents();
})
moodBtn.addEventListener('mousedown', (e)=>{ 
  addScreen(e.target.value,e.target.id);
  e.stopPropagation();
});
moodBtn.addEventListener('change', (e)=>{
  loadSamplesOnChange();
  e.stopPropagation();
});

//Quand on tourne le bouton type, la grid d'accords se met à jour 
typeBtn.addEventListener('input',(e) => {
  addChordGrid();
})

//Le bouton sample est à part car il doit lancer l'upload des samples uniquement sur relachement du pot
sampleBtn.addEventListener('input', (e)=> {
  addScreen(e.target.value,e.target.id);
  e.stopPropagation();
})
sampleBtn.addEventListener('mousedown', (e)=>{ 
  addScreen(e.target.value,e.target.id);
  e.stopPropagation();
});
sampleBtn.addEventListener('change', (e)=>{
  loadSamplesOnChange();
  e.stopPropagation();
});

patternBtn.addEventListener('input', (e)=> {
  addScreen(e.target.value,e.target.id);
  e.stopPropagation();
})
patternBtn.addEventListener('mousedown', (e)=>{ 
  addScreen(e.target.value,e.target.id);
  e.stopPropagation();
});
patternBtn.addEventListener('change', (e)=>{  
  refreshPattern();
  defaultScreen();
  e.stopPropagation();
});

muteButtons.forEach ( (button)=> {
    button.addEventListener('click', (e)=>{addScreenMute(e.target.id)});
})
controlButtons.forEach ( (button)=> {
    button.addEventListener('click', (e)=>{addScreenControl(e.target.id)});
})





