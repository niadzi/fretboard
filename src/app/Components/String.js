import React from "react";
import Fret from "./Fret";
import * as Tonal from "tonal";
//import Notes from "./Utils/MusicTheory";
import "./String.css";
import { useScale } from "./Store/ScaleContext";
import { Notes, Scales } from "./Utils/MusicTheory";
const String = (props) => {
  const { currentScale } = useScale();
  //const stringRoot = currentScale[0];
  //console.log(props);
  // Root Note (C4, E5 etc) & length (passed from Fretboard)
  // calculate array of notes starting from root note where length = numberOfFret
  function calculateNotes(rootNote, length) {
    let notes = [];
    let noteIndex = Notes.findIndex((val) => val === rootNote);
    for (let i = 0; i < length; i++) {
      notes.push(Notes[i + noteIndex]);
    }
    return notes;
  }
  const fretNotes = calculateNotes(props.rootNote, props.numberOfFrets);

  return (
    <ol
      key={props.order}
      className="string"
      rootnote={props.rootNote}
      order={props.order}
    >
      <label key={"label" + props.order}>{props.rootNote}</label>
      {console.info("STRING!")}
      {console.log(props)}

      {fretNotes.map((n, i) => (
        <Fret
          uid={props.order.toString() + i.toString()}
          key={props.order.toString() + i.toString()}
          number={i}
          note={n}
          interval={i}
          width={props.fretWidths[i]}
        />
      ))}
    </ol>
  );
};

export default String;
