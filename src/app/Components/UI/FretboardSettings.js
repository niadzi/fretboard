// This component is used to input and display the fretboard settings.
import React, { useState, useEffect } from "react";

// Function to get scale given a root note and a list of intervals
const getScaleFromRoot = (rootNote, scaleIntervals) => {
  // Get the index of the root note
  const rootIndex = notes.indexOf(rootNote);

  // If root note is not found in the notes array, return an empty scale
  if (rootIndex === -1) {
    console.error(`Root note "${rootNote}" is not valid.`);
    return [];
  }

  // Map each interval in the scale to a note
  const scale = scaleIntervals.map(
    (interval) => notes[(rootIndex + interval) % notes.length],
  );

  return scale;
};

const NUM_FRETS = 16;
const FretboardSettings = () => {
  const [scaleRoot, setScaleRoot] = useState(Notes[0]);
  const [scaleType, setScaleType] = useState("Fifths");
  const [currentScale, setCurrentScale] = useState([]);

  useEffect(() => {
    // Here, we can put code that should run when the component mounts or when any of the dependencies change
    setCurrentScale(Scales[scaleType]);
  }, [scaleType]);

  const handleScaleRootChange = (e) => {
    setScaleRoot(Notes[e.target.value]);
  };

  const handleScaleTypeChange = (e) => {
    setScaleType(e.target.value);
  };

  // Your code for creating guitar strings, manipulating them, etc. should go here, converted to use React state and props

  return (
    <div>
      <select id="scale-root-select" onChange={handleScaleRootChange}>
        {Object.keys(Notes).map((note, index) => (
          <option value={index} key={note}>
            {note}
          </option>
        ))}
      </select>

      <select id="scale-type-select" onChange={handleScaleTypeChange}>
        {Object.keys(Scales).map((scale, index) => (
          <option value={scale} key={scale}>
            {scale}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FretboardSettings;
