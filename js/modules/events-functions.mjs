import {chordConstructionFunctions} from './music-functions.mjs';
import {duplicateItems,replaceAt} from './utility-functions.mjs';


//*******TOUTES LES FONCTIONS QUI PERMETTENT DE GENERER UN TABLEAU CAPABLE D'ETRE LU PAR TONE JS **********//

//FONCTION QUI RENVOIE SOUS FORME DE TABLEAUX LES NOTES QUI CONSTITUENT LES ACCORDS D'UNE PROGRESSION et LES BASSES ASSOCIEES//

//Entrées ['Cmaj7/3','Dm7','G7','Am7'], [tableau de voicings], [tableau d'octaves pour les accords], octave pour la basse
//Sorties [tableau avec les notes qui constituent les accords, tableau avec les notes de basse] 

const constructChordProgression = (absoluteChordsArray,voicingArray=[],chordOctaves=[],bassOctave='') => {
    let chordNotesArray = [] ;
    let bassLineArray = [];
    let chordNature = '';
    let tonic = '';
    
    absoluteChordsArray.forEach((chord,index) => {
        let slashPosition = chord.indexOf('/')   //renversement ? 
        let chordStart = '';    //avant le slash
        if(slashPosition!=-1){    //c'est un renversement
            chordStart = chord.substring(0,slashPosition)
            if ( (chordStart.substring(1,2) == 'b' && chordStart.substring(1,3)!== 'bb')|| chordStart.substring(1,2)=='#' || chordStart.substring(1,2)=='x') {
                tonic = chordStart.substring(0,2) 
                chordNature = chordStart.substring(2,slashPosition)
            }
            else if (chordStart.substring(1,3)== 'bb'){
                tonic = chordStart.substring(0,3) 
                chordNature = chordStart.substring(3,slashPosition)
            }
            else{
                tonic = chordStart.substring(0,1)
                chordNature = chordStart.substring(1,slashPosition)
            }
            bassLineArray.push({'note':chord.substring(slashPosition+1,chord.length)+bassOctave})
        }
        else{
            //c'est pas un renversement
            if ((chord.substring(1,2)=='b' && chord.substring(1,3)!=='bb') || chord.substring(1,2)=='#' || chord.substring(1,2)=='x') {
                tonic = chord.substring(0,2)
                chordNature = chord.substring(2,chord.length);
            }
            else if (chord.substring(1,3)=='bb'){
                tonic = chord.substring(0,3)
                chordNature = chord.substring(3,chord.length);
            }
            else{
                tonic = chord.substring(0,1)
                chordNature = chord.substring(1,chord.length);
            }
            bassLineArray.push({'note':tonic+bassOctave})
        }
        if (chordNature == ''){chordNature = 'major'}
        if (chordNature == '6'){chordNature = 'maj6'}
        if (chordNature == 'maj7#11'){chordNature = 'maj7Sharp11'}
        if (chordNature =='7#5'){chordNature='dominantSharp5'}
        if (chordNature =='°'){chordNature='dim'}
        if (chordNature =='°7'){chordNature='dim7'}
        if (chordNature =='sus#4'){chordNature='susSharp4'}
        if (chordNature =='-'){chordNature='m'}
        if (chordNature =='-7'){chordNature='m7'}
        if (chordNature =='-maj7'){chordNature='mmaj7'}
        if (chordNature =='-6'){chordNature='m6'}
        if (chordNature =='-7b5'){chordNature='m7b5'}

        chordNotesArray.push({'chord':chordConstructionFunctions[chordNature](tonic,chordOctaves[index],voicingArray[index])})  
    })
    return [chordNotesArray,bassLineArray];
}

//*****CONSTRUCTION D'UN TABLEAU A JOUER PAR TONE JS ********//

//-------POUR UNE SUITE D'ACCORDS------//
//On rentre une suite d'accord générée avec constructChordProgression, un motif définit dans "rhythmic motives", et un tableau de durée de chaque accord en mesures
//On obtient un tableau d'objets jouable par Tone.Part
const constructChordEventsArray = (chordProgression, motive, chordDurations) => {
    let chordEventsArray =[];
    let duplicateChords =[];
    let rhythmPattern = [];
    let motiveLen = motive.length;   //nbre de stabs par mesures
    let numberOfBars = chordDurations.reduce( (a,b) => a+b ) ;  //le nombre de mesures est la somme du tableau des durées d'accords
    
    //RHYTHM, DURATION, VELOCITY//  //on duplique le motif sur le nombre de mesures à jouer en changeant le time code
    for (let bar=0;bar<numberOfBars;bar++){
        for (let i=bar*motiveLen;i<(bar+1)*motiveLen;i++){         
            rhythmPattern.push({...motive[i-bar*motiveLen]})
            rhythmPattern[i].time=replaceAt(rhythmPattern[i].time,0,bar)
        }
    }
    
    //CHORDS//
    chordProgression[0].forEach( (chord, index) => {   //ATTENTION, chordProgression est un DOUBLE tableau
        for (let i=0;i<motiveLen*chordDurations[index];i++){
        duplicateChords.push(chord)     //pour chaque accord on le duplique autant de fois que la durée le demande
        }
    })

    //ON REGROUPE LES DEUX
    for (let i=0;i<rhythmPattern.length;i++){
        chordEventsArray.push( Object.assign(rhythmPattern[i],duplicateChords[i]))
    }
    chordEventsArray.forEach( (event,index)=> {
        
        if(event.syncopated==true){   
            if (index==chordEventsArray.length-1){
            event.chord = chordEventsArray[0].chord
            }
            else {
                chordEventsArray[index].chord = chordEventsArray[index+1].chord
            }
        }
    })
    return chordEventsArray    
}
//-------POUR UNE LIGNE DE BASSE------//
const constructBassEventsArray = (chordProgression, motive, chordDurations) => {
    let bassEventsArray =[];
    let rhythmPattern = [];
    let duplicateBass = [];
    let motiveLen = motive.length;
    let numberOfBars = chordDurations.reduce( (a,b) => a+b ) ;
    
    //RHYTHM, DURATION, VELOCITY//
    for (let bar=0;bar<numberOfBars;bar++){
        for (let i=bar*motiveLen;i<(bar+1)*motiveLen;i++){         
            rhythmPattern.push({...motive[i-bar*motiveLen]})
            rhythmPattern[i].time=replaceAt(rhythmPattern[i].time,0,bar)
        }
    }
    
    //BASSE//
    chordProgression[1].forEach( (chord, index) => {     //ATTENTION, chordProgression est un DOUBLE tableau
        for (let i=0;i<motiveLen*chordDurations[index];i++){
        duplicateBass.push(chord)
        }
    })

    //ON REGROUPE LES DEUX
    for (let i=0;i<rhythmPattern.length;i++){
        bassEventsArray.push( Object.assign(rhythmPattern[i],duplicateBass[i]))
    }
    bassEventsArray.forEach( (event,index)=> {
        
        if(event.syncopated==true){
            if (index==bassEventsArray.length-1){
            event.note = bassEventsArray[0].note
            }
            else {
                bassEventsArray[index].note = bassEventsArray[index+1].note
            }
        }
    })
    
    return bassEventsArray    
}
//--------POUR UN ELEMENT DE BATTERIE-----//
const constructDrumEventsArray = (note,motive,numberOfBars) => {
    let drumEventsArray =[{'note':note}];
    let motiveLen = motive.length;
    let rhythmPattern = [];
    
    for (let bar=0;bar<numberOfBars;bar++){
        for (let i=bar*motiveLen;i<(bar+1)*motiveLen;i++){         
            rhythmPattern.push({...motive[i-bar*motiveLen]})
            rhythmPattern[i].time=replaceAt(rhythmPattern[i].time,0,bar)
        }
    }
    //REPETITION DE LA NOTE QUI DECLENCHE L'ELEMENT//
    let duplicateDrum = duplicateItems(drumEventsArray,motiveLen*numberOfBars);

    //ON REGROUPE LES DEUX
    for (let i=0;i<duplicateDrum.length;i++){
        drumEventsArray.push( Object.assign(rhythmPattern[i],duplicateDrum[i]) )
    }    
    return drumEventsArray    
}

export {constructChordProgression,constructChordEventsArray,constructBassEventsArray,constructDrumEventsArray};