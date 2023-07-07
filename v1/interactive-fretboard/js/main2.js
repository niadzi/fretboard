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
var NUM_FRETS = 16;//

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

var neckLength = function() {
    var necklength = 0;
    for(var i =0; i < fretWidths.length; i++) {
        necklength += fretWidths[i];
    }
    return necklength;
}
var ROOT = Notes[0]; //'A';
var SCALE_ROOT = Notes[0]; //'A';;
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


var COLOURS = {
    0 : getHue(1,7),
    1 : getHue(2,7),
    2 : getHue(2,7),
    3 : getHue(3,7),
    4 : getHue(3,7),
    5 : getHue(4,7),
    6 : getHue(4,7),
    7 : getHue(5,7),
    8 : getHue(6,7),
    9 : getHue(6,7),
    10 : getHue(7,7),
    11 : getHue(7,7),
};

var modeColours = {
    0 : '#f00',
    1 : '#ff7300',
    2 : '#ff7300',    
    3 : '#f6ff00',
    4 : '#f6ff00',
    5 : '#08ff00',
    6 : '#08ff00',
    7 : '#00ffd5',
    8 : '#9000ff',
    9 : '#9000ff',
    10 : '#ff0080',
    11 : '#ff0080'
}

/* --- HTML ELEMENTS --- */
var Fretboard = document.getElementById('fretboard');
var scale_selector = document.getElementById("scale-root-select");
var scale_type_selector = document.getElementById("scale-type-select");


var getNote = function(string, fret) {
    var root = Notes[string];
    return Notes[(fret + root) % 12];
}

var setFretWidths = function() {
	for(var i = 0; i < 22; i++) {

	}
}
// Guitar String Object
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
            //fretHtml.style.width = (fretWidths[i]*.1)+"%";  
            fretHtml.style.width = ((parseInt(Fretboard.style.width) / 16) +"px");  
            //var rootInt = (i + this.rootOffset) % 12;         

            fretHtml.addEventListener("click", function() { Guitar.setScaleRoot( this.dataset.tone ) } );  
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
            //	console.log('String '+this.rootNote+' '+oo);
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
            fretNoteHtml.style.opacity = 0.0;    

        }
    }

    this.update_ = function(newScaleRoot) {
        var stringHtml = document.getElementById('string-' + stringNumber);
        var fretsList = document.getElementById("string-" + stringNumber + "fretsList");

        for (var i = 1; i < NUM_FRETS+1; i++) {
            //var fretNote = Notes[(i+this.rootOffset-newScaleRoot)%12];console.log(fretNote);
            
            var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
            fretHtml.className = "fret";
            fretHtml.setAttribute("data-interval", ((i) + this.rootOffset + newScaleRoot) % 12);

            var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
            fretHighlight.style.background = "transparent";
            var saturation = "100%";
            var lightness = "50%";
            if ((i + this.rootOffset + newScaleRoot) % 12 == 0) {
                var hue = getHue(0, 12);
                fretHighlight.style.background = "hsl("+hue+","+saturation+","+lightness+")";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 3) {
                var hue = getHue(3, 12);
                fretHighlight.style.background = "hsl("+hue+","+saturation+","+lightness+")";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 5) {
                var hue = getHue(5, 12);
                fretHighlight.style.background = "hsl("+hue+","+saturation+","+lightness+")";
            }

            if ((i + this.rootOffset + newScaleRoot) % 12 == 7) {
                var hue = getHue(7, 12);
                fretHighlight.style.background = "hsl("+hue+","+saturation+","+lightness+")";
            }
 
            if ((i + this.rootOffset + newScaleRoot) % 12 == 10) {
                var hue = getHue(10, 12);
                fretHighlight.style.background = "hsl("+hue+","+saturation+","+lightness+")";
            }
        };
    }
    // take in a scale root as a number or string
    this.setScaleRoot = function(scale_root) {
    }

    // call for each string
    this.displayInterval = function(interval) {
        console.log('Displaying intervals on ' + "string-" + stringNumber + "-" + interval);
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
            fretNoteHtml.style.opacity = 0;    

        }
    }
};

var Guitar = {
    update : function(scale_root) {
        for (var i = 0; i < 6; i++) {
            GuitarsStrings[i].setScaleRoot(parseInt(scale_root));
        }        
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
              //  console.log(fretHtml);console.log('update data interval');
                if(fretHtml !== null) {
                    //console.info(fretHtml.dataset.tone);
                    var fretHighlight = document.getElementById('highlight-s-' + stringNumb + '-f-' + i);
                    var fretTone = fretHtml.dataset.tone;
                    var newInterval = Math.abs( parseInt( 
                                                    parseInt(fretTone) - 
                                                    parseInt(SCALE_ROOT)+12 )
                                            ) % 12;

                    fretHtml.setAttribute("data-interval",  newInterval);
                    /* Update note colour / background and border*/
                    var intervalColour;
                    var hue = getHue( intervalColour, 12);;
                    if(newInterval == 0 ) {
                        hue = getHue( intervalColour, 7);    
                    }                     
                    /* Update note colour / background and border*/
                    var hue = getHue( newInterval, 12);
                  //  console.info(selectedIntervals[newInterval] );
                    if(selectedIntervals[newInterval] == "on"){
                        fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
                        fretHighlight.style.borderColor = "1px solid hsla("+hue+", 70%, 95%,90)"; 
                        fretHighlight.style.opacity = "1";                   
                        fretHighlight.style.background = "hsla("+modeColours[newInterval]+", 70%, 95%,90)"; 
                    } else {
                        fretHighlight.style.background = "hsla("+hue+", 70%, 90%,0.1)";    
                        fretHighlight.style.border = "0px solid hsla("+hue+", 100%, 70%,90)";    
                        fretHighlight.style.opacity = "0.6";   
                   //     fretHighlight.style.background = "hsla("+COLOURS[intervalColour]+", 70%, 95%,90)";                                      
                    }
                }           
                if(i == 0) {
                    fretHighlight.style.background = "transparent"; 
                }                
            } 
        }         
    },
    setScaleRoot : function(scale_root) { 
        console.log("** Guitar.setScaleRoot("+Notes[scale_root]+")"); 

        SCALE_ROOT = scale_root;

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
                                                    parseInt(scale_root)+12 )
                                            ) % 12;

                    fretHtml.setAttribute("data-interval",  newInterval);
                    
                    /* ** Update note colour / background and border ** */
                    var hue = getHue( newInterval, 12);

                    /* Update note colour / background and border*/
                    var intervalColour;
                    var hue = getHue( intervalColour, 12);;
                    if(newInterval == 0 ) {
                        hue = getHue( intervalColour, 7);    
                    }                     
                   
                    if(selectedIntervals[newInterval] == "on"){
                        fretHighlight.style.background = "hsla("+hue+", 100%, 70%,90)";
                        fretHighlight.style.borderColor = "1px solid hsla("+hue+", 70%, 95%,90)"; 
                        fretHighlight.style.opacity = "1";
                        fretHighlight.style.background = "hsla("+modeColours[newInterval]+", 70%, 95%,90)"; 
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
    setScale : function(scale_type) {
        console.info('** Guitar.setScale('+scale_type+') / Scales[scale_type].length : ' + Scales[scale_type].length);
        for(var i = 0; i < 12; i++) {
            console.log('* Guitar.setScale() turn interval off' + i);
            selectedIntervals[i] = 'off';
            turnIntervalOff(i);
            //console.log('Guitar.setScale() / selectedIntervals :' +selectedIntervals);
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


for (var i = 0; i < 12; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i);
    var option_label = document.createTextNode(Notes[i]);
    option.appendChild(option_label);
    scale_selector.appendChild(option);
}

var setScaleRoot = function(scale_root) {
   // var scale_root = document.getElementById("scale-root-select").value;
   // Guitar.update(scale_root);
    // for (var i = 0; i < 6; i++) {
    //     GuitarsStrings[i].update_(parseInt(scale_root));
    // }
    // 
    // 
    // 
    

       // var scale_root = 2;

        // for(var stringNumber = 1; 1 < 7; stringNumber++) {
        //     var stringHtml = document.getElementById('string-' + stringNumber);
        //     var fretsList = document.getElementById("string-" + stringNumber + "fretsList");

        //     for (var i = 0; i < NUM_FRETS+1; i++) {
        //         /* STEP THROUGH THE FRETS */
        //         var fretHtml = document.getElementById('s-' + stringNumber + '-f-' + i);
        //         var fretHighlight = document.getElementById('highlight-s-' + stringNumber + '-f-' + i);
        //         var fretTone = fretHtml.dataset.tone;

        //         fretHtml.setAttribute("data-interval",  
        //                               (Math.abs(
        //                                 parseInt(
        //                                        parseInt(fretTone) - 
        //                                        parseInt(scale_root)
        //                                        +12
        //                                        )
        //                                 )) % 12);
        //         // if(fretTone == 0) {
        //         //     fretHtml.setAttribute("data-interval", 10);
        //         // }
        //         fretHighlight.style.background = "transparent";            
        //     } 
        // }     
}

var refreshFretboard = function(){
    for (var i = 0; i < 6; i++) {
        //var _string = 
        GuitarsStrings[i].refresh();
       // console.log('refresh');

        //_string.update_(parseInt(scale_root));
    }    
}
//colourIntervalButtons();
var colourIntervalButtons = function() {
    for(var i = 0; i < 13; i++) {
        var hue = getHue( (i-1) , 12);
        var button = $("ul#intervals-button-list li:nth-child("+(i)+")").find("button").css("background","#777777");
        var button = $("ul#intervals-button-list li:nth-child("+(i)+")").find("button.selected-interval").css("background","hsla("+hue+", 100%, 70%,90)");
    }
}

var toggleInterval = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    if(button.dataset.status == "off") {
        button.className += " selected-interval";    
        button.dataset.status = "on";
        selectedIntervals[interval] = "on";
        //if(interval == 0) {  selectedIntervals[11] = "on"; }
        //currentScale.push(interval);
       // Guitar.displayInterval(interval);
    } 
    else
    if(button.dataset.status == "on") {
        button.className = "";
        button.className = "btn btn-primary badge";
        button.dataset.status="off";
        selectedIntervals[interval] = "off";
      //  if(interval == 0) {  selectedIntervals[11] = "off"; }
    };
    Guitar.updateFretboardIntervals();

    colourIntervalButtons();
    console.log("toggleInterval("+Intervals[interval]+") / selectedIntervals: "); console.log(selectedIntervals);
}

var turnIntervalOn = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    button.className += " selected-interval";    
    button.dataset.status = "on";
    selectedIntervals[interval] = "on";    
    Guitar.updateFretboardIntervals();
    colourIntervalButtons();
    console.log("turnIntervalOn("+Intervals[interval]+") / selectedIntervals: "); console.info(selectedIntervals);
}

var turnIntervalOff = function(interval) {
    var button = document.getElementById("interval-button-"+interval);
    button.className = "";
    button.className = "btn btn-primary badge";
    button.dataset.status="off";
    selectedIntervals[interval] = "off"; 
    Guitar.updateFretboardIntervals();
    colourIntervalButtons();
    console.log("turnIntervalOff("+Intervals[interval]+") / selectedIntervals: " + selectedIntervals);
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

        /** ----------- Toggle Interval Button ----------- */

});
/*----------  Get Fret Html Element  ----------*/
/** 
 * | s | string
 * | f | length of sequence s
 */

/*-- Create list of scales & modes --*/
for (var scale in Scales) {
    var option = document.createElement("option");
    option.setAttribute("value", scale);
    var option_label = document.createTextNode(scale);
    option.appendChild(option_label);
    scale_type_selector.appendChild(option);
}

var setScaleType = function() {
    var scale_type = document.getElementById("scale-type-select").value;
    Guitar.setScale(scale_type);
    // for(var i = 0; i < 6; i++) {
    // 	var _string = GuitarsStrings[i];
    // 	console.log(_string.fret(parseInt(scale_root)));
    // 	_string.update_(parseInt(scale_root));
    // }
}

//console.log(Scales['Pentatonic Minor']);
//console.log(Notes[1]);
// console.log(Notes['A']);
// console.log(Object.keys(Notes));

// string1.fret(3);
// console.log(string4.fret(3));