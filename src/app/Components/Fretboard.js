"use client";

import * as React from "react";
import String from "./String";
import { useContext, useEffect, useState } from "react";
import FRETWIDTHS from "./FRETWIDTHS";
import { useScale } from "./Store/ScaleContext";
import { ScaleSelector } from "./UI/ScaleSelector";
import { ActiveIntervalsProvider } from "./Store/ActiveIntervalsContext";
//import ActiveIntervals from "./ActiveIntervals";
//import { useActiveIntervals } from "./Store/ActiveIntervalsContext";
import { ActiveIntervalsContext } from "./Store/ActiveIntervalsContext";

function Fretboard(props) {
  //console.log(props);
  const { currentScale } = useScale();

  const [isServer, setIsServer] = useState(true);

  /*
    @summary Calculate the length of the neck based on the number of frets and the width of the fretboard
    @param {Number} numFrets - number of frets on the fretboard
    @param {Number} fretboardWidth - width of the fretboard in pixels
    @returns {Number[]} fretwidths - array of fret widths in pixels
   */
  const calculateFretWidths = (numFrets) => {
    let fretWidths = [];
    fretWidths.push(0);
    let neckLength = 0;
    for (let i = 0; i < numFrets; i++) {
      neckLength += FRETWIDTHS[i];
    }
    //if (typeof window !== "undefined") {
    //fretboardWidth = window.innerWidth * 0.8;
    for (let i = 0; i < numFrets; i++) {
      let fretWidth = (FRETWIDTHS[i] / neckLength) * 98; //fretboardWidth;
      fretWidths.push(fretWidth);
    }
    //}
    return fretWidths;
  };

  const activeIntervals = useContext(ActiveIntervalsContext);

  // Setup state variables based on user input
  const [tuning, setTuning] = useState(["E4", "B3", "G3", "D3", "A2", "E2"]);
  const [numberOfFrets, setNumberOfFrets] = useState(16);
  const [rightHanded, setRightHanded] = useState(true);
  const [tonic, setTonic] = useState("C");

  const fretWidths = calculateFretWidths(16);

  console.log("fretboard says hi");
  console.log(activeIntervals);

  useEffect(() => {
    const fretWidths = calculateFretWidths(16);
  }, [window]);

  // Reverse tuning if !left handed
  // if (rightHanded) {
  //   //setTuning(tuning.reverse());
  //   console.log(tuning.reverse());
  // }
  // Create array of strings based on tuning & handedness

  return (
    <div id="fretboard" className="w-full z-10">
      {tuning.map((n, i) => (
        <String
          key={"string--" + i}
          order={i}
          rootnote={n}
          numfrets={numberOfFrets}
          fretwidths={fretWidths}
        />
      ))}
    </div>
  );
}

export default Fretboard;
