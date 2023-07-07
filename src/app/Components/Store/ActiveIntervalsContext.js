// Context Provider for the ActiveNotesContext
// This context is used to store the notes that are currently active on the fretboard.
//  This is used to highlight the notes on the fretboard.
//  The context is used in the Fret component to determine if the note should be highlighted.
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const ActiveIntervalsContext = createContext([0, 2, 4, 5, 7, 9, 11]);

export const useActiveIntervals = () => useContext(ActiveIntervalsContext);

export const ActiveIntervalsProvider = ({ children }) => {
  const [activeIntervals, setActiveIntervals] = useState([
    0, 2, 4, 5, 7, 9, 11,
  ]);

  return (
    <ActiveIntervalsContext.Provider
      value={[activeIntervals, setActiveIntervals]}
    >
      {children}
    </ActiveIntervalsContext.Provider>
  );
};
