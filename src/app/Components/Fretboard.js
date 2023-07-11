"use client";

import * as React from "react";
import String from "./String";
import { useState } from "react";
import FretWidths from "./FretWidths";
import { useScale } from "./Store/ScaleContext";
import { ScaleSelector } from "./UI/ScaleSelector";
import { ActiveIntervalsProvider } from "./Store/ActiveIntervalsContext";
//import ActiveIntervals from "./ActiveIntervals";

function Fretboard(props) {
  console.log(props);
  const { currentScale } = useScale();

  const [isServer, setIsServer] = useState(true);
  const calculateNeckLength = (numberOfFrets) => {
    let neckLength = 0;
    for (let i = 0; i < numberOfFrets; i++) {
      neckLength += FretWidths[i];
    }
    return neckLength;
  };

  const calculateCurrentFretWidths = (numberOfFrets, neckLength) => {
    let currentFretWidths = [];
    if (typeof window !== "undefined") {
      for (let i = 0; i < numberOfFrets; i++) {
        let currentFretWidth =
          (FretWidths[i] / neckLength) * (window.innerWidth * 0.8);
        currentFretWidths.push(currentFretWidth);
      }
    }
    return currentFretWidths;
  };

  // Setup state variables based on user input
  const [tuning, setTuning] = useState(["E2", "A2", "D3", "G3", "B3", "E4"]);
  const [numberOfFrets, setNumberOfFrets] = useState(16);
  const [rightHanded, setRightHanded] = useState(true);
  const [tonic, setTonic] = useState("C");

  // Reverse tuning if !left handed
  if (rightHanded) {
    // setTuning(tuning.reverse());
    // console.log(tuning);
  }
  // Create array of strings based on tuning & handedness
  let guitarStrings = tuning
    .reverse()
    .map((n, i) => (
      <String
        key={i}
        order={i}
        rootnote={n}
        numfrets={numberOfFrets}
        tonic={tonic}
        fretwidths={calculateCurrentFretWidths(
          numberOfFrets,
          calculateNeckLength(numberOfFrets),
        )}
        currentscale={currentScale}
      />
    ));

  return <div id="fretboard">{guitarStrings}</div>;
}

export default Fretboard;
