import React from "react";
import * as Tonal from "tonal";
import "./Fret.css";
import FretWidths from "./FretWidths";
import { useScale } from "./Store/ScaleContext";

function Fret(props) {
  const { currentScale, setCurrentScale, rootNote, setRootNote } = useScale();

  // Now you can use currentScale, setCurrentScale, rootNote, and setRootNote in this component
  //const { setRootNote } = useScale();

  const handleClick = () => {
    setRootNote(props.note);
  };

  return (
    <li
      key={"string-" + props.order + "-fret-" + props.index}
      id={"string-" + props.order + "-fret-" + props.index}
      className="fret"
      onClick={handleClick}
    >
      {/*{console.info("FRET!")}*/}
      {/*{console.log(props)}*/}
      <div
        key={"string-" + props.order + "-fret-div-" + props.index}
        id={"string-" + props.order + "-fret-div-" + props.index}
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
