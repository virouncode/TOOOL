import {mainVolume, sideChain} from './console.js'
import {kick, subKick, snare, chord, bass, hh} from './console.js'
import {createEvents} from './events.js'
import {loadSamples} from './load-samples.js'

//************************************TRANSPORT CONTROLS****************************//
var checkBoxPlay = document.getElementById("PLAY");
var checkBoxStop = document.getElementById("STOP");

// Variable d'état de lecture, par défaut play à l'ouverture de l'app
let playStatus = 1;

//PLAY//
let play=document.querySelector("#PLAY");
play.addEventListener('click',()=>{
  if (playStatus == 0) {
    playStatus = 1;
    Tone.start();
    Tone.Transport.start();
    mainVolume.mute = false;
    checkBoxPlay.checked = true;
    checkBoxStop.checked = false;
  }
  else {
    playStatus = 0;
    Tone.Transport.stop();
    mainVolume.mute = true;
    checkBoxPlay.checked = false; 
    checkBoxStop.checked = true;
  }
});
//STOP//
let stop=document.querySelector("#STOP");
stop.addEventListener('click',()=>{
  if (playStatus == 1) {
    playStatus = 0;
    Tone.Transport.stop();
    checkBoxPlay.checked = false; 
    mainVolume.mute = true;
  }
  else {
    checkBoxStop.checked = true;
  }
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
mainBPM.value = 105;
//SWING//
Tone.Transport.swing=0;
Tone.Transport.swingSubdivision="16n";

//Compasation de la latence pour le Sub
const subLatenceCompensation = 0.02;


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
    if(eventsArray.velocity>=0.8) {
      subKick.triggerAttackRelease(eventsArray.note, "64n", time+subLatenceCompensation, eventsArray.velocity);
      sideChain();
    }
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

//Load All Samples and play
loadSamples();

export {mainBPM, chordPart, subKickPart,bassPart, kickPart, snarePart,hhPart, playStatus}

