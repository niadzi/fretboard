import React from "react";
import Fret from "./Fret";
import * as Tonal from "tonal";
//import Notes from "./Utils/MusicTheory";
import "./String.css";
import { useScale } from "./Store/ScaleContext";
import { NOTES, SCALES, PITCHED_NOTES } from "./Utils/MusicTheory";
import { useContext } from "react";
import { ActiveIntervalsContext } from "./Store/ActiveIntervalsContext";
import { Nut } from "./Nut";
const String = (props) => {
  const { currentScale } = useScale();
  const activeIntervals = useContext(ActiveIntervalsContext);

  const noteIsActive = (note) => {};

  // get note interval, and check if its active
  // if active, add class to fret
  // if not active, remove class from fret
  // if note is root note, add class to fret
  // if note is not root note, remove class from fret

  const noteInfo = (note) => {
    const interval = note.slice(-1);
  };
  //const tone = props.note["note"].slice(0, -1);
  //console.log(activeIntervals);
  //console.log(props.note.slice(0, -1));
  //const stringRoot = currentScale[0];
  //console.log(props);
  // Root Note (C4, E5 etc) & length (passed from Fretboard)
  // calculate array of notes starting from root note where length = numberOfFret
  function calculateNotes(rootNote, length, activeIntervals) {
    let notes = [];
    let pitchedNoteIndex = PITCHED_NOTES.findIndex((val) => val === rootNote);
    let noteIndex = activeIntervals["activeIntervals"].findIndex(
      (note) => note.name === rootNote.slice(0, -1),
    );
    // console.log(activeIntervals["activeIntervals"]);

    for (let i = 0; i < length; i++) {
      let noteData = activeIntervals["activeIntervals"][(noteIndex + i) % 12];
      console.log(noteData);
      notes.push({
        pitch: PITCHED_NOTES[i + pitchedNoteIndex],
        interval: noteData["interval"],
        active: noteData["active"] ? "active" : "inactive",
      });
    }
    return notes;
  }

  const fretNotes = calculateNotes(
    props.rootnote,
    props.numfrets,
    activeIntervals,
  );
  // console.log(fretNotes);

  return (
    <ol
      key={"string-" + props.order}
      id={"string-" + props.order}
      className="string"
    >
      <label key={"label" + props.order}>{props.rootNote}</label>
      <hr className="string-hr" />
      {/*{console.info("STRING!")}*/}
      {/*{console.log(props)}*/}

      <Nut note={props.rootnote}></Nut>

      {fretNotes.map((note, i) => (
        <Fret
          //uid={props.order.toString() + i.toString()}
          key={"string-" + props.order + "_fret_" + i}
          index={i}
          note={note.pitch}
          active={note.active}
          interval={note.interval}
          string={props.order}
          //interval={i}
          width={props.fretwidths[i]}
        />
      ))}
    </ol>
  );
};

export default String;
