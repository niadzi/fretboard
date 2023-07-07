"use client";

import * as React from "react";
import String from "./String";
import { useState } from "react";
import FretWidths from "./FretWidths";
//import DebounceInput from "react-debounce-input";

const Fretboard = (props) => {
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
  const [leftHanded, setLeftHanded] = useState(false);
  const [tonic, setTonic] = useState("C");

  // Reverse tuning if left handed
  if (!leftHanded) {
    tuning.reverse();
  }
  // Create array of strings based on tuning & handedness
  let guitarStrings = tuning.map((n, i) => (
    <String
      key={i}
      order={i}
      rootNote={n}
      numberOfFrets={numberOfFrets}
      tonic={tonic}
      fretWidths={calculateCurrentFretWidths(
        numberOfFrets,
        calculateNeckLength(numberOfFrets),
      )}
    />
  ));

  // Return the fretboard component
  return (
    <div id="fretboard">
      <div id="nut">{props.name}</div>
      {guitarStrings}
    </div>
  );
};

export default Fretboard;
