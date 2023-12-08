"use client";

import * as React from "react";
import String from "./String";
import { useContext, useEffect, useState } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { calculateFretWidths } from "../UI/FretboardSettings";
import "./Fretboard.scss";
import { FretboardSettingsContext } from "../Store/FretboardSettingsContext";
import { Nut } from "./Nut";
import Fret from "./Fret";
import * as PropTypes from "prop-types";
import Inlays from "./Inlays";

function Fretboard() {
  const { intervalsState, dispatch } = useContext(ActiveIntervalsContext);
  const { fretboardSettings, fretboardDispatch } = useContext(
    FretboardSettingsContext,
  );

  console.log(fretboardSettings);

  return (
    <>
      <ol id="fretboard" className="w-full z-10 font-mono ashadow-md">
        {fretboardSettings.tuning.map((n, i) => (
          <String
            key={"string--" + i}
            order={i}
            openNote={n}
            numFrets={fretboardSettings.numFrets}
            fretWidths={fretboardSettings.fretWidths}
          />
        ))}
      </ol>
      <Inlays
        numFrets={fretboardSettings.numFrets}
        fretWidths={fretboardSettings.fretWidths}
      />
    </>
  );
}

export default Fretboard;
