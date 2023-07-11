import React from "react";
import * as Tonal from "tonal";
import "./Fret.css";
import FretWidths from "./FretWidths";
import { useScale } from "./Store/ScaleContext";

function Fret({ uid, number, note, fretWidth }) {
  const { currentScale, setCurrentScale, rootNote, setRootNote } = useScale();

  // Now you can use currentScale, setCurrentScale, rootNote, and setRootNote in this component
  //const { setRootNote } = useScale();

  const handleClick = () => {
    setRootNote(note);
  };

  return (
    <li key={uid} className="fret" onClick={handleClick}>
      {console.info("FRET!")}
      {console.log(props)}
      <div
        key={uid}
        id={note}
        className="fret"
        //width={FretWidths[props.number]}
        // data-note={note}
        // data-tone="7"
        // data-interval="7"
        // style={{ width: fretWidth + "px" }}
      >
        {note}
      </div>
    </li>
  );
}

export default Fret;
