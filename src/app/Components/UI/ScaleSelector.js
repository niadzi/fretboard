import React from "react";
import { useScale } from "../Store/ScaleContext";
import { SCALES } from "../Utils/MusicTheory";

function ScaleSelector() {
  const { setScale } = useScale();

  const handleScaleSelectorChange = (event) => {
    const scale = SCALES[event.target.value];
    setScale(scale);
  };

  return (
    <select multiple id="scale-selector" onChange={handleScaleSelectorChange}>
      {Object.keys(SCALES).map((scale, index) => (
        <option key={index} value={scale}>
          {scale}
        </option>
      ))}
    </select>
  );
}

export { ScaleSelector };
