// This component is used to input and display the fretboard settings.
import React, { useState, useEffect, useContext } from "react";
import FRETWIDTHS from "../Utils/FretWidths";
import { FretboardSettingsContext } from "../Store/FretboardSettingsContext";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { HueSlider } from "./HueSlider";
export const NUM_FRETS = 16;

/*
  @summary Calculate the length of the neck based on the number of frets and the width of the fretboard
  @param {Number} numFrets - number of frets on the fretboard
  @param {Number} fretboardWidth - width of the fretboard in pixels
  @returns {Number[]} fretwidths - array of fret widths in pixels
 */
export const calculateFretWidths = (numFrets) => {
  let fretWidths = [];
  fretWidths.push(0);
  let neckLength = 0;
  for (let i = 0; i < numFrets; i++) {
    neckLength += FRETWIDTHS[i];
  }
  for (let i = 0; i < numFrets; i++) {
    let fretWidth = (FRETWIDTHS[i] / neckLength) * 98; // 98% of the fretboard container width
    fretWidths.push(fretWidth);
  }
  return fretWidths;
};
const FretboardSettings = () => {
  //console.log(hueAdjust);
  return (
    <fieldset>
      {/*<legend>Fretboard Settings</legend>*/}
      {/*<label htmlFor="numFrets">Number of Frets</label>*/}
      {/*<input*/}
      {/*  type="number"*/}
      {/*  name="numFrets"*/}
      {/*  id="numFrets"*/}
      {/*  min="1"*/}
      {/*  max="24"*/}
      {/*  defaultValue="16"*/}
      {/*/>*/}
      {/*<label htmlFor="tuning">Tuning</label>*/}
      {/*<input*/}
      {/*  type="text"*/}
      {/*  name="tuning"*/}
      {/*  id="tuning"*/}
      {/*  defaultValue="E4,B3,G3,D3,A2,E2"*/}
      {/*/>*/}
      {/*<label htmlFor="rightHanded">Right Handed</label>*/}
      {/*<input*/}
      {/*  type="checkbox"*/}
      {/*  name="rightHanded"*/}
      {/*  id="rightHanded"*/}
      {/*  defaultChecked*/}
      {/*/>*/}
    </fieldset>
  );
};

export default FretboardSettings;
