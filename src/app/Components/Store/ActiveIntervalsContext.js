// Context Provider for the ActiveNotesContext
// This context is used to store the notes that are currently active on the fretboard.
//  This is used to highlight the notes on the fretboard.
//  The context is used in the Fret component to determine if the note should be highlighted.
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import {
  calculateSelectedIntervals,
  initSelectedIntervals,
  Intervals,
  Note,
  Notes,
  Scales,
} from "../Utils/MusicTheory";

const activeIntervals = [
  { note: "A", active: true, interval: "R" },
  { note: "A#", active: false, interval: "m2" },
  { note: "B", active: true, interval: "M2" },
  { note: "C", active: false, interval: "m3" },
  { note: "C#", active: true, interval: "M3" },
  { note: "D", active: true, interval: "P4" },
  { note: "D#", active: false, interval: "TT" },
  { note: "E", active: true, interval: "P5" },
  { note: "F", active: false, interval: "m6" },
  { note: "F#", active: true, interval: "M6" },
  { note: "G", active: false, interval: "m7" },
  { note: "G#", active: true, interval: "M7" },
];

const ActiveIntervalsContext = createContext(activeIntervals);

export const useActiveIntervals = () => useContext(ActiveIntervalsContext);

export const ActiveIntervalsProvider = ({ children }) => {
  const [activeIntervals, setActiveIntervals] = useState([]);
  //const activeIntervalsX = [];

  const [currentScale, setCurrentScale] = useState([
    "A",
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G#",
  ]);
  const [notesInScale, setNotesInScale] = useState([]);

  const activeNotes = [];
  initSelectedIntervals.forEach((note) => {
    activeNotes.push(new Note(note.name, note.active, note.interval));
  });

  useEffect(() => {
    const updatedNotesInScale = Notes.map((note) => ({
      note,
      active: currentScale.includes(note),
    }));

    setNotesInScale(updatedNotesInScale);
    console.log("notesInScale", notesInScale);
    setActiveIntervals(calculateSelectedIntervals("A", Scales["Ionian"]));
  }, [currentScale]);

  // console.log(calculateSelectedIntervals("A", Scales["Ionian"]));
  // console.log(calculateSelectedIntervals("C", Scales["Ionian"]));
  // console.log(calculateSelectedIntervals("D", Scales["Pentatonic Major"]));
  // console.log(calculateSelectedIntervals("E", Scales["Pentatonic Minor"]));
  // console.log(calculateSelectedIntervals("E", [0, 7]));

  return (
    <ActiveIntervalsContext.Provider
      value={[activeIntervals, setActiveIntervals]}
    >
      {children}
    </ActiveIntervalsContext.Provider>
  );
};
