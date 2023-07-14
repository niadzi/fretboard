import React, { useContext } from "react";
import { useTonic } from "../Store/TonicContext";
import { NOTES } from "../Utils/MusicTheory";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";

function TonicSelector() {
  const { intervalsState, dispatch } = useContext(ActiveIntervalsContext);
  const [selectedTonic, setSelectedTonic] = React.useState("A");

  return (
    <select
      id="tonic-selector"
      onChange={(event) => {
        setSelectedTonic(event.target.value);
        dispatch({ type: "SET_TONIC", payload: event.target.value });
      }}
      value={selectedTonic}
    >
      {Object.keys(NOTES).map((note, index) => (
        <option key={index} value={NOTES[index]}>
          {NOTES[index]}
        </option>
      ))}
    </select>
  );
}

export { TonicSelector };
