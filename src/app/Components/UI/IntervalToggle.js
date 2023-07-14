import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { useContext } from "react";
import "./IntervalToggle.css";
export function IntervalToggle({ interval, active }) {
  const { dispatch } = useContext(ActiveIntervalsContext);
  return (
    <li>
      <input
        type="checkbox"
        id={"check-" + interval}
        name={interval + active}
        value={interval}
        defaultChecked={active}
        className={"option-input checkbox " + interval}
        onChange={() => {
          dispatch({ type: "TOGGLE_INTERVAL", payload: interval });
        }}
      />
      <label>{interval}</label>
      <span></span>
    </li>
  );
}
