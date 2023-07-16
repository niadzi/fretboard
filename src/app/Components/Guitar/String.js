import React from "react";
import Fret from "./Fret";
import "./String.scss";
import { activeNotesOnString } from "../Utils/MusicTheory";
import { useContext } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { Nut } from "./Nut";
const String = ({ order, openNote, numFrets, fretWidths }) => {
  //const { currentScale } = useScale();
  const { intervalsState, dispatch } = useContext(ActiveIntervalsContext);
  console.log(intervalsState["activeIntervals"]);

  /**
   * Calculates the notes on a string given the open note, length, and active intervals.
   *
   * @param {string} openNote - The note at which the string starts.
   * @param {number} length - The number of notes to calculate.
   * @param {Array.<{name: string, interval: string, active: boolean}>} activeIntervals - An array of objects each representing a musical note.
   *
   * @returns {Array.<{pitch: string, interval: string, active: string}>} - An array of note objects, each with pitch, interval, and activity status.
   */

  const fretNotes = activeNotesOnString(
    openNote,
    numFrets,
    intervalsState["activeIntervals"],
  );

  return (
    <ol key={"string-" + order} id={"string-" + order} className="string">
      <hr className="string-hr" />

      <Nut note={openNote}></Nut>

      {fretNotes.map((note, i) => (
        <Fret
          key={"string-" + order + "_fret_" + i}
          index={i}
          note={note.pitch}
          active={note.active}
          interval={note.interval}
          string={order}
          width={fretWidths[i]}
        />
      ))}
    </ol>
  );
};

export default String;
