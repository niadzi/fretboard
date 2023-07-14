// This component is used to input and display the fretboard settings.
import React, { useState, useEffect } from "react";
import FRETWIDTHS from "../FRETWIDTHS";
import { IntervalToggles } from "./IntervalToggles";
import { TonicSelector } from "./TonicSelector";
import { ScaleSelector } from "./ScaleSelector";
import { NOTES, SCALES } from "../Utils/MusicTheory";

// TODO - replace this with a context function
// Function to get scale given a root note and a list of intervals
// export const getScaleFromRoot = (rootNote, scaleIntervals) => {
//   // Get the index of the root note
//   const rootIndex = notes.indexOf(rootNote);
//
//   // If root note is not found in the notes array, return an empty scale
//   if (rootIndex === -1) {
//     console.error(`Root note "${rootNote}" is not valid.`);
//     return [];
//   }
//
//   // Map each interval in the scale to a note
//   const scale = scaleIntervals.map(
//     (interval) => notes[(rootIndex + interval) % notes.length],
//   );
//
//   return scale;
// };

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
  const [scaleRoot, setScaleRoot] = useState(NOTES[0]);
  const [scaleType, setScaleType] = useState("Fifths");
  const [currentScale, setCurrentScale] = useState([]);

  useEffect(() => {
    // Here, we can put code that should run when the component mounts or when any of the dependencies change
    setCurrentScale(SCALES[scaleType]);
  }, [scaleType]);

  // Your code for creating guitar strings, manipulating them, etc. should go here, converted to use React state and props

  return (
    <div>
      <IntervalToggles />
      <fieldset className={"grid grid-cols-2"}>
        <TonicSelector />
        <ScaleSelector />
      </fieldset>
    </div>
  );
};

export default FretboardSettings;
