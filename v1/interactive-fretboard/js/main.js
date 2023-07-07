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
    0: 'R',
    1: 'm2',
    2: 'M2',
    3: 'm3',
    4: 'M3',
    5: 'P4',
    6: 'T',
    7: 'P5',
    8: 'm6',
    9: 'M6',
    10: 'm7',
    11: 'M7'
};
var SCALES = {
    '1-3-5': [0,3,7],
    'Fifths': [0,7],
    '1-3-6': [0,3,8],
    'Pentatonic Minor': [0, 3, 5, 7, 10],
    'Pentatonic Major': [0, 2, 4, 7, 9],
    'Ionian': [0, 2, 4, 5, 7, 9, 11],
    'Dorian': [0, 2, 3, 5, 7, 9, 10],
    'Phrygian': [0, 1, 3, 5, 7, 8, 10],
    'Lydian': [0, 2, 4, 6, 7, 9, 11],
    'Mixolydian': [0, 2, 4, 5, 7, 9, 10],
    'Aeolian': [0, 2, 3, 5, 7, 8, 10],
    'Locrian': [0, 1, 3, 5, 6, 8, 10],
};
var FRETWIDTHS = {
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
var COLOURS = { // red 1 . orange 2 . yellow 3. green 4. blue 5. purple 6. pink 7.
    0: '#ff2424',
    1: '#ff9e24',
    2: '#ffc424',
    3: '#ffea00',
    4: '#ecfb3b',
    5: '#a9ff55',
    6: '#2dffbd',
    7: '#7cc9fa',
    8: '#b43fff',
    9: '#d537e3',
    10: '#ff2ecc',
    11: '#ff45ae'
};

/* --- Settings --- */
var NUM_FRETS = 12;
var ROOT = NOTES[0]; //'A';
var MODE = 'Ionian';
var selectedIntervals = {
    0: 'on',
    1: 'off',
    2: 'off',
    3: 'off',
    4: 'off',
    5: 'off',
    6: 'off',
    7: 'off',
    8: 'off',
    9: 'off',
    10: 'off'
};

/*=================================
=            Functions            =
=================================*/
/* --- Return hue of interval --- */
function getHue(i, n) {
    return Math.floor(i / n * 360);
}

/* --- Get neck length --- */
var calcNeckLength = function() {
    var necklength = 0;
    for (var i = 0; i < NUM_FRETS - 1; i++) {
        necklength += FRETWIDTHS[i];
    }
    return necklength;
}

/* --- Scale fretboard --- */
// TODO
/* scales fret widths to size of screen */
/* returns array of fetwidths, scaled to screensize */
var scaledFrets = [];
var neckLength = calcNeckLength();
var scaleFrets = function() {
    var fretboardLength = document.getElementById('fretboard');
    var fretboardWidth = fretboard.clientWidth;
    var neck = neckLength();
    for (var i = 0; i < NUM_FRETS; i++) {

    }
}

/* --- Get note by String & Fret number --- */
var getNote = function(string, fret) {
    var root = NOTES[string];
    return NOTES[(fret + root) % 12];
}

/*================================
=            Guitar               =
 ================================*/
/* --- HTML ELEMENTS --- */
var Fretboard;
var scale_type_selector;

/* --- Guitar String --- */
var GuitarString = function(rootNote, stringNumber) {
    this.stringNumber = stringNumber;
    this.rootNote = rootNote;
    this.rootOffset = NOTES[rootNote];

    // get note by fret number
    this.fret = function(fretNumber) {
        return NOTES[(fretNumber + this.rootOffset) % 12];
    };

    // initial draw function
    this.draw = function() {
        // create a list of frets for each string
        var stringHtml = document.getElementById('string-' + stringNumber);
        var fretsList = document.createElement("ol");
        fretsList.id = "string-" + stringNumber + "fretsList";
        fretsList.className = "fretsList";
        stringHtml.appendChild(fretsList);

        // construct the open notes html
        var openNote = NOTES[this.rootOffset];
        var openFretHtml = document.createElement("li");
        openFretHtml.id = 's-' + stringNumber + '-f-0';
        openFretHtml.className = "fret";
        openFretHtml.setAttribute("data-note", openNote);
        openFretHtml.setAttribute("data-tone", (this.rootOffset) % 12);
        openFretHtml.setAttribute("data-interval", (this.rootOffset) % 12);
        openFretHtml.style.width = "5%";
        var fretHighlight = document.createElement("div");
        fretHighlight.id = 'highlight-s-' + stringNumber + '-f-0';
        fretHighlight.className = 'highlight open';
        var fretNoteHtml = document.createElement("div");
        fretNoteHtml.id = 'fretnote-s-' + stringNumber + '-f-0';
        fretNoteHtml.className = "fretnote open";
        fretNoteHtml.appendChild(document.createTextNode(openNote));
        var fretNumber = document.createElement("div");
        fretNumber.id = 'number-s-' + stringNumber + '-f-0';
        fretNumber.className = 'number';
        fretHighlight.appendChild(fretNumber);
        fretHighlight.appendChild(fretNoteHtml);
        openFretHtml.appendChild(fretHighlight);
        fretsList.appendChild(openFretHtml);

        // construct each fret
        for (var i = 1; i < NUM_FRETS + 1; i++) {
            // insert note data to fret list item
            var fretNote = NOTES[(i + this.rootOffset) % 12];
            var fretHtml = document.createElement("li");
            fretHtml.id = 's-' + stringNumber + '-f-' + i;
            fretHtml.className = "fret";
            fretHtml.setAttribute("data-note", fretNote);
            fretHtml.setAttribute("data-tone", (i + this.rootOffset) % 12);
            fretHtml.setAttribute("data-interval", (i + this.rootOffset) % 12);
            fretHtml.style.width = parseInt((FRETWIDTHS[i] / neckLength * 100)) + "%";
            //console.log("fret width " + parseInt((FRETWIDTHS[i] / neckLength * 100)) + "%");
            var fretHighlight = document.createElement("div");
            fretHighlight.id = 'highlight-s-' + stringNumber + '-f-' + i;
            fretHighlight.className = 'highlight';
            var fretNoteHtml = document.createElement("div");
            fretNoteHtml.id = 'fretnote-s-' + stringNumber + '-f-' + i;
            fretNoteHtml.className = "fretnote";
            var fretNoteLabel = document.createTextNode(fretNote);
            fretNoteHtml.appendChild(fretNoteLabel);
            var fretNumber = document.createElement("div");
            fretHighlight.appendChild(fretNoteHtml);
            fretNumber.id = 'number-s-' + stringNumber + '-f-' + i;
            fretNumber.className = 'number';
            fretHighlight.appendChild(fretNumber);

            // fret markers
            if ((stringNumber == "3" && i == 3) ||
                (stringNumber == "3" && i == 5) ||
                (stringNumber == "3" && i == 7) ||
                (stringNumber == "3" && i == 8) ||
                (stringNumber == "3" && i == 15) ||
                (stringNumber == "3" && i == 17) ||
                (stringNumber == "3" && i == 19) ||
                (stringNumber == "3" && i == 21)) {
                var marker = document.createElement("div");
                marker.className = "marker-1 marker";
                fretHighlight.appendChild(marker);
            }
            if ((stringNumber == "3" && i == 12)) {
                var marker2a = document.createElement("div");
                marker2a.className = "marker-2a marker";
                var marker2b = document.createElement("div");
                marker2b.className = "marker-2b marker";
                fretHighlight.appendChild(marker2a);
                fretHighlight.appendChild(marker2b);
            }

            // add function for root note selection
            fretHtml.addEventListener("click", function() {
                Guitar.selectRoot(this.dataset.tone);
                Interface.update();
            });
            fretHtml.appendChild(fretHighlight);
            fretsList.appendChild(fretHtml);
        };
    };
    this.update = function() {
        for (var i = 0; i < NUM_FRETS + 1; i++) {
            var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
            if (fretHtml !== null) {
                var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
                var fretTone = fretHtml.dataset.tone;
                var newInterval = Math.abs(parseInt(
                    parseInt(fretTone) -
                    parseInt(ROOT) + 12)) % 12;

                fretHtml.setAttribute("data-interval", newInterval); // update data attribute to new interval
                var hue = getHue(newInterval, 12); // UPDATE NOTE COLOUR
                fretHighlight.style.background = "transparent";

                if (selectedIntervals[newInterval] === "on") {
                    fretHighlight.classList.add("interval-on");
                    if (i === 0) {
                        fretHighlight.style.background = "hsla(" + hue + ", 100%, 90%,30)";
                    } else {
                        fretHighlight.style.background = "hsla(" + hue + ", 100%, 70%,100)";
                    }
                } else {
                    fretHighlight.classList.remove("interval-on");
                    fretHighlight.style.border = "0";
                }
            }
        }

    };
};

var Guitar = {};
Guitar.strings = [];
Guitar.create = function() {
    // create guitar strings
    var string6 = new GuitarString('E', 6);
    var string5 = new GuitarString('A', 5);
    var string4 = new GuitarString('D', 4);
    var string3 = new GuitarString('G', 3);
    var string2 = new GuitarString('B', 2);
    var string1 = new GuitarString('E', 1);
    Guitar.strings = [string1, string2, string3, string4, string5, string6];

    for (var i = 0; i < 6; i++) {
        var string_ = Guitar.strings[i];
        string_.draw();
    }
};

Guitar.update = function() {
    for (var i = 0; i < 6; i++) {
        var string_ = Guitar.strings[i];
        string_.update();
    }
};

Guitar.selectRoot = function(root) {
    ROOT = root;
    for (var i = 0; i < 6; i++) {
        var string_ = Guitar.strings[i];
        string_.update();
    }
    Interface.intervalOn(0);
};

Guitar.selectMode = function(mode) {
    MODE = mode;
    for (var i = 0; i < 12; i++) { // turn all intervals off
        selectedIntervals[i] = 'off';
        Interface.intervalOff(i);
    }
    Interface.update();
    for (var j = 0; j < SCALES[mode].length; j++) {
        var modeArray = SCALES[mode];
        var intervalOn = modeArray[j];
        selectedIntervals[intervalOn] = 'on';
        Interface.intervalOn(intervalOn);
    }
    Interface.update();
    Guitar.update();
};

/* --- Rescale guitar if window size changes --- */
// TODO
function rescaleGuitar() {

}
/*================================
=            Interface            =
 ================================*/

var Interface = {};

/* --- Turn interval on --- */
Interface.intervalOn = function(interval) {
    var button = document.getElementById("interval-button-" + interval);
    button.classList.add("selected-interval");
    button.dataset.status = "on";
    selectedIntervals[interval] = "on"; // update model
    Interface.update();
};

/* --- Turn interval off --- */
Interface.intervalOff = function(interval) {
    var button = document.getElementById("interval-button-" + interval);
    button.classList.remove("selected-interval");
    button.dataset.status = "off";
    selectedIntervals[interval] = "off"; // update model
    Interface.update();
};

/* --- Update intervals --- */
Interface.update = function() {
    for (var i = 1; i < 13; i++) {
        var hue = getHue((i - 1), 12);
        var button = $("ul#intervals-button-list li:nth-child(" + (i) + ")").find("button").css("background", "#777777");
        var button = $("ul#intervals-button-list li:nth-child(" + (i) + ")").find("button.selected-interval").css("background", "hsla(" + hue + ", 100%, 70%,90)");
    }
};

/* --- Toggle interval --- */
var toggleInterval = function(interval) {
    var button = document.getElementById("interval-button-" + interval);
    if (button.dataset.status == "off") {
        button.className += " selected-interval";
        button.dataset.status = "on";
        selectedIntervals[interval] = "on";
    } else
    if (button.dataset.status == "on") {
        button.className = "";
        button.className = "btn btn-primary badge";
        button.dataset.status = "off";
        selectedIntervals[interval] = "off";
    };
    Guitar.update();
    Interface.update();
}


/*================================
 =            StartUp             =
=================================*/
$(document).ready(function() {
    Fretboard = document.getElementById('fretboard');
    scale_type_selector = document.getElementById("scale-type-select");
    
    Guitar.create();
    // populate multiple select with modes list
    for (var mode in SCALES) {
        var option = document.createElement("option");
        option.setAttribute("value", mode);
        var option_label = document.createTextNode(mode);
        option.appendChild(option_label);
        scale_type_selector.appendChild(option);
    }
    scale_type_selector.value = "Ionian";

    Guitar.selectRoot(0);
    Guitar.selectMode(MODE);
    Guitar.update();

});