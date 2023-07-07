var Notes = {
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
var Intervals = {
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
}

var Scales = {
   'Fifths': [0,7],
   'Pentatonic Minor': [0, 3, 5, 7, 10],
   'Pentatonic Major': [0, 2, 4, 7, 9],
    'Major Triad': [0, 4, 7],
    'Minor Triad': [0, 3, 7],
    'Ionian': [0, 2, 4, 5, 7, 9, 11],
    'Dorian': [0, 2, 3, 5, 7, 9, 10],
    'Phrygian': [0, 1, 3, 5, 7, 8, 10],
    'Lydian': [0, 2, 4, 6, 7, 9, 11],
    'Mixolydian': [0, 2, 4, 5, 7, 9, 10],
    'Aeolian': [0, 2, 3, 5, 7, 8, 10],
    'Locrian': [0, 1, 3, 5, 6, 8, 10],
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

var MinorModes = {
    'Aeolian': [0, 2, 3, 5, 7, 8, 10],
    'Locrian': [0, 1, 3, 5, 6, 8, 10],
    'Ionian': [0, 2, 4, 5, 7, 9, 11],
    'Dorian': [0, 2, 3, 5, 7, 9, 10],
    'Phrygian': [0, 1, 3, 5, 7, 8, 10],
    'Lydian': [0, 2, 4, 6, 7, 9, 11],
    'Mixolydian': [0, 2, 4, 5, 7, 9, 10],
};

var NUM_FRETS = 22;

var fretWidths = {
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

var COLOURS = {
    0 : 'RED'
};

var neckLength = function() {
    var necklength = 0;
    for(var i =0; i < fretWidths.length; i++) {
        necklength += fretWidths[i];
    }
    return necklength;
}
var ROOT = Notes[0]; // set ROOT to 'A';
var SCALE_ROOT = Notes[0]; // set SCALE_ROOT to 'A'
var keyRootNote   = ''; 
var keyRootInterval;
var TONALITY = document.getElementById('inlineRadio1').value;

/*----------  Get Rainbow Hue  ----------*/
/* 
 *  i | n in sequence s
 *  n | length of sequence s
 * -
 *  h | hue in degrees
 */
function getHue(i, n) { 
    return Math.floor(i / n * 360); 
} 

/* --- HTML ELEMENTS --- */
var Fretboard = document.getElementById('fretboard');
var scale_selector = document.getElementById("scale-root-select");
var scale_type_selector = document.getElementById("scale-type-select");

/*----------  Get Note  ----------*/
/* 
 *  string | string number
 *  fret   | fret number
 * - 
 *  note   |  
 */
var getNote = function(string, fret) {
    var root = Notes[string];
    return Notes[(fret + root) % 12];
}

var setFretWidths = function() {
	for(var i = 0; i < 22; i++) {

	}
}
var GuitarString = function(rootNote, stringNumber) {
    this.stringNumber = stringNumber;
    this.rootNote = rootNote;
    this.rootOffset = Notes[rootNote]; // assumes input is a string, outputs int

    // set new root
    this.root = function(newRoot) {
        this.rootNote = newRoot;
    }

    this.fret = function(fretNumber) {
        return Notes[(fretNumber + this.rootOffset) % 12];
    }

    this.draw = function() {
        var stringHtml = document.getElementById('string-' + stringNumber);
        var fretsList = document.createElement("ol");
        fretsList.id = "string-" + stringNumber + "fretsList";
        fretsList.className = "fretsList";
        stringHtml.appendChild(fretsList);
        // fretsList.style.width

        var openNote = Notes[this.rootOffset];
        var openFretHtml = document.createElement("li");
        openFretHtml.id = 's-' + stringNumber + '-f-0';
        openFretHtml.className = "fret";
        openFretHtml.setAttribute("data-note", openNote);
        openFretHtml.setAttribute("data-tone", (this.rootOffset ) % 12);
        openFretHtml.setAttribute("data-interval", (this.rootOffset ) % 12);
        openFretHtml.style.width = "0%";    

        var fretHighlight = document.createElement("div");
        var fretNoteHtml = document.createElement("div");

        fretHighlight.id = 'highlight-s-' + stringNumber + '-f-0';
        fretHighlight.className = 'highlight';
        
        fretNoteHtml.id = 'fretnote-s-' + stringNumber + '-f-0';
        fretNoteHtml.className = "fretnote";
        //var fretNoteLabel = document.createTextNode(openNote);
        fretNoteHtml.appendChild(document.createTextNode(openNote));
        var fretNumber = document.createElement("div");
        fretNumber.id = 'number-s-' + stringNumber + '-f-0';
        fretNumber.className = 'number';
        fretHighlight.appendChild(fretNumber);        
        fretHighlight.appendChild(fretNoteHtml);
        openFretHtml.appendChild(fretHighlight);      
        fretsList.appendChild(openFretHtml);

        for (var i = 1; i < NUM_FRETS+1; i++) {
        	/* ~ Fret data - */
            var fretNote = Notes[(i + this.rootOffset) % 12];
            var fretHtml = document.createElement("li");
            fretHtml.id = 's-' + stringNumber + '-f-' + i;
            fretHtml.className = "fret";
            fretHtml.setAttribute("data-note", fretNote);
            fretHtml.setAttribute("data-tone", (i + this.rootOffset) % 12);
            fretHtml.setAttribute("data-interval", (i + this.rootOffset) % 12);
            fretHtml.style.width = (fretWidths[i]*.1)+"%";  
            //var rootInt = (i + this.rootOffset) % 12;         

            //fretHtml.addEventListener("click", function() { Guitar.setScaleRoot( this.dataset.tone ) } );  
            fretHtml.addEventListener("click", function() { Guitar.setKey( this.dataset.tone ) } );  
            /* ~ Fret highlight - */
            var fretHighlight = document.createElement("div");
            fretHighlight.id = 'highlight-s-' + stringNumber + '-f-' + i;
            fretHighlight.className = 'highlight';
           
            /* ~ Fret note - */
            var fretNoteHtml = document.createElement("div");
            fretNoteHtml.id = 'fretnote-s-' + stringNumber + '-f-' + i;
            fretNoteHtml.className = "fretnote";
            var fretNoteLabel = document.createTextNode(fretNote);
            fretNoteHtml.appendChild(fretNoteLabel);
            var fretNumber = document.createElement("div");
            fretHighlight.appendChild(fretNoteHtml);
        	
          	/* ~ Fret number - */
            //var fretNumberLabel = document.createTextNode( (i+this.rootOffset)%12 );
            //fretNumber.appendChild(fretNumberLabel);
            fretNumber.id = 'number-s-' + stringNumber + '-f-' + i;
            fretNumber.className = 'number';
            fretHighlight.appendChild(fretNumber);

            /* ~ Fret markers - */
            if( (stringNumber == "3" && i == 3) || 
                (stringNumber == "3" && i == 5) ||
                (stringNumber == "3" && i == 7) ||
                (stringNumber == "3" && i == 8) ||
                (stringNumber == "3" && i == 15) ||
                (stringNumber == "3" && i == 17) ||
                (stringNumber == "3" && i == 19) ||
                (stringNumber == "3" && i == 21) ){
            	var marker = document.createElement("div");
            	marker.className = "marker-1 marker";
            	fretHighlight.appendChild(marker);
            } 
            if( (stringNumber == "3" && i == 12) ){
            	var marker2a = document.createElement("div");
            	marker2a.className = "marker-2a marker";
            	var marker2b = document.createElement("div");
            	marker2b.className = "marker-2b marker";            	
            	fretHighlight.appendChild(marker2a);
            	fretHighlight.appendChild(marker2b);
            }                          
            fretHtml.appendChild(fretHighlight);
            fretsList.appendChild(fretHtml);
            //
            //	Debugger.info('String '+this.rootNote+' '+oo);
        };
    }

    this.refresh = function() {
        var fretNote = Notes[(i + this.rootOffset ) % 12];        
        var stringHtml = document.getElementById("string-" + stringNumber + "fretsList");
        for (var i = 1; i < NUM_FRETS+1; i++) {
           var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
            fretHtml.setAttribute("data-tone", (i + this.rootOffset ) % 12);
            fretHtml.setAttribute("data-interval", (i + this.rootOffset ) % 12);
            var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
            //fretHighlight.style.background = "transparent";   
            var hue = getHue( (i + this.rootOffset ) % 12, 12);
            //fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
            fretHighlight.style.border = "0px solid hsla("+hue+", 100%, 70%,90)";
            var fretNoteHtml = document.getElementById('fretnote-s-' + stringNumber + '-f-' + i);
            fretNoteHtml.style.opacity = 0.6;    

        }
    }

    this.update_ = function(newScaleRoot) {
        var stringHtml = document.getElementById('string-' + stringNumber);
        var fretsList = document.getElementById("string-" + stringNumber + "fretsList");

        for (var i = 1; i < NUM_FRETS+1; i++) {
            //var fretNote = Notes[(i+this.rootOffset-newScaleRoot)%12];Debugger.info(fretNote);
            
            var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
            fretHtml.className = "fret";
            fretHtml.setAttribute("data-interval", ((i) + this.rootOffset + newScaleRoot) % 12);

            var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
            fretHighlight.style.background = "transparent";
            if ((i + this.rootOffset + newScaleRoot) % 12 == 0) {
                var hue = getHue(0, 12);
                fretHighlight.style.background = "hsl("+hue+", 100%, 50%)";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 3) {
                var hue = getHue(3, 12);
                fretHighlight.style.background = "hsl("+hue+", 100%, 50%)";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 5) {
                var hue = getHue(5, 12);
                fretHighlight.style.background = "hsl("+hue+", 100%, 50%)";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 7) {
                var hue = getHue(7, 12);
                fretHighlight.style.background = "hsl("+hue+", 100%, 50%)";
            }
 
            if ((i + this.rootOffset + newScaleRoot) % 12 == 10) {
                var hue = getHue(10, 12);
                fretHighlight.style.background = "hsl("+hue+", 100%, 50%)";
            }
        };
    }
    // take in a scale root as a number or string
    this.setScaleRoot = function(scale_root) {
    }

    // call for each string
    this.displayInterval = function(interval) {
        Debugger.info('Displaying intervals on ' + "string-" + stringNumber + "-" + interval);
        var fretNote = Notes[(interval + this.rootOffset ) % 12];        
        var stringHtml = document.getElementById("string-" + stringNumber + "fretsList");
        for (var i = 1; i < NUM_FRETS+1; i++) {
           var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
            fretHtml.setAttribute("data-tone", (i + this.rootOffset ) % 12);
            fretHtml.setAttribute("data-interval", (i + this.rootOffset ) % 12);
            var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
            //fretHighlight.style.background = "transparent";   
            var hue = getHue( (i + this.rootOffset ) % 12, 12);
            fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
            var fretNoteHtml = document.getElementById('fretnote-s-' + stringNumber + '-f-' + i);
            fretNoteHtml.style.opacity = 100;    

        }
    }
};

var Guitar = {
    update : function() {
        Debugger.info('pointless function : Guitar.update()');
        // for (var i = 0; i < 6; i++) {
        //   //  GuitarsStrings[i].setScaleRoot(parseInt(scale_root));
        // }        
    },
    displayInterval : function(interval) {
        for (var i = 0; i < 6; i++) {
            GuitarsStrings[i].displayInterval(interval);
        }   
    },
    hideInterval : function(interval) {

    },
    updateFretboardIntervals : function() {

        for(var stringNumb = 1; stringNumb < 7; stringNumb++) {
            var stringHtml = document.getElementById('string-' + stringNumb);
            var fretsList = document.getElementById("string-" + stringNumb + "fretsList");

            for (var i = 0; i < NUM_FRETS; i++) {
                /* STEP THROUGH THE FRETS */
                var fretHtml = document.getElementById('s-' + stringNumb + '-f-' + i);
              //  Debugger.info(fretHtml);Debugger.info('update data interval');
                if(fretHtml !== null) {
                    //console.info(fretHtml.dataset.tone);
                    var fretHighlight = document.getElementById('highlight-s-' + stringNumb + '-f-' + i);
                    var fretTone = fretHtml.dataset.tone;
                    var newInterval = Math.abs( parseInt( 
                                                    parseInt(fretTone) - 
                                                    parseInt(Notes[keyRootNote]) +12 )
                                            ) % 12;

                    fretHtml.setAttribute("data-interval",  newInterval);
                    
                    /* Update note colour / background and border*/
                    var hue = getHue( newInterval, 12);
                 //  console.info("!!new interval" + newInterval);
                    if(selectedIntervals[newInterval] == "on"){
                        fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
                        fretHighlight.style.borderColor = "1px solid hsla("+hue+", 70%, 95%,90)"; 
                        fretHighlight.style.opacity = "1";                           
                        if(newInterval == 0) {
                            // fretHighlight.style.height = "29px";
                            // fretHighlight.style.width = "29px";
                            fretHighlight.style.border = "2px solid #fff"; 
                            fretHighlight.style.border = "2px solid #fff"; 
                            fretHighlight.style.boxSizing = "content-box";
                            
                        }
                    } else {
                        fretHighlight.style.background = "hsla("+hue+", 70%, 90%,0.1)";    
                        fretHighlight.style.border = "0px solid hsla("+hue+", 100%, 70%,90)";    
                        fretHighlight.style.opacity = "0.6";                                        
                    }
                }           
                if(i == 0) {
                    fretHighlight.style.background = "transparent"; 
                }                
            } 
        }         
    },
    setScaleRoot : function(scale_root) { 
        Debugger.info("** Guitar.setScaleRoot("+Notes[scale_root]+")"); 
        keyRootInterval = scale_root;
        SCALE_ROOT = scale_root;

        for(var stringNumb = 1; stringNumb < 7; stringNumb++) {
            var stringHtml = document.getElementById('string-' + stringNumb);
            var fretsList = document.getElementById("string-" + stringNumb + "fretsList");
        }          
    },
    /**
     * Set Scale of selectedIntervals
     * @scale_type String
     */
    setScale : function(scale_type) {
        Debugger.action("Set Scale to "+scale_type+". (Line 411)");
        Debugger.info("setScale("+scale_type+")");

        turnIntervalsOff();
        
        for(var i = 0; i < Scales[scale_type].length; i++) {
            var intervalOn = Scales[scale_type][i];
            selectedIntervals[intervalOn] = 'on';
            turnIntervalOn(intervalOn);
        }
    //    this.updateFretboardIntervals(); 

    },
    /**
     * Set the Root note of the Key
     * @key_root  | root note
     */
    setKey : function(key_root) {
        Debugger.action("Set Key Root Note to "+Notes[key_root]+" (Line 429)");
        Debugger.info("setKey("+Notes[key_root]+")");

        /*- update model */
        keyRootNote = Notes[key_root];    
        keyRootInterval = key_root;    

        /*- update display */
        var keyDisplay = document.getElementById('keyRootDisplay');
        keyDisplay.innerHTML = keyRootNote;

        /*- ensure Root note is lit up */
        turnIntervalOn(0);

      //  console.log(TONALITY);

        /*- update the modes list */
            Debugger.action("Update Modes List in the key of "+keyRootNote+" "+TONALITY+" (Line 447)");
            Debugger.info("setKey("+keyRootNote+"), TONALITY="+TONALITY+"");
            var ctr = 0;
            var ionian = [];
            var aeolian =[];

            if(TONALITY == 'Major') {
                document.getElementById('scale-type-select').options.length = 0; // start by wiping it
                ctr = 0;
                // get Ionian scale intervals
                for(var i = 0; i < 7; i++) {
                    ionian[i] = Notes[( Modes['Ionian'][i]  + parseInt(keyRootInterval) ) % 12];                  
                }
                Debugger.info("Ionian Scale in "+ keyRootNote +" = "+ionian);


                for (var mode in Modes) {
                    var option = document.createElement("option");  // create menu option
                    option.setAttribute("value", mode);
                    var option_label = document.createTextNode(ionian[ctr]+' '+mode);
                    option.appendChild(option_label);
                    option.id = mode;
                    option.dataset.modalRoot = ionian[ctr];
                    scale_type_selector.appendChild(option);
                    ctr++;
                }
            } else if(TONALITY == 'Minor') {
                
                document.getElementById('scale-type-select').options.length = 0; // start by wiping it
                ctr = 0;
                for(var i = 0; i < 7; i++) {
                    aeolian[i] = Notes[( MinorModes['Aeolian'][i]  + parseInt(keyRootInterval)) % 12];                  
                }
                Debugger.info("Aeolian Scale in "+ keyRootNote +" = "+aeolian);

                for (var mode in MinorModes) {
                    var option = document.createElement("option");  // create menu option
                    option.setAttribute("value", mode);
                    var option_label = document.createTextNode(aeolian[ctr]+' '+mode);
                    option.appendChild(option_label);
                    option.id = mode;
                    scale_type_selector.appendChild(option);
                    ctr++;
                }                
            }
        

        /** update strings **/
        for(var stringNumb = 1; stringNumb < 7; stringNumb++) {
            var stringHtml = document.getElementById('string-' + stringNumb);
            var fretsList = document.getElementById("string-" + stringNumb + "fretsList");

            for (var i = 0; i < NUM_FRETS; i++) {
                /* STEP THROUGH THE FRETS */
                var fretHtml = document.getElementById('s-' + stringNumb + '-f-' + i);
                if(fretHtml !== null) {
                    var fretHighlight = document.getElementById('highlight-s-' + stringNumb + '-f-' + i);
                    var fretTone = fretHtml.dataset.tone;
                    var newInterval = Math.abs( parseInt( 
                                                    parseInt(fretTone) - 
                                                    parseInt(key_root)+12 )
                                            ) % 12;

                    fretHtml.setAttribute("data-interval",  newInterval);
                    
                    /* ** Update note colour / background and border ** */
                    var hue = getHue( newInterval, 12);
                   
                    if(selectedIntervals[newInterval] == "on"){
                        fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
                        fretHighlight.style.borderColor = "1px solid hsla("+hue+", 70%, 95%,90)"; 
                        fretHighlight.style.opacity = "1";
                        if(newInterval == '0') {
                            fretHighlight.style.borderColor = "4px solid hsla("+hue+", 30%, 100%,90)"; 
                        }                        
                    } else {
                        fretHighlight.style.background = "hsla("+hue+", 70%, 90%,0.1)";    
                        fretHighlight.style.border = "0px solid hsla("+hue+", 100%, 70%,90)";      
                        fretHighlight.style.opacity = "0.6";                   
                    }
                }   
                if(i == 0) {
                    fretHighlight.style.background = "transparent"; 
                }                
            } 
        }         

    },
    setTonality : function(tonality) {

        TONALITY = tonality;
        if(tonality == 'Major') {
            scale_type = 'Major Triad';
        }
        if(tonality == 'Minor') {
         //   Guitar.setScale('Minor Triad');    
            scale_type = 'Minor Triad';
        }

        Guitar.setScale(scale_type);    
        Guitar.setKey(keyRootInterval);

        for(var i = 0; i < 12; i++) {
            //Debugger.info('* Guitar.setScale() turn interval off' + i);
            selectedIntervals[i] = 'off';
            turnIntervalOff(i);
            //Debugger.info('Guitar.setScale() / selectedIntervals :' +selectedIntervals);
        }
        this.updateFretboardIntervals(); 
        for(var i = 0; i < Scales[scale_type].length; i++) {
            var intervalOn = Scales[scale_type][i];
            selectedIntervals[intervalOn] = 'on';
            turnIntervalOn(intervalOn);
        }
        this.updateFretboardIntervals(); 
        // update interval buttons
        //         
    }

}

var string6 = new GuitarString('E', 6);
var string5 = new GuitarString('A', 5);
var string4 = new GuitarString('D', 4);
var string3 = new GuitarString('G', 3);
var string2 = new GuitarString('B', 2);
var string1 = new GuitarString('E', 1);

var GuitarsStrings = [string1, string2, string3, string4, string5, string6];
/* initial draw */
for (var i = 0; i < 6; i++) {
    var temp_ = GuitarsStrings[i];
    temp_.draw();
    temp_.refresh();
}

/*-- not sure what this does :/ --*/
for (var i = 0; i < 12; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i);
    var option_label = document.createTextNode(Notes[i]);
    option.appendChild(option_label);
    scale_selector.appendChild(option);
}

 
/*-- Refresh Fretboard --*/
var refreshFretboard = function(){
    for (var i = 0; i < 6; i++) {
        GuitarsStrings[i].refresh();
    }    
}

/*-- Colour Interval Buttons --*/
var colourIntervalButtons = function() {
    for(var i = 0; i < 13; i++) {
        var hue = getHue( (i-1) , 12);
        var button = $("ul#intervals-button-list li:nth-child("+(i)+")").find("button").css("background","#777777");
        var button = $("ul#intervals-button-list li:nth-child("+(i)+")").find("button.selected-interval").css("background","hsla("+hue+", 100%, 70%,90)");
    }
}

/**
 * Toggle Interval
 * @param interval [Interval to toggle]
 */
var toggleInterval = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    if(button.dataset.status == "off") {
        button.className += " selected-interval";    
        button.dataset.status = "on";
        selectedIntervals[interval] = "on";
    } 
    else
    if(button.dataset.status == "on") {
        button.className = "";
        button.className = "btn btn-primary badge";
        button.dataset.status="off";
        selectedIntervals[interval] = "off";
    };
    Guitar.updateFretboardIntervals();

    colourIntervalButtons();
    Debugger.info("toggleInterval("+Intervals[interval]+") / selectedIntervals: "); Debugger.info(selectedIntervals);
}

/**
 * Turn Interval On
 * @interval [Interval to turn on]
 */
var turnIntervalOn = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    button.className += " selected-interval";    
    button.dataset.status = "on";
    selectedIntervals[interval] = "on";    
    Guitar.updateFretboardIntervals();
    colourIntervalButtons();
}


/**
 * Turn Interval Off
 * @interval [Interval to turn off]
 */
var turnIntervalOff = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    button.className = "";
    button.className = "btn btn-primary badge";
    button.dataset.status="off";
    selectedIntervals[interval] = "off"; 
    Guitar.updateFretboardIntervals();
    colourIntervalButtons();
}

/**
 * Turn All Intervals Off
 */
var turnIntervalsOff = function() {
    for(var i = 0; i < 12; i++) {
        selectedIntervals[i] = 'off';   // update model
        turnIntervalOff(i);             // update view
    }
}

var selectedIntervals = { 
    0 : 'off', 
    1 : 'off',
    2 : 'off',
    3 : 'off',
    4 : 'off', 
    5 : 'off',
    6 : 'off',
    7 : 'off',
    8 : 'off', 
    9 : 'off',
    10: 'off'//,
 //   11: 'off'
    };

/* update selected-intervals with a scale (array of indices) */
var updateSelectedIntervals = function(scale) {

}

$(document).ready(function() {
        colourIntervalButtons();
});

/*-- Create list of scales & modes --*/
for (var scale in Modes) {
    if(scale != 'Major Triad' && scale !='Minor Triad') {
        var option = document.createElement("option");
        option.setAttribute("value", scale);
        var option_label = document.createTextNode(scale);
        option.appendChild(option_label);
        option.id = scale;
        scale_type_selector.appendChild(option);
    }
}

/*-- Set mode --*/
var setScaleType = function() {
    var scale_type = document.getElementById("scale-type-select").value;
    Guitar.setScale(scale_type);
}

var setTonality = function(tonality) {
    Debugger.info('set tonality to '+tonality);
    Guitar.setTonality(tonality);    
}


var Debugger = {
    info : function(string) {
        if(DEBUG_INFO == true) {
            console.info('+ ' + string);
        }
    },    
    action : function(string) {
        if(DEBUG_ACTION == true) {
            console.debug('+ * + ' + string);
        } 
    }
}

var DEBUG_ACTION = true;
var DEBUG_INFO = true;