import {parametersValues} from './parameters.mjs';

//*********************************************** CREATION DES INSTRUMENTS *******************************************//

// Volume des Instruments
const chordLevel = -1;
const bassLevel = -1;
const subLevel = -1;
const kickLevel = -1;
const snareLevel = -1;
const hhLevel = -1;

// Creation SubKick Numerique
let subKick = new Tone.MembraneSynth({
    pitchDecay: .02,
    octaves: 4,
    volume: subLevel,
    oscillator: {type: "sine"},
    envelope: {
      attack: 0.1,
      decay : 0.3,
      sustain: 0.5,
      release: 0.2,
      attackCurve: "exponential"
    }
  });

// Creation CHORD //
const chord = new Tone.Sampler();
const chordVolume = new Tone.Volume(chordLevel);

// Creation BASS //
const bass = new Tone.Sampler();
const bassVolume = new Tone.Volume(bassLevel);

// Creation KICK //
const kick = new Tone.Sampler();
const kickVolume = new Tone.Volume(kickLevel);

// Creation SNARE //
const snare = new Tone.Sampler();
const snareVolume = new Tone.Volume(snareLevel);

// Creation HH //
const hh = new Tone.Sampler();
const hhVolume = new Tone.Volume(hhLevel);


//************************************************ EFFECT && MASTER *******************************************************//

//MAIN VOLUME//
const mainVolume = new Tone.Volume(parametersValues[11]).toDestination();
mainVolume.mute = false;

// MASTER LIMITER
const limiter = new Tone.Limiter(-0.1);

// Create Reverbs //
const chordVerb = new Tone.Reverb();
const bassVerb = new Tone.Reverb();
const kickVerb = new Tone.Reverb();
const snareVerb = new Tone.Reverb();
const hhVerb = new Tone.Reverb();

// Volume du master Reverb
const reverbDefaultValue = -12; 
const masterReverb = new Tone.Volume(reverbDefaultValue); // Reliée au bouton REVERB

// Volumes Reverb
const chordReverbLevel = 0;
const bassReverbLevel = 0;
const kickReverbLevel = -20;
const snareReverbLevel = 2;
const hhReverbLevel = -4;
const chordReverbVolume = new Tone.Volume(chordReverbLevel);
const bassReverbVolume = new Tone.Volume(bassReverbLevel);
const kickReverbVolume = new Tone.Volume(kickReverbLevel);
const snareReverbVolume = new Tone.Volume(snareReverbLevel);
const hhReverbVolume = new Tone.Volume(hhReverbLevel);

// EQ de la reverb
var eqReverb = new Tone.EQ3({
    low : -40 ,
    mid : 0 ,
    high : -10 ,
    lowFrequency : 250 ,
    highFrequency : 1200
    });

// Parameter Reverb //
chordVerb.decay = 5;
chordVerb.preDelay = 0.3 ;
chordVerb.wet.value = 1;
bassVerb.decay = 3;
bassVerb.preDelay = 0.7 ;
bassVerb.wet.value = 1; 
kickVerb.decay = 2;
kickVerb.preDelay = 0.3 ;
kickVerb.wet.value = 1;
snareVerb.decay = 2;
snareVerb.preDelay = 0.01 ;
snareVerb.wet.value = 1;
hhVerb.decay = 4;
snareVerb.preDelay = 0.06 ;
hhVerb.wet.value = 1;

// Vibrato Reverb
const vibratoValue = -25;
const vibratoReverb = new Tone.Vibrato(1,1);
const vibratoReverbVolume = new Tone.Volume(vibratoValue).connect(vibratoReverb);

// SideChain BUS et Envelope
const sidechainDefaultValue = 0; // Relié au bouton SIDECHAIN
let sideChainBus = new Tone.Volume();
let sideChainEnv = new Tone.Envelope({
    attack: 0.01,
    decay: 1,
    sustain: 1,
    release: 10,
    attackCurve : "exponential",
    decayCurve : "exponential",
    releaseCurve : "exponential"
});
sideChainEnv.connect(sideChainBus.volume);
const sidechainCurve = new Tone.Oscillator('2n','sine').connect(sideChainBus.volume);
sidechainCurve.volume.value = sidechainDefaultValue;

const sideChain =() => {
    sidechainCurve.partials = [0.02, 0.31, 0.195];
    sidechainCurve.phase = 270;
    sidechainCurve.start();
    sidechainCurve.stop("+0.25"); //("+0.33")=>1n ("+0.33")=>1n. ("+0.25")=>2n ("+0.125")=>4n
}

// Auto Pan
const autoPan = new Tone.AutoPanner({
    frequency : "13n",
    depth : 0.7
}).toDestination().start();

// Pitch Shifter Chord
const lifeDefaultValue = -10; // Relié au bouton LIFE
const pitchChord = new Tone.PitchShift({
    delayTime : 0,
    feedback : 0.4,
    pitch : 12,
    wet : 0.04
}).connect(autoPan); 
const PitchChordVolume = new Tone.Volume(lifeDefaultValue).connect(pitchChord);


//******************************************* CONNECTION DES EFFETS ***********************************//

// Subkick vers l'input Limiter
subKick.connect(limiter);

// Instrument vers son input volume
chord.connect(chordVolume);
bass.connect(bassVolume);
kick.connect(kickVolume);
snare.connect(snareVolume);
hh.connect(hhVolume);

// Les volumes vers les input volume reverb et à l'input sidechain ou limiter (mise en //) 
chordVolume.fan(chordReverbVolume,sideChainBus, PitchChordVolume);
bassVolume.fan(bassReverbVolume,sideChainBus);
kickVolume.fan(kickReverbVolume,limiter);
snareVolume.fan(snareReverbVolume,limiter);
hhVolume.fan(hhReverbVolume,sideChainBus);

// Les volumes reverb vers leurs reverb
chordReverbVolume.connect(chordVerb);
bassReverbVolume.connect(bassVerb);
kickReverbVolume.connect(kickVerb);
snareReverbVolume.connect(snareVerb);
hhReverbVolume.connect(hhVerb);

// Les Reverb sont cononectées au volume general de la reverb //
chordVerb.connect(masterReverb);
bassVerb.connect(masterReverb);
kickVerb.connect(masterReverb);
snareVerb.connect(masterReverb);
hhVerb.connect(masterReverb);

// Volume general reverb vers l'EQ Reverb et le vibrato
masterReverb.fan(vibratoReverbVolume,eqReverb);

// AutoPan et PitchShifter Chord vers le Bus Sichain
autoPan.connect(sideChainBus);

// l'EQ reverb et le vibrato vers le Bus SideChain
eqReverb.connect(sideChainBus);
vibratoReverbVolume.connect(sideChainBus);

// Le Bus sidechain vers l'input limiter
sideChainBus.connect(limiter);

// Connect Limiter au Master
limiter.connect(mainVolume);

export {mainVolume, masterReverb, PitchChordVolume, sidechainCurve, kick, subKick, snare, chord, bass, hh, chordLevel, bassLevel, subLevel, kickLevel, snareLevel, hhLevel, chordVolume, bassVolume, kickVolume, snareVolume, hhVolume, sideChain}