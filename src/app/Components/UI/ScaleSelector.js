import React, { useContext } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { SCALES } from "../Utils/MusicTheory";

function ScaleSelector() {
  const { intervalsState, dispatch } = useContext(ActiveIntervalsContext);
  const [selectedScale, setSelectedScale] = React.useState("Ionian");
  return (
    <select
      id="scale-selector"
      onChange={(event) => {
        setSelectedScale(event.target.value);
        console.log(event.target.value);
        dispatch({ type: "SET_SCALE", payload: event.target.value });
      }}
      value={selectedScale}
    >
      {Object.keys(SCALES).map((scale, index) => (
        <option key={index} value={scale}>
          {scale}
        </option>
      ))}
    </select>
  );
}

export { ScaleSelector };
