//******************PATTERNS**************************//
//Les patterns rythmiques sont indépendants du reste, qu'on touche les boutons key, mode ou type, ça n'influe pas sur les patterns//
//On récupère les motifs rythmiques et on crée des patterns// 
import * as chordMotives from './chord-motives.js'
import * as bassMotives from './bass-motives.js'
import * as kickMotives from './kick-motives.js'
import * as snareMotives from './snare-motives.js'
import * as hhMotives from './hh-motives.js'

//Liste des patterns// 
//Un pattern comprend un motif de chord, un motif de basse, un motif de kick, un motif de snare, un motif de hh


const pattern0 = {
    chord : chordMotives.chordPop1,
    bass : bassMotives.bassEightDownbeat,
    kick : kickMotives.kickFourOnTheFloor,
    snare : snareMotives.snareTwoFour,
    hh : hhMotives.hhEightDownbeat
}

const pattern1 = {
    chord : chordMotives.chordPop2,
    bass : bassMotives.bassEightDownbeat,
    kick : kickMotives.kickFourOnTheFloor,
    snare : snareMotives.snareTwoFour,
    hh : hhMotives.hhEightUpbeat
}

const pattern2 = {
    chord : chordMotives.chordOneThree,
    bass : bassMotives.bassEightDownbeat,
    kick : kickMotives.kickFunkyDrummer,
    snare : snareMotives.snareFunkyDrummer,
    hh : hhMotives.hhSixteenDownbeat
}

const pattern3 = {
    chord : chordMotives.chordQuarterNoAccent,
    bass : bassMotives.bassEightNoAccent,
    kick : kickMotives.kickOneThree,
    snare : snareMotives.snareTwoFour,
    hh : hhMotives.hhEightDownbeat
}

const pattern4 = {
    chord : chordMotives.chordPop2,
    bass : bassMotives.bassEightDownbeat,
    kick : kickMotives.kickFunkyDrummer,
    snare : snareMotives.snareFunkyDrummer,
    hh : hhMotives.hhSixteenDownbeat
}

const pattern5 = {
    chord : chordMotives.chordEightUpbeat,
    bass : bassMotives.bassEightUpbeat,
    kick : kickMotives.kickFourOnTheFloor,
    snare : snareMotives.snareTwoFour,
    hh : hhMotives.hhEightUpbeat
}

const pattern6 = {
    chord : chordMotives.chordEightDownbeat,
    bass : bassMotives.bassEightDownbeat,
    kick : kickMotives.kickFourOnTheFloor,
    snare : snareMotives.snareTwoFour,
    hh : hhMotives.hhEightDownbeat
}

export const patternsList = [pattern0, pattern1, pattern2, pattern3, pattern4, pattern5, pattern6]
export const patternsNamesList = ['pattern0', 'pattern1', 'pattern2', 'pattern3', 'pattern4', 'pattern5', 'pattern6']
















