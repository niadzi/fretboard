import React from "react";
import { useTonic } from "../Store/TonicContext";
import { NOTES } from "../Utils/MusicTheory";

function TonicSelector() {
  const { tonic, setTonic } = useTonic();

  const handleTonicSelectorChange = (event) => {
    const tonic = NOTES[event.target.value];
    setTonic(tonic);
  };

  return (
    <select multiple id="tonic-selector" onChange={handleTonicSelectorChange}>
      {Object.keys(NOTES).map((note, index) => (
        <option key={index} value={note}>
          {NOTES[index]}
        </option>
      ))}
    </select>
  );
}

export { TonicSelector };
