import React from "react";
import "./Fret.scss";
import { useContext } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";

function Fret({ index, note, interval, active, string, width }) {
  const { dispatch } = useContext(ActiveIntervalsContext);

  return (
    <li
      key={"string-" + string + "_fret-" + index}
      id={"string-" + string + "_fret-" + index}
      className={"fret fret-" + index + " " + note + " "}
      style={{ width: width + "%" }}
      onClick={() => {
        dispatch({ type: "SET_TONIC", payload: note.slice(0, -1) });
      }}
    >
      <div>
        <button
          key={"string-" + string + "__fret-" + index}
          id={"string-" + string + "__fret" + index}
          className={interval + " " + active + "-interval"}
        >
          {note}
        </button>
      </div>
    </li>
  );
}

export default Fret;
