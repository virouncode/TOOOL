// *****FONCTIONS GENERALES DE MANIPULATION ***** //

const duplicateItems = (arr, numberOfRepetitions) => {
    return arr.flatMap(i => Array.from({ length: numberOfRepetitions }).fill(i));
}    
const replaceAt = (string, index, replace) => {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
const varToString = varObj => Object.keys(varObj)[0];

export {duplicateItems,replaceAt,varToString} 