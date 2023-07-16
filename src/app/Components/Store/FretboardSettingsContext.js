// TODO - create a context for the fretboard settings
// Context Provider for ActiveNotesContext
// Stores the notes/intervals that are currently active on the fretboard.
import React, { useReducer } from "react";
import { createContext } from "react";
import {
  getActiveIntervals,
  initialIntervalsState,
  INTERVALS,
  SCALES,
} from "../Utils/MusicTheory";
import { calculateFretWidths } from "../UI/FretboardSettings";

export const FretboardSettingsContext = createContext([]);

export const FretboardSettingsProvider = ({ children }) => {
  const initFretboardSettings = {
    numStrings: 6,
    numFrets: 16,
    tuning: ["E4", "B3", "G3", "D3", "A2", "E2"],
    rightHanded: true,
    fretWidths: calculateFretWidths(16),
  };
  const fretboardSettingsReducer = (state, action) => {
    switch (action.type) {
      case "SET_TUNING":
        let newTuning = ["E4", "B3", "G3", "D3", "A2", "E2"];
        return {
          ...state,
          tuning: newTuning,
        };
      case "SET_NUM_FRETS":
        let newNumFrets = action.payload;
        let newFretWidths = calculateFretWidths(newNumFrets);
        return {
          ...state,
          numFrets: newNumFrets,
          newFretWidths: newFretWidths,
        };
      case "SET_RIGHT_HANDED":
        let newIsRightHanded = action.payload;
        return {
          ...state,
          rightHanded: newIsRightHanded,
        };
      default:
        return initFretboardSettings;
    }
  };

  const [fretboardSettings, fretboardSettingsDispatch] = useReducer(
    fretboardSettingsReducer,
    initFretboardSettings,
  );
  return (
    <FretboardSettingsContext.Provider
      value={{ fretboardSettings, fretboardSettingsDispatch }}
    >
      {children}
    </FretboardSettingsContext.Provider>
  );
};
