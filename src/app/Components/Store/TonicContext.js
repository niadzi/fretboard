// Context Provider for the Tonic
// This context is used to store the tonic that is currently active on the fretboard.
//  This is used to highlight the tonic on the fretboard, and determine the notes that are active on the fretboard.
//  This information is used in the Fret component to determine if the Fret should be highlighted and with which hue.
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const TonicContext = createContext("C");

export const useTonic = () => useContext(TonicContext);

export const TonicProvider = ({ children }) => {
  const [tonic, setTonic] = useState("C");

  return (
    <TonicContext.Provider value={{ tonic, setTonic }}>
      {children}
    </TonicContext.Provider>
  );
};
