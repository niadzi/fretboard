var keyCenter = '';
var numberOctaves = 0;
var mode = '';
var maxOctaves = 3;

var Notes = {
    0: 'A',
    1: 'A#',
    2: 'B',
    3: 'C',
    4: 'C#',
    5: 'D',
    6: 'D#',
    7: 'E',
    8: 'F',
    9: 'F#',
    10: 'G',
    11: 'G#'
};

var Modes = {
    'Ionian': [0, 2, 4, 5, 7, 9, 11],
    'Dorian': [0, 2, 3, 5, 7, 9, 10],
    'Phrygian': [0, 1, 3, 5, 7, 8, 10],
    'Lydian': [0, 2, 4, 6, 7, 9, 11],
    'Mixolydian': [0, 2, 4, 5, 7, 9, 10],
    'Aeolian': [0, 2, 3, 5, 7, 8, 10],
    'Locrian': [0, 1, 3, 5, 6, 8, 10],
};


var ModeNames = {
    0:'Ionian',
    1:'Dorian',
    2:'Phrygian',
    3:'Lydian',
    4:'Mixolydian',
    5:'Aeolian',
    6:'Locrian',
};



function randomNumberOctaves() {
	var x = Math.floor((Math.random() * maxOctaves) + 1);
	var s = "Number of Octaves: " + x;
	return s;
}

function randomMode() {
	var x = Math.floor((Math.random() * 7));
	var s = ModeNames[x];
	return s;
}

function randomNote() {
	var x = Math.floor((Math.random() * 12));
	var s = Notes[x];
	return s;
}

$(document).ready(function() {
    
    /* Assign click event to 'Randomise' button */
    var randomiseButton = document.getElementById('randomiseButton');
    randomiseButton.addEventListener("click", function() { 
    	var randomScaleDisplay = document.getElementById('randomScaleDisplay');

    	var octaves = randomNumberOctaves();
    	var modeNum = randomMode();
    	var note = randomNote();

    	randomScaleDisplay.innerHTML = note + ' ' + modeNum + '<br>' + octaves;
     } );  
});

