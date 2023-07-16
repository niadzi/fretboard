import React, { useContext } from "react";
import { initialIntervalsState, NOTES } from "../Utils/MusicTheory";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";

import "./TonicSelector.scss";
function TonicSelector() {
  const { dispatch } = useContext(ActiveIntervalsContext);
  const [selectedTonic, setSelectedTonic] = React.useState(
    initialIntervalsState["tonic"],
  );

  return (
    <select
      id="tonic-selector"
      onChange={(event) => {
        setSelectedTonic(event.target.value);
        dispatch({ type: "SET_TONIC", payload: event.target.value });
      }}
      value={selectedTonic.toString()}
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
