// LES "PARTITIONS" A JOUER PAR TONE JS //
import {constructChordProgression,constructChordEventsArray,constructBassEventsArray,constructDrumEventsArray} from './events-functions.mjs'
import {parametersValues,modesNamesList} from './parameters.mjs';
import {toAbsoluteChordProgression,keysNamesArray } from './music-functions.mjs';
import {patternsList} from './patterns.mjs'
import {typesList} from './types.mjs'
import {chordPart, bassPart, subKickPart, kickPart, snarePart, hhPart} from './player.mjs'

export const createEvents = () => {
    //On récupère les KEY, MODE, PATTERN, TYPE définis par les boutons
    let key,mode,type,pattern;
    mode = modesNamesList[parametersValues[2]].toString().toLowerCase().replace(/\s/g, "");  //nom du mode en minuscules sans espaces
    key = keysNamesArray[mode][parametersValues[1]].toString();
    type = typesList[mode][parametersValues[3]];//la bonne progression
    pattern = patternsList[parametersValues[5]];  //le bon pattern

    //On passe la progression d'accord en absolu
    let relativeChordProgression = type[0]; 
    let absoluteChordsProgression = toAbsoluteChordProgression(relativeChordProgression, key, mode);
 
    //On décompose la progression d'accord en un tableau de notes à jouer simultanément 
    let chordsVoicings = type[1]
    let chordsOctaves = type[2]
    let bassOctave = type[3]
    let chordsDurations = type[4]

    let chordProgression = constructChordProgression(absoluteChordsProgression,chordsVoicings,chordsOctaves,bassOctave)
  
    //On récupère les patterns de chacun des éléments 
    let chordPattern = pattern.chord
    let bassPattern = pattern.bass
    let kickPattern = pattern.kick
    let snarePattern = pattern.snare
    let hhPattern = pattern.hh

    //On crée les tableaux à jouer par TONE JS 
    let chordEventsArray = constructChordEventsArray(chordProgression,chordPattern,chordsDurations) 
    let bassEventsArray = constructBassEventsArray(chordProgression,bassPattern,chordsDurations)
    let numberOfBars = chordsDurations.reduce( (a,b) => a+b )

    let kickEventsArray = constructDrumEventsArray('C1',kickPattern,numberOfBars)
    let snareEventsArray = constructDrumEventsArray('C1',snarePattern,numberOfBars)
    let hhEventsArray = constructDrumEventsArray('C1',hhPattern,numberOfBars)

    let allEvents = [chordEventsArray,bassEventsArray,kickEventsArray,snareEventsArray,hhEventsArray]
    
    return [allEvents, numberOfBars]
}

export const refreshEvents = () => {
    
    let allEvents = createEvents()
    let [chordEvents, bassEvents, kickEvents, snareEvents, hhEvents] = allEvents[0]
    let numberOfBars = allEvents[1]

    Tone.Transport.stop()

    chordPart.clear()
    for (let i=0;i<chordEvents.length;i++){
        chordPart.add(chordEvents[i])
        chordPart.loopEnd = numberOfBars.toString()+'m'
    }

    bassPart.clear()
    for (let i=0;i<bassEvents.length;i++){
        bassPart.add(bassEvents[i])
        bassPart.loopEnd = numberOfBars.toString()+'m'
    }

    subKickPart.clear()
    for (let i=0;i<kickEvents.length;i++){
        subKickPart.add(kickEvents[i])
        subKickPart.loopEnd = numberOfBars.toString()+'m'
    }

    kickPart.clear()
    for (let i=0;i<kickEvents.length;i++){
        kickPart.add(kickEvents[i])
        kickPart.loopEnd = numberOfBars.toString()+'m'
    }

    snarePart.clear()
    for (let i=0;i<snareEvents.length;i++){
        snarePart.add(snareEvents[i])
        snarePart.loopEnd = numberOfBars.toString()+'m'
    }

    hhPart.clear()
    for (let i=0;i<hhEvents.length;i++){
        hhPart.add(hhEvents[i])
        hhPart.loopEnd = numberOfBars.toString()+'m'
    }

    Tone.Transport.start()
}