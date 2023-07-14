"use client";

import * as React from "react";
import String from "./String";
import { useContext, useEffect, useState } from "react";
import { ActiveIntervalsContext } from "./Store/ActiveIntervalsContext";
import { calculateFretWidths } from "./UI/FretboardSettings";

function Fretboard(props) {
  const activeIntervals = useContext(ActiveIntervalsContext);

  // Setup state variables based on user input
  const [tuning, setTuning] = useState(["E4", "B3", "G3", "D3", "A2", "E2"]);
  const [numberOfFrets, setNumberOfFrets] = useState(16);
  const [rightHanded, setRightHanded] = useState(true);
  const [tonic, setTonic] = useState("C");

  const fretWidths = calculateFretWidths(16);

  // Reverse tuning if !left handed
  // if (rightHanded) {
  //   //setTuning(tuning.reverse());
  //   console.log(tuning.reverse());
  // }
  // Create array of strings based on tuning & handedness

  console.log("fretboard says hi");
  console.log(activeIntervals);

  return (
    <div id="fretboard" className="w-full z-10">
      {tuning.map((n, i) => (
        <String
          key={"string--" + i}
          order={i}
          openNote={n}
          numFrets={numberOfFrets}
          fretWidths={fretWidths}
        />
      ))}
    </div>
  );
}

export default Fretboard;
