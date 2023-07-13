import { IntervalToggle } from "./IntervalToggle";
import { INTERVALS } from "../Utils/MusicTheory";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { useContext } from "react";
import "./IntervalToggles.scss";

export function IntervalToggles() {
  const { activeIntervals, activeIntervalsState, dispatch } = useContext(
    ActiveIntervalsContext,
  );
  // console.log("activeIntervalsState");
  // console.log(activeIntervalsState);
  return (
    <ol id="interval-toggles">
      {INTERVALS.map((intervalName, index) => (
        <IntervalToggle
          key={index}
          interval={intervalName}
          active={activeIntervals[index].active}
        />
      ))}
    </ol>
  );
}
