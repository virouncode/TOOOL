// ****************************************TOUTES LES FONCTIONS DE THEORIE MUSICALE**************************************** //
//TOUS LES INTERVALLES//
//CHAQUE PAR LIGNE/COLONNE CORRESPOND ENTRE ELLES//
const allRoot = [
    ['Cbb','Cb','C','C#','Cx'],
    ['Dbb','Db','D','D#','Dx'],
    ['Ebb','Eb','E','E#','Ex'],
    ['Fbb','Fb','F','F#','Fx'],
    ['Gbb','Gb','G','G#','Gx'],
    ['Abb','Ab','A','A#','Ax'],
    ['Bbb','Bb','B','B#','Bx'],
]
const allMinorSecond = [
    ['-','Dbb','Db','D','D#'],
    ['-','Ebb','Eb','E','E#'],
    ['Fbb','Fb','F','F#','Fx'],
    ['-','Gbb','Gb','G','G#'],
    ['-','Abb','Ab','A','A#'],
    ['-','Bbb','Bb','B','B#'],
    ['Cbb','Cb','C','C#','Cx']
]
const allMajorSecond = [
    ['Dbb','Db','D','D#','Dx'],
    ['Ebb','Eb','E','E#','Ex'],
    ['Fb','F','F#','Fx','-'],
    ['Gbb','Gb','G','G#','Gx'],
    ['Abb','Ab','A','A#','Ax'],
    ['Bbb','Bb','B','B#','Bx'],
    ['Cb','C','C#','Cx','-']
]
const allMinorThird = [
    ['-','Ebb','Eb','E','E#'],
    ['Fbb','Fb','F','F#','Fx'],
    ['Gbb','Gb','G','G#','Gx'],
    ['-','Abb','Ab','A','A#'],
    ['-','Bbb','Bb','B','B#'],
    ['Cbb','Cb','C','C#','Cx'],
    ['Dbb','Db','D','D#','Dx']
]
const allMajorThird = [
    ['Ebb','Eb','E','E#','Ex'],
    ['Fb','F','F#','Fx','-'],
    ['Gb','G','G#','Gx','-'],
    ['Abb','Ab','A','A#','Ax'],
    ['Bbb','Bb','B','B#','Bx'],
    ['Cb','C','C#','Cx','-'],
    ['Db','D','D#','Dx','-']
]
const allFourth = [
    ['Fbb','Fb','F','F#','Fx'],
    ['Gbb','Gb','G','G#','Gx'],
    ['Abb','Ab','A','A#','Ax'],
    ['-','Bbb','Bb','B','B#'],
    ['Cbb','Cb','C','C#','Cx'],
    ['Dbb','Db','D','D#','Dx'],
    ['Ebb','Eb','E','E#','Ex'],
]
const allAugmentedFourth = [
    ['Fb','F','F#','Fx','-'],
    ['Gb','G','G#','Gx','-'],
    ['Ab','A','A#','Ax','-'],
    ['Bbb','Bb','B','B#','Bx'],
    ['Cb','C','C#','Cx','-'],
    ['Db','D','D#','Dx','-'],
    ['Eb','E','E#','Ex','-'],
]
const allFifth = [
    ['Gbb','Gb','G','G#','Gx'],
    ['Abb','Ab','A','A#','Ax'],
    ['Bbb','Bb','B','B#','Bx'],
    ['Cbb','Cb','C','C#','Cx'],
    ['Dbb','Db','D','D#','Dx'],
    ['Ebb','Eb','E','E#','Ex'],
    ['Fb','F','F#','Fx','-'],
]
const allDiminishedFifth = [
    ['-','Gbb','Gb','G','G#'],
    ['-','Abb','Ab','A','A#'],
    ['-','Bbb','Bb','B','B#'],
    ['-','Cbb','Cb','C','C#'],
    ['-','Dbb','Db','D','D#'],
    ['-','Ebb','Eb','E','E#'],
    ['Fbb','Fb','F','F#','Fx'],
]
const allAugmentedFifth = [
    ['Gb','G','G#','Gx','-'],
    ['Ab','A','A#','Ax','-'],
    ['Bb','B','B#','Bx','-'],
    ['Cb','C','C#','Cx','-'],
    ['Db','D','D#','Dx','-'],
    ['Eb','E','E#','Ex','-'],
    ['F','F#','Fx','-','-'],
]
const allMinorSixth = [
    ['-','Abb','Ab','A','A#'],
    ['-','Bbb','Bb','B','B#'],
    ['Cbb','Cb','C','C#','Cx'],
    ['-','Dbb','Db','D','D#'],
    ['-','Ebb','Eb','E','E#'],
    ['Fbb','Fb','F','F#','Fx'],
    ['Gbb','Gb','G','G#','Gx'],
]
const allMajorSixth = [
    ['Abb','Ab','A','A#','Ax'],
    ['Bbb','Bb','B','B#','Bx'],
    ['Cb','C','C#','Cx','-'],
    ['Dbb','Db','D','D#','Dx'],
    ['Ebb','Eb','E','E#','Ex'],
    ['Fb','F','F#','Fx','-'],
    ['Gb','G','G#','Gx','-'],
]
const allDiminishedSeventh = [
    ['-','-','Bbb','Bb','B'],
    ['-','Cbb','Cb','C','C#'],
    ['-','Dbb','Db','D','D#'],
    ['-','-','Ebb','Eb','E'],
    ['-','Fbb','Fb','F','F#'],
    ['-','Gbb','Gb','G','G#'],
    ['-','Abb','Ab','A','A#'],
]
const allMinorSeventh = [
    ['-','Bbb','Bb','B','B#'],
    ['Cbb','Cb','C','C#','Cx'],
    ['Dbb','Db','D','D#','Dx'],
    ['-','Ebb','Eb','E','E#'],
    ['Fbb','Fb','F','F#','Fx'],
    ['Gbb','Gb','G','G#','Gx'],
    ['Abb','Ab','A','A#','Ax'],
]
const allMajorSeventh = [
    ['Bbb','Bb','B','B#','B#x'],
    ['Cb','C','C#','Cx','-'],
    ['Db','D','D#','Dx','-'],
    ['Ebb','Eb','E','E#','Ex'],
    ['Fb','F','F#','Fx','-'],
    ['Gb','G','G#','Gx','-'],
    ['Ab','A','A#','Ax','-'],
]

// TOUTES LES KEYS POSSIBLES //
const noteNames = ['C','D','E','F','G','A','B'];
const majorKeysNames = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
const minorKeysNames = ['A','Bb','B','C','C#','D','Eb','E','F','F#','G','G#'];

const keysNamesArray = {
    major : majorKeysNames,
    minor : minorKeysNames
}

//GAMMES EN CHIFFRES ARABES//
const arabicNumbersScales = {
    major : ['1','2','3','4','5','6','7'],
    dorian : ['1','2','b3','4','5','6','b7'],
    phrygian : ['1','b2','b3','4','5','b6','b7'],
    lydian : ['1','2','3','#4','5','6','7'],
    mixolydian : ['1','2','3','4','5','6','b7'],
    minor : ['1','2','b3','4','5','b6','b7'],
    locrian : ['1','b2','b3','4','b5','b6','b7'],
    harmonicminor : ['1','2','b3','4','5','b6','7'],
    melodicminor : ['1','2','b3','4','5','6','7']
}
//GAMMES EN CHIFFRES ROMAINS//
const romanNumbersScales = {
    major : ['I','II','III','IV','V','VI','VII'],
    dorian : ['I','II','bIII','IV','V','VI','bVII'],
    phrygian : ['I','bII','bIII','IV','V','bVI','bVII'],
    lydian : ['I','II','III','#IV','V','VI','VII'],
    mixolydian : ['I','II','III','IV','V','VI','bVII'],
    minor : ['I','II','bIII','IV','V','bVI','bVII'],
    locrian : ['I','bII','bIII','IV','bV','bVI','bVII'],
    harmonicminor : ['I','II','bIII','IV','V','bVI','VII'],
    melodicminor : ['I','II','bIII','IV','V','VI','VII']
}

//****SCALES***// 
//Ces fonctions créent n'importe quelle gamme ou mode en fonction de la tonique (string) et l'octave (integer) à laquelle elle doit être jouée
//Si on ne veut pas d'octave en particulier, il suffit de ne pas mettre de second paramètre

const createMajorScale = (tonic, octave='') => {
    let majorScale = [];
    let index = majorKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur cette tonalité majeure n'existe pas")
        return
    }
    //On recherche la tonique dans allRoot
    let matchLine = 0 
    let matchColumn = 0 
    for (let line=0;line<allRoot.length;line++){
        for (let column=0;column<allRoot[line].length;column++){
            if (allRoot[line][column].localeCompare(tonic) == 0){
                matchLine = line;
                matchColumn = column;
            }
        }
    }
    //On va chercher les 2, 3, 4, 5, 6, 7 correspondantes : 
    majorScale.push(tonic)
    majorScale.push(allMajorSecond[matchLine][matchColumn])
    majorScale.push(allMajorThird[matchLine][matchColumn])
    majorScale.push(allFourth[matchLine][matchColumn])
    majorScale.push(allFifth[matchLine][matchColumn])
    majorScale.push(allMajorSixth[matchLine][matchColumn])
    majorScale.push(allMajorSeventh[matchLine][matchColumn])
  
    //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition;
    for (let i=0;i<majorScale.length;i++){
        if (majorScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let majorScaleOctave =[];
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        majorScaleOctave = majorScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        majorScaleOctave = majorScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        majorScaleOctave = majorScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return majorScaleOctave
}
const createDorianScale = (tonic,octave='') =>{
    let dorianScale = [];
    let relativeMajorScale = [];
    let index = dorianKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur ce mode dorien n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        dorianScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        dorianScale.push(relativeMajorScale[j]);
    }
    //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition = null;
    for (let i=0;i<dorianScale.length;i++){
        if (dorianScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let dorianScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        dorianScaleOctave = dorianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        dorianScaleOctave = dorianScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        dorianScaleOctave = dorianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return dorianScaleOctave
}
const createPhrygianScale = (tonic,octave='') =>{
    let phrygianScale = [];
    let relativeMajorScale = [];
    let index = phrygianKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur ce mode phrygien n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        phrygianScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        phrygianScale.push(relativeMajorScale[j]);
    }
  //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition = null;
    for (let i=0;i<phrygianScale.length;i++){
        if (phrygianScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let phrygianScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        phrygianScaleOctave = phrygianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        phrygianScaleOctave = phrygianScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        phrygianScaleOctave = phrygianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return phrygianScaleOctave
}
const createLydianScale = (tonic,octave='') => {
    let lydianScale = [];
    let relativeMajorScale = [];
    let index = lydianKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur ce mode lydien n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        lydianScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        lydianScale.push(relativeMajorScale[j]);
    }
  //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1;
        octaveSup=octave+1; 
    }
    let CPosition = null;
    for (let i=0;i<lydianScale.length;i++){
   
        if (lydianScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let lydianScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        lydianScaleOctave = lydianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        lydianScaleOctave = lydianScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        lydianScaleOctave = lydianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return lydianScaleOctave
}
const createMixolydianScale = (tonic,octave='') => {
    let mixolydianScale = [];
    let relativeMajorScale = [];
    let index = mixolydianKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur ce mode mixolydien n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        mixolydianScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        mixolydianScale.push(relativeMajorScale[j]);
    }
  //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition = null;
    for (let i=0;i<mixolydianScale.length;i++){
        if (mixolydianScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let mixolydianScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        mixolydianScaleOctave = mixolydianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        myxolydianScaleOctave = mixolydianScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        mixolydianScaleOctave = mixolydianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return mixolydianScaleOctave
}
const createMinorScale = (tonic,octave='') => {
    let minorScale = [];
    let relativeMajorScale = [];
    let index = minorKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur cette tonalité mineure n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        minorScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        minorScale.push(relativeMajorScale[j]);
    }
  //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition = null;
    for (let i=0;i<minorScale.length;i++){
        if (minorScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let minorScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        minorScaleOctave = minorScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        minorScaleOctave = minorScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        minorScaleOctave = minorScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return minorScaleOctave
}
const createLocrianScale = (tonic,octave='') => {
    let locrianScale = [];
    let relativeMajorScale = [];
    let index = locrianKeysNames.indexOf(tonic); 
    if (index == -1) {
        console.error("Erreur cette tonalité mineure n'existe pas")
        return
    }
    relativeMajorScale = createMajorScale(majorKeysNames[index]);
    let noteIndex = relativeMajorScale.indexOf(tonic);
    for (let i=noteIndex;i<relativeMajorScale.length;i++){
        locrianScale.push(relativeMajorScale[i]);
    }
    for (let j=0;j<noteIndex;j++){
        locrianScale.push(relativeMajorScale[j]);
    }
  //On place le chiffre d'octave
    let octaveInf = '';
    let octaveSup='';
    if (octave != ''){
        octaveInf=octave-1; 
        octaveSup=octave+1;
    }
    let CPosition = null;
    for (let i=0;i<locrianScale.length;i++){
        if (locrianScale[i].includes('C')){
            CPosition = i ;
        }
    }
    let locrianScaleOctave =[]
    if (tonic.includes('D') || tonic.includes('E') || tonic.includes('F')){
        locrianScaleOctave = locrianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octave.toString();
            }
            else{
                return note + octaveSup.toString();
            }
        })
    }
    else if (tonic.includes('Cb')){
        locrianScaleOctave = locrianScale.map( (note,index)=> {
            if (index==0){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    else {
        locrianScaleOctave = locrianScale.map( (note,index)=> {
            if (index<CPosition){
                return note + octaveInf.toString();
            }
            else{
                return note + octave.toString();
            }
        })
    }
    return locrianScaleOctave
}
const createHarmonicMinorScale = (tonic,octave='') => {
    let harmonicMinorScale = createMinorScale(tonic,octave);
    let lastNote = harmonicMinorScale[harmonicMinorScale.length-1]
    if (lastNote.includes('b')){
        lastNote = lastNote.substring(0,1)+ lastNote.substring(2);
    }
    else if (lastNote.includes('#')) {
        lastNote = lastNote.substring(0,1)+ 'x'+ lastNote.substring(2);
    }
    else {
        lastNote = lastNote.substring(0,1) + '#' + lastNote.substring(1);
    }
    harmonicMinorScale[harmonicMinorScale.length-1]=lastNote
    return harmonicMinorScale
}
const createMelodicMinorScale = (tonic, octave='') => {
    let melodicMinorScale = createHarmonicMinorScale(tonic,octave);
    let sixthNote = melodicMinorScale[melodicMinorScale.length-2]
    if (sixthNote.includes('b')){
        sixthNote = sixthNote.substring(0,1)+ sixthNote.substring(2);
    }
    else if (sixthNote.includes('#')) {
        sixthNote = sixthNote.substring(0,1)+ 'x'+ sixthNote.substring(2);
    }
    else {
        sixthNote = sixthNote.substring(0,1) + '#' + sixthNote.substring(1);
    }
    melodicMinorScale[melodicMinorScale.length-2]=sixthtNote
    return melodicMinorScale
}
const scaleConstructionFunctions = {
    major : createMajorScale,
    dorian : createDorianScale,
    phrygian : createPhrygianScale,
    lydian : createLydianScale,
    mixolydian : createMixolydianScale,
    minor : createMinorScale,
    locrian : createLocrianScale,
    harmonicminor : createHarmonicMinorScale,
    melodicminor : createMelodicMinorScale
}

//****CHORDS****//

//Ces fonctions permettent de construire n'importe quel accord en fonction de la fondamentale,l'octave et du voicing
const chordConstructionFunctions = {
    major : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5 ){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octave.toString()]
        }
        else {
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        }     
    },
    maj7 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let seventh = allMajorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }     
    },
    7 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let seventh = allMinorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }     
    },
    maj7Sharp11 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let seventh = allMajorSeventh[matchLine][matchColumn];
        let fourth = allAugmentedFourth[matchLine][matchColumn];    
        let octaveSup = octave+1;
        let indexRoot = 0;


        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
        
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),fourth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),fourth+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fourth+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),fourth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),fourth+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fourth+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fourth+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),fourth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),fourth+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fourth+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),fourth+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fourth+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }
    },
    6 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let sixth = allMajorSixth[matchLine][matchColumn];     
        let octaveSup = octave+1;
        let indexRoot = 0;
    $
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []

        if (indexRoot<2){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),sixth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot==2){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 6 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }
    },
    sus2 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let second = allMajorSeventh[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),second+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [second+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),second+octaveSup.toString()]
        }
        else if (indexRoot>=3 && indexRoot<6 ){
            rootPositionChord = [root+octave.toString(),second+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [second+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),second+octave.toString()]
        }
        else if (indexRoot == 6){
            rootPositionChord = [root+octave.toString(),second+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [second+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),second+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 2 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        } 
    },
    sus4 : (root, octave, voicing)=> {
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let fourth = allFourth[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),fourth+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),fourth+octaveSup.toString()]
        }
        else if (indexRoot==3){
            rootPositionChord = [root+octave.toString(),fourth+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),fourth+octave.toString()]
        }
        else if (indexRoot>3){
            rootPositionChord = [root+octave.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),fourth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 4 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        } 
    },
    susSharp4 : (root, octave, voicing)=> {
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let fourth = allAugmentedFourth[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),fourth+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),fourth+octaveSup.toString()]
        }
        else if (indexRoot==3){
            rootPositionChord = [root+octave.toString(),fourth+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),fourth+octave.toString()]
        }
        else if (indexRoot>3){
            rootPositionChord = [root+octave.toString(),fourth+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [fourth+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),fourth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 4 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        } 
    },
    m : (root, octave, voicing)=> {
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5 ){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octave.toString()]
        }
        else {
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        }  
    },
    m7 :(root, octave,voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let seventh = allMinorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }  
    },
    m6 : (root, octave,voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let sixth = allMajorSixth[matchLine][matchColumn];     
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []

        if (indexRoot<2){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),sixth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot==2){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),sixth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),sixth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),sixth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [sixth+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 6 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }
    },
    mmaj7: (root,octave,voicing) => {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allFifth[matchLine][matchColumn];
        let seventh = allMajorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        } 
    },
    m7b5: (root,octave,voicing) => {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allDiminishedFifth[matchLine][matchColumn];
        let seventh = allMinorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        } 
    },
    dim: (root,octave,voicing) => {
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMinorThird[matchLine][matchColumn];
        let fifth = allDiminishedFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5 ){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octave.toString()]
        }
        else {
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        } 
    },
    dim7: (root,octave,voicing)=> {
       //On recherche la fondamentale dans allRoot
       let matchLine = 0 
       let matchColumn = 0 
       for (let line=0;line<allRoot.length;line++){
           for (let column=0;column<allRoot[line].length;column++){
               if (allRoot[line][column].localeCompare(root) == 0){
                   matchLine = line;
                   matchColumn = column;
               }
           }
       }
       let third = allMinorThird[matchLine][matchColumn];
       let fifth = allDiminishedFifth[matchLine][matchColumn];
       let seventh = allDiminishedSeventh[matchLine][matchColumn]  
       let octaveSup = octave+1;
       let indexRoot = 0;
   
       for (let i =0;i<noteNames.length;i++){
           if(root.includes(noteNames[i])) { indexRoot = i }
       }

       if (root=='Cb') {indexRoot ==6}
       let rootPositionChord = []
       let firstInversionChord = []
       let secondInversionChord = []
       let thirdInversionChord = []
       if (indexRoot==0){
           rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
           firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
           secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
           thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
       }
       else if (indexRoot>=1 && indexRoot<3){
           rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
           firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
           secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
           thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
       }
       else if (indexRoot>=3 && indexRoot<5){
           rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
           firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
           secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
           thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
       }
       else{
           rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
           firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
           secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
           thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
       }
       switch(voicing){
           case 1 : return rootPositionChord;
           break;
           case 3 : return firstInversionChord;
           break;
           case 5 : return secondInversionChord;
           break ;
           case 7 : return thirdInversionChord;
           break;
           default : return rootPositionChord;
       }  
    },   
    aug : (root,octave,voicing) => {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allAugmentedFifth[matchLine][matchColumn]; 
        let octaveSup = octave+1;
        let indexRoot = 0;

        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }
    
        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        if (indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5 ){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octave.toString()]
        }
        else {
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            default : return rootPositionChord;
        }   
    },
    dominantSharp5 : (root, octave, voicing)=> {
        //On recherche la fondamentale dans allRoot
        let matchLine = 0 
        let matchColumn = 0 
        for (let line=0;line<allRoot.length;line++){
            for (let column=0;column<allRoot[line].length;column++){
                if (allRoot[line][column].localeCompare(root) == 0){
                    matchLine = line;
                    matchColumn = column;
                }
            }
        }
        let third = allMajorThird[matchLine][matchColumn];
        let fifth = allAugmentedFifth[matchLine][matchColumn];
        let seventh = allMinorSeventh[matchLine][matchColumn]  
        let octaveSup = octave+1;
        let indexRoot = 0;
    
        for (let i =0;i<noteNames.length;i++){
            if(root.includes(noteNames[i])) { indexRoot = i }
        }

        if (root=='Cb') {indexRoot ==6}
        let rootPositionChord = []
        let firstInversionChord = []
        let secondInversionChord = []
        let thirdInversionChord = []
        if (indexRoot==0){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octave.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octaveSup.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        else if (indexRoot>=1 && indexRoot<3){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octaveSup.toString(),root+octaveSup.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octave.toString()]
        }
        else if (indexRoot>=3 && indexRoot<5){
            rootPositionChord = [root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString(),root+octaveSup.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octave.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octave.toString(),fifth+octaveSup.toString()]
        }
        else{
            rootPositionChord = [root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString(),seventh+octaveSup.toString()]
            firstInversionChord = [third+octave.toString(),fifth+octave.toString(),seventh+octave.toString(),root+octave.toString()]
            secondInversionChord = [fifth+octave.toString(),seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString()]
            thirdInversionChord = [seventh+octave.toString(),root+octave.toString(),third+octaveSup.toString(),fifth+octaveSup.toString()]
        }
        switch(voicing){
            case 1 : return rootPositionChord;
            break;
            case 3 : return firstInversionChord;
            break;
            case 5 : return secondInversionChord;
            break ;
            case 7 : return thirdInversionChord;
            break;
            default : return rootPositionChord;
        }     
    }
}

//PERMET DE RENTRER UNE PROGRESSION D'ACCORDS EN RELATIF (chiffres romains) ET DE LA RESSORTIR EN ABSOLU (avec des vais accords)//
const toAbsoluteChordProgression = (relativeChordProgression, key, mode) => {
    
    let modeName = mode.toString().replace(/\s/g, "") //le nom du mode en minuscule sans espaces
    let scale = scaleConstructionFunctions[modeName](key)   //la gamme utilisée
    let romanRelativeScale = romanNumbersScales[modeName]
    let absoluteChordArray=[];
    let sharp = false;
    let flat = false;
    relativeChordProgression.forEach( (chord) => {
        //Si c'est un I
        if(chord.includes('I') && !chord.includes('II') && !chord.includes('III') && !chord.includes('IV') && !chord.includes('VI') && !chord.includes('VII')){
            //vraiment un I
            if(chord.substring(0,1)!='#'){
                absoluteChordArray.push(chord.replace('I',scale[0]))
            }
            //ou un #I
            else if(chord.substring(0,1)=='#'){
                if(scale[0].includes('#')){ absoluteChordArray.push(chord.replace('#I',scale[0].substring(0,1)+'x')) }
                else if(scale[0].includes('b')){ absoluteChordArray.push(chord.replace('#I',scale[0].substring(0,1))) }
                else { absoluteChordArray.push(chord.replace('#I',scale[0].substring(0,1)+'#')) }
            }
        }
        //Si c'est un II 
        else if(chord.includes('II') && !chord.includes('III') && !chord.includes('VII') ){
            flat = false
            if(romanRelativeScale[1].includes('b')) { flat = true }
            //vraiment un II
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!flat){  //la gamme a un II
                    absoluteChordArray.push(chord.replace('II',scale[1]))
                }
                else{  //la gamme a un bII
                    if(scale[1].includes('b')) {absoluteChordArray.push(chord.replace('II',scale[1].substring(0,1))) }
                    else{absoluteChordArray.push(chord.replace('II',scale[1].substring(0,1)+'#'))}
                }
            }
            //c'est un bII
            else if (chord.substring(0,1)=='b'){
                if(!flat){  //la gamme a un II
                    if(scale[1].includes('#')) { absoluteChordArray.push(chord.replace('bII',scale[1].substring(0,1))) }
                    else if(scale[1].includes('b')) {absoluteChordArray.push(chord.replace('bII',scale[1].substring(0,1)+'bb'))}
                    else{ absoluteChordArray.push(chord.replace('bII',scale[1].substring(0,1)+'b'))}
                }
                else{  //la gamme a un bII
                    absoluteChordArray.push(chord.replace('bII',scale[1]))
                }
            }
            //c'est un #II
            else {
                if(!flat){ //la gamme a un II
                    if(scale[1].includes('#')) { absoluteChordArray.push(chord.replace('#II',scale[1].substring(0,1)+'x')) }
                    else if(scale[1].includes('b')) {absoluteChordArray.push(chord.replace('#II',scale[1].substring(0,1)))}
                    else { absoluteChordArray.push(chord.replace('#II',scale[1].substring(0,1)+'#')) }
                }
                else{ //la gamme a un bII
                    if(scale[1].includes('b')) { absoluteChordArray.push(chord.replace('#II',scale[1].substring(0,1)+'#')) }
                    else { absoluteChordArray.push(chord.replace('#II',scale[1].substring(0,1)+'x')) }
                }
            }
        }
        //Si c'est un III
        else if(chord.includes('III')) {
            flat = false
            if(romanRelativeScale[2].includes('b') ) { flat = true }
            //vraiment un III
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!flat){  //la gamme a un III
                    absoluteChordArray.push(chord.replace('III',scale[2]))
                }
                else{ //la gamme a un bIII
                    if(scale[2].includes('b')) {absoluteChordArray.push(chord.replace('III',scale[2].substring(0,1))) }
                    else{ absoluteChordArray.push(chord.replace('III',scale[2].substring(0,1)+'#'))}
                }
            }
            //c'est un bIII
            else if (chord.substring(0,1)=='b'){
                if(!flat){  //la gamme a un III
                    if(scale[2].includes('#')) {absoluteChordArray.push(chord.replace('bIII',scale[2].substring(0,1))) }
                    else if(scale[2].includes('b')) {absoluteChordArray.push(chord.replace('bIII',scale[2].substring(0,1)+'bb')) }
                    else {absoluteChordArray.push(chord.replace('bIII',scale[2].substring(0,1)+'b')) }
                }
                else{  //la gamme a un bIII
                    absoluteChordArray.push(chord.replace('bIII',scale[2]))
                }
            }
        }
        //Si c'est un IV 
        else if (chord.includes('IV')){
            sharp = false
            if(romanRelativeScale[3].includes('#') ) { sharp = true }
            //vraiment un IV
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!sharp){   //la gamme a un IV
                    absoluteChordArray.push(chord.replace('IV',scale[3]))
                }
                else{   //la gamme a un #IV
                    if(!scale[3].includes('#') && !scale[3].includes('b')){absoluteChordArray.push(chord.replace('IV',scale[3].substring(0,1)+'b'))}
                    else {absoluteChordArray.push(chord.replace('IV',scale[3].substring(0,1)))}
                }
            }
            //c'est un #IV
            else if(chord.substring(0,1)=='#'){
                if(!sharp){   //la gamme a un IV
                    if(scale[3].includes('#')) { absoluteChordArray.push(chord.replace('#IV',scale[3].substring(0,1)+'x')) }
                    else if (scale[3].includes('b')) { absoluteChordArray.push(chord.replace('#IV',scale[3].substring(0,1))) }
                    else { absoluteChordArray.push(chord.replace('#IV',scale[3].substring(0,1)+'#')) }
                }
                else{ //la gamme a un #IV
                    absoluteChordArray.push(chord.replace('#IV',scale[3]))
                }
            }
        }
        //Si c'est un V
        else if (chord.includes('V') && !chord.includes('IV') && !chord.includes('VI') && !chord.includes('VII')){
            flat = false
            if(romanRelativeScale[4].includes('b')) { flat = true }
            //vraiment un V
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!flat){  //la gamme a un V
                    absoluteChordArray.push(chord.replace('V',scale[4]))
                }
                else{  //la gamme a un bV
                    if(scale[4].includes('b')) {absoluteChordArray.push(chord.replace('V',scale[4].substring(0,1))) }
                    else{absoluteChordArray.push(chord.replace('V',scale[4].substring(0,1)+'#'))}
                }
            }
            //c'est un bV
            else if (chord.substring(0,1)=='b'){
                if(!flat){  //la gamme a un V
                    if(scale[4].includes('#')) { absoluteChordArray.push(chord.replace('bV',scale[4].substring(0,1))) }
                    else if(scale[4].includes('b')) {absoluteChordArray.push(chord.replace('bV',scale[4].substring(0,1)+'bb'))}
                    else{ absoluteChordArray.push(chord.replace('bV',scale[4].substring(0,1)+'b'))}
                }
                else{  //la gamme a un bV
                    absoluteChordArray.push(chord.replace('bV',scale[4]))
                }
            }
            //c'est un #V
            else {
                if(!flat){ //la gamme a un V
                    if(scale[4].includes('#')) { absoluteChordArray.push(chord.replace('#V',scale[4].substring(0,1)+'x')) }
                    else if(scale[4].includes('b')) {absoluteChordArray.push(chord.replace('#V',scale[4].substring(0,1)))}
                    else { absoluteChordArray.push(chord.replace('#V',scale[4].substring(0,1)+'#')) }
                }
                else{ //la gamme a un bV
                    if(scale[4].includes('b')) { absoluteChordArray.push(chord.replace('#V',scale[4].substring(0,1)+'#')) }
                    else { absoluteChordArray.push(chord.replace('#V',scale[4].substring(0,1)+'x')) }
                }
            }
        }
        //Si c'est un VI
        else if (chord.includes('VI') && !chord.includes('VII')) {
            flat = false
            if(romanRelativeScale[5].includes('b')) { flat = true }
            //vraiment un VI
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!flat){  //la gamme a un VI
                    absoluteChordArray.push(chord.replace('VI',scale[5]))
                }
                else{  //la gamme a un bV
                    if(scale[5].includes('b')) {absoluteChordArray.push(chord.replace('VI',scale[5].substring(0,1))) }
                    else{absoluteChordArray.push(chord.replace('VI',scale[5].substring(0,1)+'#'))}
                }
            }
            //c'est un bV
            else if (chord.substring(0,1)=='b'){
                if(!flat){  //la gamme a un V
                    if(scale[5].includes('#')) { absoluteChordArray.push(chord.replace('bVI',scale[5].substring(0,1))) }
                    else if(scale[5].includes('b')) {absoluteChordArray.push(chord.replace('bVI',scale[5].substring(0,1)+'bb'))}
                    else{ absoluteChordArray.push(chord.replace('bVI',scale[5].substring(0,1)+'b'))}
                }
                else{  //la gamme a un bV
                    absoluteChordArray.push(chord.replace('bVI',scale[5]))
                }
            }
            //c'est un #V
            else {
                if(!flat){ //la gamme a un V
                    if(scale[5].includes('#')) { absoluteChordArray.push(chord.replace('#VI',scale[5].substring(0,1)+'x')) }
                    else if(scale[5].includes('b')) {absoluteChordArray.push(chord.replace('#VI',scale[5].substring(0,1)))}
                    else { absoluteChordArray.push(chord.replace('#VI',scale[5].substring(0,1)+'#')) }
                }
                else{ //la gamme a un bV
                    if(scale[5].includes('b')) { absoluteChordArray.push(chord.replace('#VI',scale[5].substring(0,1)+'#')) }
                    else { absoluteChordArray.push(chord.replace('#VI',scale[5].substring(0,1)+'x')) }
                }
            }
        }
        //Si c'est un VII
        else if (chord.includes('VII')) {
            flat = false
            if(romanRelativeScale[6].includes('b') ) { flat = true }
            //vraiment un VII
            if(chord.substring(0,1)!='#' && chord.substring(0,1)!='b'){
                if(!flat){  //la gamme a un VII
                    absoluteChordArray.push(chord.replace('VII',scale[6]))
                }
                else{ //la gamme a un bVII
                    if(scale[6].includes('b')) {absoluteChordArray.push(chord.replace('VII',scale[6].substring(0,1))) }
                    else{ absoluteChordArray.push(chord.replace('VII',scale[6].substring(0,1)+'#'))}
                }
            }
            //c'est un bVII
            else if (chord.substring(0,1)=='b'){
                if(!flat){  //la gamme a un VII
                    if(scale[6].includes('#')) {absoluteChordArray.push(chord.replace('bVII',scale[6].substring(0,1))) }
                    else if(scale[6].includes('b')) {absoluteChordArray.push(chord.replace('bVII',scale[6].substring(0,1)+'bb')) }
                    else {absoluteChordArray.push(chord.replace('bVII',scale[6].substring(0,1)+'b')) }
                }
                else{  //la gamme a un bVII
                    absoluteChordArray.push(chord.replace('bVII',scale[6]))
                }
            }
        }
    })
    //Gérer les renversement
    let root;
    let slashPosition;
    let absoluteChordInversionArray =[];  //Ce que la fonction va finalement renvoyer
    absoluteChordArray.forEach( (chord)=>{
        slashPosition = chord.indexOf('/');
        if(slashPosition != -1){    // il y a un renversement 
            let chordStart = chord.substring(0,slashPosition)  //avant le renversement
            // Recherche de la fondamentale
            if ((chordStart.substring(1,2) == 'b'&& chordStart.substring(1,3) !== 'bb')|| chordStart.substring(1,2)=='#' || chordStart.substring(1,2)=='x') {
                root = chordStart.substring(0,2);
            }
            else if (chordStart.substring(1,3) == 'bb'){
                root = chordStart.substring(0,3);
            }
            else{
                root = chordStart.substring(0,1);
            }
            //Trouver la fondamentale dans allRoot 
            let matchLine = 0 
            let matchColumn = 0 
            for (let line=0;line<allRoot.length;line++){
                for (let column=0;column<allRoot[line].length;column++){
                    if (allRoot[line][column].localeCompare(root) == 0){
                        matchLine = line;
                        matchColumn = column;
                    }
                }
            }
            //Aller chercher la note du renversement 
            let inversionNumber = chord.substring(slashPosition+1,chord.length)  //chiffre du renversement
            let inversionNote = '';
            switch (inversionNumber){
                case 'b2' : 
                    inversionNote = allMinorSecond[matchLine][matchColumn];
                break
                case '2' : 
                    inversionNote = allMajorSecond[matchLine][matchColumn];
                break
                case 'b3' : 
                    inversionNote = allMinorThird[matchLine][matchColumn];
                break
                case '3' : 
                    inversionNote = allMajorThird[matchLine][matchColumn];
                break
                case '4' : 
                    inversionNote = allFourth[matchLine][matchColumn];
                break
                case '#4' : 
                    inversionNote = allAugmentedFourth[matchLine][matchColumn];
                break
                case '5' : 
                    inversionNote = allFifth[matchLine][matchColumn];
                break
                case 'b5' : 
                    inversionNote = allDiminishedFifth[matchLine][matchColumn];
                break
                case '#5' : 
                    inversionNote = allAugmentedFifth[matchLine][matchColumn];
                break
                case 'b6' : 
                    inversionNote = allminorSixth[matchLine][matchColumn];
                break
                case '6' : 
                    inversionNote = allMajorSixth[matchLine][matchColumn];
                break
                case 'bb7' : 
                    inversionNote = allDiminishedSeventh[matchLine][matchColumn];
                break
                case 'b7' : 
                    inversionNote = allMinorSeventh[matchLine][matchColumn];
                break
                case '7' : 
                    inversionNote = allMajorSeventh[matchLine][matchColumn];
                break
            }
            absoluteChordInversionArray.push(chord.substring(0,slashPosition+1) + inversionNote)
        }
        else{
            absoluteChordInversionArray.push(chord)
        }
    }) 
    return absoluteChordInversionArray
}

export {chordConstructionFunctions, scaleConstructionFunctions, toAbsoluteChordProgression ,createMajorScale,createDorianScale,createPhrygianScale,createLydianScale,createMixolydianScale,createMinorScale,createLocrianScale,createHarmonicMinorScale,createMelodicMinorScale};
export {noteNames,keysNamesArray,majorKeysNames,minorKeysNames}
export {allRoot,allMinorSecond,allMajorSecond,allMinorThird,allMajorThird,allFourth,allAugmentedFourth,allDiminishedFifth,allFifth,allAugmentedFifth,allMinorSixth,allMajorSixth,allDiminishedSeventh,allMinorSeventh,allMajorSeventh}