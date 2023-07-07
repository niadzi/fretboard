// Context Provider for the ActiveNotesContext
// This context is used to store the notes that are currently active on the fretboard.
//  This is used to highlight the notes on the fretboard.
//  The context is used in the Fret component to determine if the note should be highlighted.
import React from "react";
import * as Tonal from "tonal";
import Notes from "./MusicTheory/Notes";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

const ActiveNotesContext = createContext({
    tonic : "C",
    scale : [0,2,4,5,7,9,11]
});

export const useActiveNotes = () => useContext(ActiveNotesContext);

export const ActiveNotesProvider = ({ children }) => {
  const [activeNotes, setActiveNotes] = useState("");

  return (
    <ActiveNotesContext.Provider value={[activeNotes, setActiveNotes]}>
      {children}
    </ActiveNotesContext.Provider>
  );
};
