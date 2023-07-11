import React from "react";
import Fret from "./Fret";
import * as Tonal from "tonal";
//import Notes from "./Utils/MusicTheory";
import "./String.css";
import { useScale } from "./Store/ScaleContext";
import { Notes, Scales, PitchedNotes } from "./Utils/MusicTheory";
const String = (props) => {
  const { currentScale } = useScale();
  //const stringRoot = currentScale[0];
  //console.log(props);
  // Root Note (C4, E5 etc) & length (passed from Fretboard)
  // calculate array of notes starting from root note where length = numberOfFret
  function calculateNotes(rootNote, length) {
    let notes = [];
    let noteIndex = PitchedNotes.findIndex((val) => val === rootNote);
    for (let i = 0; i < length; i++) {
      notes.push(PitchedNotes[i + noteIndex]);
    }
    return notes;
  }
  const fretNotes = calculateNotes(props.rootnote, props.numfrets);
  console.log(fretNotes);

  return (
    <ol
      key={"string-" + props.order}
      id={"string--" + props.order}
      className="string"
      rootnote={props.rootnote}
      order={props.order}
    >
      <label key={"label" + props.order}>{props.rootNote}</label>
      {/*{console.info("STRING!")}*/}
      {/*{console.log(props)}*/}

      {fretNotes.map((n, i) => (
        <Fret
          //uid={props.order.toString() + i.toString()}
          key={"string--" + props.order + "_fret_" + i}
          index={i}
          note={n}
          string={props.order}
          //interval={i}
          width={props.fretwidths[i]}
        />
      ))}
    </ol>
  );
};

export default String;
