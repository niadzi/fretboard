import { IntervalToggle } from "./IntervalToggle";
import { INTERVALS } from "../Utils/MusicTheory";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { useContext } from "react";
import "./IntervalToggles.scss";

export function IntervalToggles() {
  const { intervalsState, dispatch } = useContext(ActiveIntervalsContext);
  // console.log("intervalsState");
  // console.log(intervalsState);
  return (
    <ol id="interval-toggles">
      {INTERVALS.map((intervalName, index) => (
        <IntervalToggle
          key={index}
          interval={intervalName}
          active={intervalsState["activeIntervals"][index].active}
        />
      ))}
    </ol>
  );
}
