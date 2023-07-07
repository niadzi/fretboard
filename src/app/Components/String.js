import React from "react";
import Fret from "./Fret";
import * as Tonal from "tonal";
import Notes from "./MusicTheory/Notes";
import "./String.css";

const String = (props) => {
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
    <ol className="string" root={props.rootNote}>
      <label>
        {props.rootNote}
        {props.order}
      </label>

      {fretNotes.map((n, i) => (
        <Fret
          uid={props.order.toString() + i.toString()}
          key={props.order.toString() + i.toString()}
          number={i}
          note={n}
          width={props.fretWidths[i]}
        />
      ))}
    </ol>
  );
};

export default String;
