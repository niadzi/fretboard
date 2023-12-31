import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { useContext } from "react";
import "./IntervalToggle.scss";
export function IntervalToggle({ interval, active }) {
  const { dispatch } = useContext(ActiveIntervalsContext);
  const isActive = active === true ? "active" : "inactive";
  // remove
  return (
    <li>
      <button
        id={"check-" + interval}
        name={interval + " " + active}
        value={interval}
        className={"interval-toggle " + interval + " " + isActive + "-interval"}
        onClick={() => {
          dispatch({ type: "TOGGLE_INTERVAL", payload: interval });
        }}
      >
        {interval}
      </button>
      <span></span>
    </li>
  );
}
