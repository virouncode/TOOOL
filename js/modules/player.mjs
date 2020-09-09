import {mainVolume} from './console.mjs'
import {kick, subKick, snare, chord, bass, hh} from './console.mjs'
import {createEvents} from './events.mjs'
//************************************TRANSPORT CONTROLS****************************//

//PLAY//
let play=document.querySelector("#PLAY");
play.addEventListener('click',()=>{
    Tone.start();
    Tone.Transport.start();
    mainVolume.mute = false;
});
//STOP//
let stop=document.querySelector("#STOP");
stop.addEventListener('click',()=>{
    Tone.Transport.stop();
    mainVolume.mute = true;
});
//SPACE BAR//
document.body.addEventListener ('keyup' , (e) => {
    if(e.keyCode == 32){
        if(Tone.Transport.state ==='started'){
            Tone.Transport.stop();
            mainVolume.mute = true;
        }
        else{
            Tone.start();
            Tone.Transport.start();
            mainVolume.mute = false; 
        }
    }
});
//BPM//
const mainBPM = Tone.Transport.bpm
mainBPM.value = 90;
//SWING//
Tone.Transport.swing=0.1;
Tone.Transport.swingSubdivision="16n";


//INITIALISATION DES PARTS//
//Récupérer numberOfBars,chordArray, bassArray, kickArray,etc.... grâce au pattern,tona,style,mode par défaut

let eventsArrays = createEvents() ;
let chordEvents = eventsArrays[0][0];
let bassEvents = eventsArrays[0][1];
let kickEvents = eventsArrays[0][2];
let subKickEvents = eventsArrays[0][2];
let snareEvents = eventsArrays[0][3];
let hhEvents = eventsArrays[0][4];
let numberOfBars = eventsArrays[1];

const chordPart = new Tone.Part(  (time, eventsArray) => {
    chord.triggerAttackRelease(eventsArray.chord, eventsArray.duration, time, eventsArray.velocity);
  }, chordEvents).start();
chordPart.loop = true;
chordPart.loopEnd = numberOfBars.toString()+'m';

const bassPart = new Tone.Part(  (time, eventsArray) => {
    bass.triggerAttackRelease(eventsArray.note, eventsArray.duration, time, eventsArray.velocity);
  }, bassEvents).start();
bassPart.loop = true;
bassPart.loopEnd = numberOfBars.toString()+'m';

const subKickPart = new Tone.Part(  (time, eventsArray) => {
    subKick.triggerAttackRelease(eventsArray.note, eventsArray.duration, time, eventsArray.velocity);
  }, subKickEvents).start();
subKickPart.loop = true;
subKickPart.loopEnd = numberOfBars.toString()+'m';

const kickPart = new Tone.Part(  (time, eventsArray) => {
    kick.triggerAttackRelease(eventsArray.note, eventsArray.duration, time, eventsArray.velocity);
  }, kickEvents).start();
kickPart.loop = true;
kickPart.loopEnd = numberOfBars.toString()+'m';

const snarePart = new Tone.Part(  (time, partArray) => {
    snare.triggerAttackRelease(partArray.note, partArray.duration, time, partArray.velocity);
  }, snareEvents).start();
snarePart.loop = true;
snarePart.loopEnd = numberOfBars.toString()+'m';

const hhPart = new Tone.Part(  (time, partArray) => {
    hh.triggerAttackRelease(partArray.note, partArray.duration, time, partArray.velocity);
  }, hhEvents).start();
hhPart.loop = true;
hhPart.loopEnd = numberOfBars.toString()+'m';


export {mainBPM, chordPart, subKickPart,bassPart, kickPart, snarePart,hhPart}

