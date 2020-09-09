// CHORD PATTERNS //

// Motifs sur une mesure, à remplir 'à la main' //
//La propriété 'syncopated' = true veut dire qu'on veut anticiper l'accord suivant
export const chordPop1 = [
    {'time':'0:0:0','duration': {'16n': 3},'velocity':0.5,'syncopated':false},
    {'time':'0:0:3','duration': {'16n': 3},'velocity':1,'syncopated':false},
    {'time':'0:1:2','duration': {'8n': 2},'velocity':0.7,'syncopated':false},
    {'time':'0:2:0','duration': {'16n': 3},'velocity':0.5,'syncopated':false},
    {'time':'0:2:3','duration': {'16n': 3},'velocity':1,'syncopated':false},
    {'time':'0:3:2','duration': {'8n': 2},'velocity':0.7,'syncopated':false}
]
export const chordPop2 = [
    {'time':'0:0:0','duration':{'8n':1},'velocity':0.5,'syncopated':false},
    {'time':'0:0:2','duration':{'16n':3},'velocity':1,'syncopated':false},
    {'time':'0:1:1','duration':{'16n':3},'velocity':0.7,'syncopated':false},
    {'time':'0:1:3','duration':{'16n':1},'velocity':0.1,'syncopated':false},
    {'time':'0:2:0','duration':{'2n':1},'velocity':0.8,'syncopated':false}
]
export const chordWhole = [
    {'time':'0:0:0','duration':{'1m':1},'velocity':1,'syncopated':false}
]
export const chordOneThree = [
    {'time':'0:0:0','duration':{'2n':1},'velocity':0.75,'syncopated':false},
    {'time':'0:2:0','duration':{'2n':1},'velocity':0.8,'syncopated':false},
]
export const chordTwoFour = [
    {'time':'0:1:0','duration':{'2n':1},'velocity':0.75,'syncopated':false},
    {'time':'0:3:0','duration':{'2n':1},'velocity':0.8,'syncopated':false},
]
export const chordQuarterDownbeat = [
    {'time':'0:0:0','duration':{'4n':1},'velocity':1,'syncopated':false},
    {'time':'0:1:0','duration':{'4n':1},'velocity':0.5,'syncopated':false},
    {'time':'0:2:0','duration':{'4n':1},'velocity':1,'syncopated':false},
    {'time':'0:3:0','duration':{'4n':1},'velocity':0.5,'syncopated':false}
]
export const chordQuarterNoAccent = [
    {'time':'0:0:0','duration':{'4n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:1:0','duration':{'4n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:2:0','duration':{'4n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:3:0','duration':{'4n':1},'velocity':0.8,'syncopated':false}
]
export const chordQuarterAfterbeat = [
    {'time':'0:0:0','duration':{'4n':1},'velocity':0.5,'syncopated':false},
    {'time':'0:1:0','duration':{'4n':1},'velocity':1,'syncopated':false},
    {'time':'0:2:0','duration':{'4n':1},'velocity':0.5,'syncopated':false},
    {'time':'0:3:0','duration':{'4n':1},'velocity':1,'syncopated':false}
]
export const chordEightDownbeat = [
    {'time':'0:0:0','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:0:2','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:1:0','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:1:2','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:2:0','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:2:2','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:3:0','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:3:2','duration':{'8n':1},'velocity':0.6,'syncopated':false}
]
export const chordEightNoAccent = [
    {'time':'0:0:0','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:0:2','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:1:0','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:1:2','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:2:0','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:2:2','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:3:0','duration':{'8n':1},'velocity':0.8,'syncopated':false},
    {'time':'0:3:2','duration':{'8n':1},'velocity':0.8,'syncopated':false}
]
export const chordEightUpbeat = [
    {'time':'0:0:0','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:0:2','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:1:0','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:1:2','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:2:0','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:2:2','duration':{'8n':1},'velocity':1,'syncopated':false},
    {'time':'0:3:0','duration':{'8n':1},'velocity':0.6,'syncopated':false},
    {'time':'0:3:2','duration':{'8n':1},'velocity':1,'syncopated':false}
]
export const chordSixteenDownbeat = [
    {'time':'0:0:0','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:0:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:0:2','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:0:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:0','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:1:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:2','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:0','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:2:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:2','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:0','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:3:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:2','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false}
]
export const chordSixteenUpbeat = [
    {'time':'0:0:0','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:0:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:0:2','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:0:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:0','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:1:2','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:1:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:0','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:2:2','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:2:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:0','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:1','duration':{'16n':1},'velocity': 0.3,'syncopated':false},
    {'time':'0:3:2','duration':{'16n':1},'velocity': 1,'syncopated':false},
    {'time':'0:3:3','duration':{'16n':1},'velocity': 0.3,'syncopated':false}
]


