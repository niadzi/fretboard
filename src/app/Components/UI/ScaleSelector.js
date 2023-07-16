import React, { useContext } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { initialIntervalsState, SCALES } from "../Utils/MusicTheory";
import "./ScaleSelector.scss";

function ScaleSelector() {
  const { dispatch } = useContext(ActiveIntervalsContext);
  const [selectedScale, setSelectedScale] = React.useState("Major Pentatonic");
  console.log(selectedScale);
  return (
    <select
      id="scale-selector"
      onChange={(event) => {
        setSelectedScale(event.target.value);
        dispatch({ type: "SET_SCALE", payload: event.target.value });
      }}
      value={selectedScale.toString()}
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
