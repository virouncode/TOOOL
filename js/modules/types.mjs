//******LES TYPES DE PROGRESSIONS D'ACCORD*********//

//ATTENTION !!!!! LA LISTE DES TYPES DE PROGRESSION DOIT CHANGER EN FONCTION DU MODE DEMANDé //
//CHAQUE TYPE doit contenir :
//  - une grille en chiffres romain 
//  - un tableau de voicings pour chaque accord
//  - un tableau d'octave pour chaque accord 
//  - une octave pour la basse
//  - un tableau avec la durée de chaque accord en mesures

//MAJOR//
const majorType0 = [['I','V','VIm','IV'], [1,3,1,1], [3,3,3,3], 1, [1,1,1,1]];
const majorType1 = [['I','VIm','IIm','V'],[1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const majorType2 = [['I','VIm','IV','V'],[1,1,1,1], [3,3,3,3], 1 , [1,1,1,1]];
const majorType3 = [['I','IV','V','I'], [1,1,1,1], [3,3,3,3], 1 , [1,1,1,1]];
const majorType4 = [['Imaj7','VIm7','IIm7','IVmaj7'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const majorType5 = [['Imaj7','I7','IVmaj7','IVm6'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const majorType6 = [['I','Imaj7/7','I7/b7','IVmaj7/3','IVm6/b3'], [1,1,1,1,1], [3,3,3,3,3], 1, [1,1,1,0.5,0.5]];
const lydianType0 = [['I','II','I','II'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const lydianType1 = [['Imaj7','II','IIIm7','II'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const lydianType2 = [['Imaj7#11','VIIm7'], [1,1], [3,3], 1, [1,1]];
const mixolydianType0 = [['I','bVII','I','Vm'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const mixolydianType1 = [['IV','bVII','I'], [1,1,1], [3,3,3], 1, [0.5,0.5,1]];
const mixolydianType2 = [['I','Vm7','IIm7','IV'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];

export const majorTypesList = [majorType0, majorType1, majorType2,majorType3, majorType4, majorType5, majorType6, lydianType0,lydianType1, lydianType2,mixolydianType0, mixolydianType1, mixolydianType2];
export const majorTypesNames = ['majorType0', 'majorType1', 'majorType2', 'majorType3', 'majorType4','majorType5', 'majorType6','lydianType0','lydianType1', 'lydianType2', 'mixolydianType0', 'mixolydianType1', 'mixolydianType2'];


//MINOR//
const minorType0 = [['Im','Vm','bVI','IVm'], [1,3,1,1], [3,3,3,3], 1, [1,1,1,1]];
const minorType1 = [['Im','bVI','V','Im'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const minorType2 = [['Im','bVI','IVm','Vm'], [1,1,1,1], [3,3,3,3],1 , [1,1,1,1]];
const minorType3 = [['Im7','IVm7','Vm7','Im7'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const minorType4 = [['Im7','bVImaj7','bIIImaj7','IVm7'] , [1,1,1,1], [3,3,3,3] , 1, [1,1,1,1]];
const minorType5 = [['Im','Im7','IVm','IVm6'] , [1,1,1,1], [3,3,3,3], 1  , [1,1,1,1]];
const minorType6 = [['Im','Im/7','Im/b7','VIm7b5','bVImaj7'], [1,1,1,1,1], [3,3,3,3,3], 1, [1,1,1,0.5,0.5]];
const dorianType0 = [['Im','IV','Im','IV'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const dorianType1 = [['Im7','IV7','Im7','IV7'],[1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const dorianType2 = [['Im7','bIII','Vm7','IV'],[1,1,1,1], [3,3,3,3], 1 , [1,1,1,1]];
const phrygianType0 = [['Im','bII','Im','bII'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];
const phrygianType1 = [['Im','bII','bIII','bVII'], [1,1,1,1], [3,3,3,3], 1, [1,1,1,1]];

export const minorTypesList = [minorType0, minorType1, minorType2, minorType3, minorType4, minorType5, minorType6, dorianType0, dorianType1, dorianType2, phrygianType0, phrygianType1];
export const minorTypesNames = ['minorType0', 'minorType1', 'minorType2', 'minorType3', 'minorType4', 'minorType5', 'minorType6', 'dorianType0', 'dorianType1', 'dorianType2', 'phrygianType0', 'phrygianType1'];

export const typesNamesArray = {
    major : majorTypesNames,
    minor : minorTypesNames
}

export const typesList = {
    major : majorTypesList,
    minor : minorTypesList
}





