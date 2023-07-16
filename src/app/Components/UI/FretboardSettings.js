// This component is used to input and display the fretboard settings.
import React, { useState, useEffect } from "react";
import FRETWIDTHS from "../Utils/FretWidths";
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
  return <fieldset></fieldset>;
};

export default FretboardSettings;
