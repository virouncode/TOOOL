import {samplesList, parametersValues} from './parameters.mjs';
import {chord, bass, kick, snare, hh} from './console.mjs';

function loadSamples(){
    // Repertory Samples Select
    const SamplesBtn = samplesList[parametersValues[4]];
    const RepertorySamples = "SAMPLES/" + SamplesBtn + "/";
    
    var audioSamples = [
        RepertorySamples + "Chord-C2.ogg",
        RepertorySamples + "Chord-Dd2.ogg",
        RepertorySamples + "Chord-Fd2.ogg",
        RepertorySamples + "Chord-A2.ogg",
        RepertorySamples + "Chord-C3.ogg",
        RepertorySamples + "Chord-Dd3.ogg",
        RepertorySamples + "Chord-Fd3.ogg",
        RepertorySamples + "Chord-A3.ogg",
        RepertorySamples + "Chord-C4.ogg",
        RepertorySamples + "Chord-Dd4.ogg",
        RepertorySamples + "Chord-Fd4.ogg",
        RepertorySamples + "Chord-A4.ogg",
        RepertorySamples + "Chord-C5.ogg",
        RepertorySamples + "Chord-Dd5.ogg",
        RepertorySamples + "Chord-Fd5.ogg",
        RepertorySamples + "Chord-A5.ogg",
        RepertorySamples + "Chord-C6.ogg",

        RepertorySamples + "Bass-C1.ogg",
        RepertorySamples + "Bass-Dd1.ogg",
        RepertorySamples + "Bass-Fd1.ogg",
        RepertorySamples + "Bass-A1.ogg",
        RepertorySamples + "Bass-C2.ogg",
        RepertorySamples + "Bass-Dd2.ogg",
        RepertorySamples + "Bass-Fd2.ogg",
        RepertorySamples + "Bass-A2.ogg",
        RepertorySamples + "Bass-C3.ogg",
        RepertorySamples + "Bass-Dd3.ogg",
        RepertorySamples + "Bass-Fd3.ogg",
        RepertorySamples + "Bass-A3.ogg",
        RepertorySamples + "Bass-C4.ogg",

        RepertorySamples + "Kick.ogg",
        RepertorySamples + "Snare.ogg",
        RepertorySamples + "HHopen.ogg",
        RepertorySamples + "HHclose.ogg"
    ];

    // On met en Pause pour le charger des nouveaux samples
    Tone.Transport.pause();

    // CHORD LOAD //
    chord.add('C2', audioSamples[0]);
    chord.add('D#2', audioSamples[1]);
    chord.add('F#2', audioSamples[2]);
    chord.add('A2', audioSamples[3]);
    chord.add('C3', audioSamples[4]);
    chord.add('D#3', audioSamples[5]);
    chord.add('F#3', audioSamples[6]);
    chord.add('A3', audioSamples[7]);
    chord.add('C4', audioSamples[8]);
    chord.add('D#4', audioSamples[9]);
    chord.add('F#4', audioSamples[10]);
    chord.add('A4', audioSamples[11]);
    chord.add('C5', audioSamples[12]);
    chord.add('D#5', audioSamples[12]);
    chord.add('F#5', audioSamples[14]);
    chord.add('A5', audioSamples[15]);
    chord.add('C6', audioSamples[16]);
    
     // BASS LOAD //
    bass.add('C1', audioSamples[17]);
    bass.add('D#1', audioSamples[18]);
    bass.add('F#1', audioSamples[19]);
    bass.add('A1', audioSamples[20]);
    bass.add('C2', audioSamples[21]);
    bass.add('D#2', audioSamples[22]);
    bass.add('F#2', audioSamples[23]);
    bass.add('A2', audioSamples[24]);
    bass.add('C3', audioSamples[25]);
    bass.add('D#3', audioSamples[26]);
    bass.add('F#3', audioSamples[27]);
    bass.add('A3', audioSamples[28]);
    bass.add('C4', audioSamples[29]);

    // DRUM LOAD //
    kick.add('C1', audioSamples[30]);
    snare.add('C1', audioSamples[31]);
    hh.add('C1', audioSamples[32]);
    hh.add('C6', audioSamples[33]);

    // Buffer qui attend que tous les samples soient chargés
    var hhBuffer = new Tone.Buffers({
        "C2" : audioSamples[0],
        "D#2" : audioSamples[1],
        "F#2" : audioSamples[2],
        "A2" : audioSamples[3],
        "C3" : audioSamples[4],
        "D#3" : audioSamples[5],
        "F#3" : audioSamples[6],
        "A3" : audioSamples[7],
        "C4" : audioSamples[8],
        "D#4" : audioSamples[9],
        "F#4" : audioSamples[10],
        "A4" : audioSamples[11],
        "C5" : audioSamples[12],
        "D#5" : audioSamples[13],
        "F#5" : audioSamples[14],
        "A5" : audioSamples[15],
        "C6" : audioSamples[16],

        "C1" : audioSamples[17],
        "D#1" : audioSamples[18],
        "F#1" : audioSamples[19],
        "A1" : audioSamples[20],
        "C2" : audioSamples[21],
        "D#2" : audioSamples[22],
        "F#2" : audioSamples[23],
        "A2" : audioSamples[24],
        "C3" : audioSamples[25],
        "D#3" : audioSamples[26],
        "F#3" : audioSamples[27],
        "A3" : audioSamples[28],
        "C4" : audioSamples[29],

        "C1" : audioSamples[30],
        "C1" : audioSamples[31],
        "C1" : audioSamples[32],
        "C6" : audioSamples[33]
    }, function(){
        // Tous les samples sont chargés on peut relancer le play
        Tone.Transport.start();
    });
}

function loadSamplesWave(){
    // Repertory Samples Select
    const SamplesBtn = samplesList[parametersValues[4]];
    const RepertorySamples = "SAMPLES/" + SamplesBtn + "/";
    
    var audioSamples = [
        RepertorySamples + "Chord-C2.wav",
        RepertorySamples + "Chord-Dd2.wav",
        RepertorySamples + "Chord-Fd2.wav",
        RepertorySamples + "Chord-A2.wav",
        RepertorySamples + "Chord-C3.wav",
        RepertorySamples + "Chord-Dd3.wav",
        RepertorySamples + "Chord-Fd3.wav",
        RepertorySamples + "Chord-A3.wav",
        RepertorySamples + "Chord-C4.wav",
        RepertorySamples + "Chord-Dd4.wav",
        RepertorySamples + "Chord-Fd4.wav",
        RepertorySamples + "Chord-A4.wav",
        RepertorySamples + "Chord-C5.wav",
        RepertorySamples + "Chord-Dd5.wav",
        RepertorySamples + "Chord-Fd5.wav",
        RepertorySamples + "Chord-A5.wav",
        RepertorySamples + "Chord-C6.wav",

        RepertorySamples + "Bass-C1.wav",
        RepertorySamples + "Bass-Dd1.wav",
        RepertorySamples + "Bass-Fd1.wav",
        RepertorySamples + "Bass-A1.wav",
        RepertorySamples + "Bass-C2.wav",
        RepertorySamples + "Bass-Dd2.wav",
        RepertorySamples + "Bass-Fd2.wav",
        RepertorySamples + "Bass-A2.wav",
        RepertorySamples + "Bass-C3.wav",
        RepertorySamples + "Bass-Dd3.wav",
        RepertorySamples + "Bass-Fd3.wav",
        RepertorySamples + "Bass-A3.wav",
        RepertorySamples + "Bass-C4.wav",

        RepertorySamples + "Kick.wav",
        RepertorySamples + "Snare.wav",
        RepertorySamples + "HHopen.wav",
        RepertorySamples + "HHclose.wav"
    ];

    // On met en Pause pour le charger des nouveaux samples
    Tone.Transport.pause();

    // CHORD LOAD //
    chord.add('C2', audioSamples[0]);
    chord.add('D#2', audioSamples[1]);
    chord.add('F#2', audioSamples[2]);
    chord.add('A2', audioSamples[3]);
    chord.add('C3', audioSamples[4]);
    chord.add('D#3', audioSamples[5]);
    chord.add('F#3', audioSamples[6]);
    chord.add('A3', audioSamples[7]);
    chord.add('C4', audioSamples[8]);
    chord.add('D#4', audioSamples[9]);
    chord.add('F#4', audioSamples[10]);
    chord.add('A4', audioSamples[11]);
    chord.add('C5', audioSamples[12]);
    chord.add('D#5', audioSamples[12]);
    chord.add('F#5', audioSamples[14]);
    chord.add('A5', audioSamples[15]);
    chord.add('C6', audioSamples[16]);
    
     // BASS LOAD //
    bass.add('C1', audioSamples[17]);
    bass.add('D#1', audioSamples[18]);
    bass.add('F#1', audioSamples[19]);
    bass.add('A1', audioSamples[20]);
    bass.add('C2', audioSamples[21]);
    bass.add('D#2', audioSamples[22]);
    bass.add('F#2', audioSamples[23]);
    bass.add('A2', audioSamples[24]);
    bass.add('C3', audioSamples[25]);
    bass.add('D#3', audioSamples[26]);
    bass.add('F#3', audioSamples[27]);
    bass.add('A3', audioSamples[28]);
    bass.add('C4', audioSamples[29]);

    // DRUM LOAD //
    kick.add('C1', audioSamples[30]);
    snare.add('C1', audioSamples[31]);
    hh.add('C1', audioSamples[32]);
    hh.add('C6', audioSamples[33]);

    // Buffer qui attend que tous les samples soient chargés
    var samplesBuffer = new Tone.Buffers({
        "C2" : audioSamples[0],
        "D#2" : audioSamples[1],
        "F#2" : audioSamples[2],
        "A2" : audioSamples[3],
        "C3" : audioSamples[4],
        "D#3" : audioSamples[5],
        "F#3" : audioSamples[6],
        "A3" : audioSamples[7],
        "C4" : audioSamples[8],
        "D#4" : audioSamples[9],
        "F#4" : audioSamples[10],
        "A4" : audioSamples[11],
        "C5" : audioSamples[12],
        "D#5" : audioSamples[13],
        "F#5" : audioSamples[14],
        "A5" : audioSamples[15],
        "C6" : audioSamples[16],

        "C1" : audioSamples[17],
        "D#1" : audioSamples[18],
        "F#1" : audioSamples[19],
        "A1" : audioSamples[20],
        "C2" : audioSamples[21],
        "D#2" : audioSamples[22],
        "F#2" : audioSamples[23],
        "A2" : audioSamples[24],
        "C3" : audioSamples[25],
        "D#3" : audioSamples[26],
        "F#3" : audioSamples[27],
        "A3" : audioSamples[28],
        "C4" : audioSamples[29],

        "C1" : audioSamples[30],
        "C1" : audioSamples[31],
        "C1" : audioSamples[32],
        "C6" : audioSamples[33]
    }, function(){
        // Tous les samples sont chargés on peut relancer le play
        Tone.Transport.start();
    });
}


export {loadSamples, loadSamplesWave}