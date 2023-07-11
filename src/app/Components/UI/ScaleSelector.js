import React from "react";
import { useScale } from "../Store/ScaleContext";
import { Scales } from "../Utils/MusicTheory";

function ScaleSelector() {
  const { setScale } = useScale();

  const handleScaleSelectorChange = (event) => {
    const scale = Scales[event.target.value];
    setScale(scale);
  };

  return (
    <select onChange={handleScaleSelectorChange}>
      {Object.keys(Scales).map((scale, index) => (
        <option key={index} value={scale}>
          {scale}
        </option>
      ))}
    </select>
  );
}

export { ScaleSelector };
