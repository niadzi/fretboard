/*=================================
=            Guitar               =
=================================*/
function Guitar() {
    /* --- Return Note --- */
    getNote : function(string, fret) {
        var root = NOTES[string];
        return NOTES[(fret + root) % 12];        
    };

    /* --- Update HTML ELEMENTS --- */

    /* --- HTML ELEMENTS --- */

/* --- HTML ELEMENTS --- */
var fretboard = document.getElementById('fretboard');
var scale_selector = document.getElementById("scale-root-select");
var scale_type_selector = document.getElementById("scale-type-select");
}

//var guitar = new Guitar();
console.log(guitar.getNote('E',3));

/*=================================
=            Functions            =
=================================*/
/*----------  Get Rainbow Hue  ----------*/
/** 
 * | i | n in sequence s
 * | n | length of sequence s
 * - - -
 * | h | hue in degrees
 */
function getHue(i, n) { 
    return Math.floor(i / n * 360); 
} 


/*=================================
=           Constants             =
=================================*/
var NOTES = {
    'A': 0,
    'A#': 1,
    'B': 2,
    'C': 3,
    'C#': 4,
    'D': 5,
    'D#': 6,
    'E': 7,
    'F': 8,
    'F#': 9,
    'G': 10,
    'G#': 11,
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
var INTERVALS = {
    0:'R',
    1:'m2',
    2: 'M2',
    3: 'm3',
    4: 'M3',
    5: 'P4',
    6: 'P4',
    7: 'm6',
    8: 'M6',
    9: 'm7',
    10: 'M7',
    11: 'Oct'
}
var SCALES = {
    'Pentatonic Minor': [0, 4, 7, 10],
    'Pentatonic Major': [0, 3, 5, 7],
    'Major': [0, 2, 4, 5, 7, 9, 10]
};
var NUM_FRETS = 23;
var FRET_WIDTHS = {
    0: 56.162,
    1: 52.976,
    2: 50.002,
    3: 47.196,
    4: 44.547,
    5: 42.047,
    6: 39.687,
    7: 37.459,
    8: 35.357,
    9: 33.373,
    10: 31.499,
    11: 29.732,
    12: 28.063,
    13: 26.488,
    14: 25.001,
    15: 23.598,
    16: 22.273,
    17: 21.023,
    18: 19.843,
    19: 18.73,
    20: 17.678,
    21: 16.686,
    22: 15.750
};
