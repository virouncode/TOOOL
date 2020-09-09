// TOUS LES PARAMETRES DE L'APPLICATION //
import {keysNamesArray} from './music-functions.mjs';
import {typesNamesArray} from './types.mjs';

const parametersNames = ['BPM', 'KEY', 'MOOD', 'TYPE', 'SAMPLE', 'PATTERN', 'REVERB', 'LIFE', 'SIDECHAIN', 'ACCENT', 'ARP', 'VOLUME'];
let parametersValues = [90, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let keysNamesList = keysNamesArray.minor; 
const modesNamesList = ['Major', 'Minor'];
let typesNamesList = typesNamesArray.minor;
const samplesList = ['Rock', 'Dub', 'House', 'Funk', 'Cool', 'Slow', 'Ambiant', 'DubStep'];

const setKeysNamesList = (value) => keysNamesList = value ;
const setTypesNamesList = (value) => typesNamesList = value ;
const setParameterValue = (value,index) => parametersValues[index] = value;


export {parametersNames, parametersValues, keysNamesList, modesNamesList, typesNamesList,samplesList, setKeysNamesList, setTypesNamesList,setParameterValue }