import React from "react";
import * as Tonal from "tonal";
import "./Fret.scss";
import FRETWIDTHS from "./FRETWIDTHS";
import { useScale } from "./Store/ScaleContext";
import { useContext } from "react";
import { ActiveIntervalsContext } from "./Store/ActiveIntervalsContext";
import { note } from "tonal";

function Fret(props) {
  const { currentScale, setCurrentScale, rootNote, setRootNote } = useScale();
  const activeIntervals = useContext(ActiveIntervalsContext);

  // Now you can use currentScale, setCurrentScale, rootNote, and setRootNote in this component
  //const { setRootNote } = useScale();

  const handleClick = () => {
    setRootNote(props.note);
  };
  //console.log("Fret.js");

  return (
    <li
      key={"string-" + props.string + "_fret-" + props.index}
      id={"string-" + props.string + "_fret-" + props.index}
      className={
        "fret fret-" +
        props.index +
        " " +
        props.note +
        " " +
        props.interval +
        " " +
        props.active +
        "-interval"
      }
      style={{ width: props.width + "px" }}
      onClick={handleClick}
    >
      {/*{console.info("FRET!")}*/}
      {/*{console.log(props)}*/}
      <div
        key={"string-" + props.string + "__fret-" + props.index}
        id={"string-" + props.string + "__fret" + props.index}
        //id={props.note}
        className="fret"
        //width={FretWidths[props.number]}
        // data-note={note}
        // data-tone="7"
        // data-interval="7"
        // style={{ width: fretWidth + "px" }}
      >
        {props.note}
      </div>
    </li>
  );
}

export default Fret;
