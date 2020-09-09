import {mainBPM} from './player.mjs'
import {masterReverb,mainVolume} from './console.mjs'
import {keysNamesArray, toAbsoluteChordProgression} from './music-functions.mjs'
import {typesNamesArray} from './types.mjs'
import {patternsNamesList} from './patterns.mjs'
import {parametersNames, parametersValues, keysNamesList, modesNamesList, typesNamesList,samplesList, setKeysNamesList, setTypesNamesList,setParameterValue } from './parameters.mjs'
import {typesList} from './types.mjs'

//**********************************************TOUTES LES FONCTIONS QUI CONCERNENT L'ECRAN *******************************************//

//************************************************FONCTIONS DE MISES A JOUR DE L'ECRAN ****************************************//

//MET A JOUR LA LISTE DES PARAMETRES EN FONCTION DES BOUTONS TOURNéS ET FAIT DEFILER L'ECRAN PRINCIPAL//
const addScreen = (inputValue, item) => {

  var screenList = document.getElementById("MASTER_SCREEN").getElementsByTagName("li"); //Ecran gauche (principal)
  var screenMasterTop = document.getElementById("SCREEN_TOP");  //Titre de l'écran
  var screenRight = document.getElementById("SCREEN_RIGHT");  //Ecran de droite

  scrollScreenStyle(screenList);  //style de la liste déroulante (écran principal)

  switch(item){   //si on touche tel ou tel bouton
    case "BPM": 
      setParameterValue(inputValue,0);  //on met à jour la valeur 
      mainBPM.value = inputValue;  //on transmet au player
      scrollBpm(screenList, inputValue);  //on fait défiler les bpm
      break;
    case "KEY":
      setParameterValue(inputValue,1);
      scrollParametersNames(screenList, inputValue, keysNamesList);
      //faire une fonction qui rafraichit l'affichage de la progression d'accords
      break;
    case "MODE": 
      setParameterValue(inputValue,2);
      scrollParametersNames(screenList, inputValue, modesNamesList);
      break;
    case "TYPE": 
      setParameterValue(inputValue,3);
      scrolltypesNamesList(screenList, inputValue, typesNamesList);
      //faire une fonction qui rafraichit l'affichage de la progression d'accords
      break;
    case "SAMPLE": 
      setParameterValue(inputValue,4);
      scrollParametersNames(screenList, inputValue, samplesList);
      break;
    case "PATTERN": 
      setParameterValue(inputValue,5);
      scrollParametersNames(screenList, inputValue, patternsNamesList);
      break;
    case "REVERB": 
      let reverbVolumePercent = Math.round(100*inputValue);
      setParameterValue(reverbVolumePercent,6);
      let reverbVolumeDB = 20*Math.log(inputValue);
      masterReverb.volume.value = reverbVolumeDB;
      scrollVolume(screenList, reverbVolumePercent);
      break;
    case "LIFE": 
      setParameterValue(inputValue,7);
      scrollEffect(screenList, inputValue);
      break;    
    case "SIDECHAIN": 
      setParameterValue(inputValue,8);
      scrollEffect(screenList, inputValue);
      break;
    case "ACCENT": 
      setParameterValue(inputValue,9);
      scrollEffect(screenList, inputValue);
      break;
    case "ARP": 
      setParameterValue(inputValue,10);
      scrollEffect(screenList, inputValue);
      break;
    case "VOLUME": 
      let volumePercent = Math.round(100*inputValue);
      let volumeDB = 20*Math.log(inputValue);
      setParameterValue(volumePercent,11);
      mainVolume.volume.value = volumeDB;
      scrollVolume(screenList, volumePercent);
      break;
    default:
      inputValue = "NO PARAMETER\n" + inputValue;
  }
  screenMasterTop.value = item;    //Affiche en titre de l'ecran le paramètre qu'on est en train de bouger
  writeScreenRight(screenRight);   //Affiche le résum" des paramètres dans l'écran de droite
}
//MET A JOUR LE TITRE DE L'ECRAN PRINCIPAL LORSQU'ON TOUCHE AUX MUTES//
const addScreenMute = (item) => {
  var screenMasterTop = document.getElementById("SCREEN_TOP");
  var checkBoxMuteDrum = document.getElementById("MUTE_DRUM");
  var checkBoxMuteBASS = document.getElementById("MUTE_BASS");
  var checkBoxMuteChord = document.getElementById("MUTE_CHORD");

  switch(item){
    case "MUTE_DRUM":
      if (checkBoxMuteDrum.checked == true) {screenMasterTop.value = "DRUM MUTE";}
      else {screenMasterTop.value = "DRUM ON";}
      break;
    case "MUTE_BASS":
      if (checkBoxMuteBASS.checked == true) {screenMasterTop.value = "BASS MUTE";}
      else {screenMasterTop.value = "BASS ON";}
      break;
    case "MUTE_CHORD":
      if (checkBoxMuteChord.checked == true) {screenMasterTop.value = "CHORD MUTE";}
      else {screenMasterTop.value = "CHORD ON";}
      break;
  }
}
//MET A JOUR LE TITRE DE L'ECRAN PRINCIPAL LORSQU'ON TOUCHE AUX CONTROLES//
const addScreenControl =(item) =>{  
  var screenMasterTop = document.getElementById("SCREEN_TOP");
  var checkBoxPlay = document.getElementById("PLAY");
  var checkBoxStop = document.getElementById("STOP");
  var checkBoxExport = document.getElementById("EXPORT");
  var checkBoxPrevious = document.getElementById("PREVIOUS");
  var checkBoxNext = document.getElementById("NEXT");
  var checkBoxRandom = document.getElementById("RANDOM");

  switch(item){
    case "PLAY":
      if (checkBoxPlay.checked == true) {screenMasterTop.value = "PLAY";}
      else {screenMasterTop.value = "STOP";}
      break;
    case "STOP":
      if (checkBoxStop.checked == true) {screenMasterTop.value = "STOP";}
      else {screenMasterTop.value = "...";}
      break;
    case "EXPORT":
      if (checkBoxExport.checked == true) {screenMasterTop.value = "EXPORT";}
      else {screenMasterTop.value = "EXPORT END";}
      break;
    case "PREVIOUS":
      if (checkBoxPrevious.checked == true) {screenMasterTop.value = "PREVIOUS";}
      else {screenMasterTop.value = "CHORD ON";}
      break;
    case "NEXT":
      if (checkBoxNext.checked == true) {screenMasterTop.value = "NEXT";}
      else {screenMasterTop.value = "CHORD ON";}
      break;
    case "RANDOM":
      if (checkBoxRandom.checked == true) {screenMasterTop.value = "RANDOM";}
      else {screenMasterTop.value = "CHORD ON";}
      break;
  }
}
//MET A JOUR LA LISTE DES KEYS EN FONCTION DU MODE SELECTIONNE//
const updateKeys = (modeNumber) => {
  let newModeName = modesNamesList[modeNumber].toLowerCase().replace(/\s/g, "");
  setKeysNamesList(keysNamesArray[newModeName]);
}
//MET A JOUR LA LISTE DES TYPES EN FONCTION DU MODE SELECTIONNE ET RAMENE LE BOUTON TYPE A 0// 
const updateTypes = (modeNumber) => {
  let newModeName = modesNamesList[modeNumber].toLowerCase().replace(/\s/g, "");
  setTypesNamesList(typesNamesArray[newModeName]);
  let typeBtn = document.querySelector("#TYPE")
  setParameterValue(0,3);     
  typeBtn.setAttribute('max',typesNamesList.length-1)
  typeBtn.value = 0;
  typeBtn.setAttribute('value','0');
}
// MET A JOUR L'ECRAN DE DROITE //
const writeScreenRight = (screenRight) => {
  screenRight.value = parametersNames[0] + " : " + parametersValues[0].toString()  + " BPM\n";
  screenRight.value  = screenRight.value + parametersNames[1] + " : " + keysNamesList[parametersValues[1]]  + "\n";  
  screenRight.value  = screenRight.value + parametersNames[2] + " : " + modesNamesList[parametersValues[2]]  + "\n";  
  screenRight.value  = screenRight.value + parametersNames[3] + " : " + typesNamesList[parametersValues[3]].toString() + "\n"  
  screenRight.value  = screenRight.value + parametersNames[4] + " : " + samplesList[parametersValues[4]] + "\n";  
  screenRight.value  = screenRight.value + parametersNames[5] + " : " + patternsNamesList[parametersValues[5]].toString() + "\n";  
  screenRight.value  = screenRight.value + parametersNames[6] + " : " + parametersValues[6].toString() + " %\n"; 
  screenRight.value  = screenRight.value + parametersNames[7] + " : " + parametersValues[7].toString() + " %\n"; 
}
//STYLE DE LA LISTE DEROULANTE//
const scrollScreenStyle = (screenList) => {
  screenList[0].style.fontSize = "70%";
  screenList[0].style.opacity = "0.5";
  screenList[1].style.fontSize = "80%";
  screenList[1].style.opacity = "0.75";
  screenList[2].style.fontSize = "100%";
  screenList[2].style.opacity = "0.8";
  screenList[3].style.fontSize = "140%";
  screenList[3].style.opacity = "1";
  screenList[4].style.fontSize = "100%";
  screenList[4].style.opacity = "0.8";
  screenList[5].style.fontSize = "80%";
  screenList[5].style.opacity = "0.75";
  screenList[6].style.fontSize = "70%";
  screenList[6].style.opacity = "0.5";
}

//***********************************************FONCTIONS DE LA LISTE DEROULANTE **********************************************//

// AFFICHE LA LISTE CORRESPONDANT AU BOUTON DE BPM SUR L'ECRAN PRINCIPAL, FAIT DEFILER ET MET EN VALEUR LA VALEUR COURANTE
const scrollBpm = (screenList, inputValue) => {
  var cur;
  for(var i = 0; i < screenList.length; i++){
    cur = inputValue - 3 + i;
    if (cur >= 50 && cur <= 150)
      screenList[i].innerHTML = '\xa0\xa0\xa0' + cur.toString() + " BPM";
    else
      screenList[i].innerHTML = '\xa0\xa0\xa0' + "-";
  }
  screenList[3].innerHTML = "►" + inputValue.toString() + " BPM";
}
// AFFICHE LA LISTE CORRESPONDANT AUX BOUTONS D'EFFETS SUR L'ECRAN PRINCIPAL, FAIT DEFILER.....
const scrollEffect =(screenList, inputValue) => {
  var cur;
  for(var i = 0; i < screenList.length; i++){
    cur = inputValue - 3 + i;
    if (cur >= 0 && cur <= 100)
      screenList[i].innerHTML = '\xa0\xa0\xa0' + cur.toString() + " %";
    else
      screenList[i].innerHTML = '\xa0\xa0\xa0' + "-";
  }
  screenList[3].innerHTML = "►" + inputValue.toString() + " %";
}
// AFFICHE LA LISTE CORRESPONDANT AU BOUTON DE VOLUME SUR L'ECRAN PRINCIPAL, FAIT DEFILER....
const scrollVolume = (screenList, inputValue) => {
  var cur;
  for(var i = 0; i < screenList.length; i++){
    cur = inputValue - 3 + i;
    if (cur >= 0 && cur <= 100)
      screenList[i].innerHTML = '\xa0\xa0\xa0' + cur.toString() + " %";
    else
      screenList[i].innerHTML = '\xa0\xa0\xa0' + "-";
  }
  screenList[3].innerHTML = "►" + inputValue.toString() + " %";
}
// AFFICHE LA LISTE CORRESPONDANT AUX BOUTONS DE PARAMETRES SUR L'ECRAN PRINCIPAL, FAIT DEFILER....
const scrollParametersNames = (screenList, inputValue, listOfParameter) => {
  var cur;
  for(var i = 0; i < screenList.length; i++) {
    cur = inputValue - 3 + i;
    if (typeof(listOfParameter[cur]) !== 'undefined')
      screenList[i].innerHTML = '\xa0\xa0\xa0' + listOfParameter[cur].toString();
    else
      screenList[i].innerHTML = '\xa0\xa0\xa0' + "-";
  }
  screenList[3].innerHTML = "►" + listOfParameter[inputValue].toString();
}
// AFFICHE LA LISTE CORRESPONDANT AU BOUTON TYPE SUR L'ECRAN PRINCIPAL, FAIT DEFILER....
const scrolltypesNamesList = (screenList, inputValue, listOfTypes)  =>{
  var cur;
  for(var i = 0; i < screenList.length; i++) {
    cur = inputValue - 3 + i ;
    if (cur>=0 && cur<listOfTypes.length)
      screenList[i].innerHTML = '\xa0\xa0\xa0' + listOfTypes[cur].toString();
    else
      screenList[i].innerHTML = '\xa0\xa0\xa0' + "-";
  }
  screenList[3].innerHTML = "►" + listOfTypes[inputValue].toString();
}

//******************************************* FONCTIONS D'EFFACEMENT DE L'ECRAN **************************************************//

// AFFICHAGE ECRAN PRINCIPAL LORSQU'ON NE TOUCHE PAS LES BOUTONS //
const defaultScreen = () => {
  var screenList = document.getElementById("MASTER_SCREEN").getElementsByTagName("li");
  var screenMasterTop = document.getElementById("SCREEN_TOP");
  screenMasterTop.value = "BEAT";
  resetScreen(screenList);
  screenList[3].innerHTML = "- AUDIO VISUALIZER -";
}
// EFFACE TOUTE LA LISTE DEROULANTE DE L'ECRAN PRINCIPAL //
const resetScreen = (screenList) =>{
  for(var i = 0; i < screenList.length; i++) {
    screenList[i].style.fontSize = "94%";
    screenList[i].style.opacity = "1";
    screenList[i].innerHTML = "";
  }
}

//*******************************************FONCTION D'AFFICHAGE DE LA PROGRESSION D'ACCORD***************************************//
const addChordGrid = () => {
  //On récupère la progression d'accord
  let key,mode,type;
  mode = modesNamesList[parametersValues[2]].toString().toLowerCase().replace(/\s/g, "");  //nom du mode en minuscules sans espaces
  key = keysNamesArray[mode][parametersValues[1]].toString();
  type = typesList[mode][parametersValues[3]];
  
  //On passe la progression d'accord en absolu
  let relativeChordProgression = type[0]; //la bonne progression en chiffres romains
  let absoluteChordsProgression = toAbsoluteChordProgression(relativeChordProgression, key, mode);

  //On affiche dans l'écran les accords avec une police musicale et le chiffrage entre parenthèses
  var progressionDiv = document.getElementById('progression');
  var htmlGridCodeStart = '<div class="screenProgression" id="chordScreen"><div class="screenProgressionHighlight" id="SMALL_SCREEN_HIGH_LIGHT"></div><div class="progressionTxt" id="progressionTxt">';
  var htmlGridCodeEnd = '</div></div>';
  // reinitialiser grid HTML
  progressionDiv.innerHTML = '';
  absoluteChordsProgression.forEach( (chord,index) => {
      progressionDiv.innerHTML += htmlGridCodeStart + chord.replace('b','<sup>♭</sup>').replace('#','<sup>♯</sup>').replace('x','<sup>𝄪</sup>') +' (' + relativeChordProgression[index].replace('b','<sup>♭</sup>').replace('#','<sup>♯</sup>').replace('x','<sup>𝄪</sup>')  + ') '+ htmlGridCodeEnd;
  });
  // Nombre de colonne de la grid en fonction du nombre d'accord
 progressionDiv.style.gridTemplateColumns = "repeat(" +   absoluteChordsProgression.length + ", 1fr)";
  // Reduction de l'espace entre les elements de la grid en fonction de la taille 
 progressionDiv.style.gridColumnGap = (10-absoluteChordsProgression.length) + '%';

}

export {writeScreenRight,addChordGrid,addScreen,addScreenMute,addScreenControl,defaultScreen,parametersValues,modesNamesList,typesNamesList,patternsNamesList,updateKeys,updateTypes}