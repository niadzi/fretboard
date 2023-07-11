import React from "react";
//import { useTonic } from "../Store/TonicContext";
import { Notes } from "../Utils/MusicTheory";

function TonicSelector() {
  const { tonic, setTonic } = useTonic();

  const handleTonicSelectorChange = (event) => {
    const tonic = Notes[event.target.value];
    setTonic(tonic);
  };

  return (
    <select onChange={handleTonicSelectorChange}>
      {Object.keys(Notes).map((note, index) => (
        <option key={index} value={note}>
          {Notes[index]}
        </option>
      ))}
    </select>
  );
}

export { TonicSelector };
