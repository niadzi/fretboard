// TODO - create a context for the fretboard settings
// Context Provider for ActiveNotesContext
// Stores the notes/intervals that are currently active on the fretboard.
import React, { useReducer } from "react";
import { createContext } from "react";
import { initialIntervalsState, INTERVALS, SCALES } from "../Utils/MusicTheory";

export const FretboardSettingsContext = createContext([]);

export const FretboardSettingsProvider = ({ children }) => {
  const fretboardSettings = {
    numStrings: 6,
    numFrets: 16,
    tuning: ["E", "A", "D", "G", "B", "E"],
    rightHanded: true,
  };
  const fretboardSettingsReducer = (state, action) => {
    switch (action.type) {
      case "SET_TONIC": // TODO: complete this
        return {
          ...state,
          tonic: action.payload,
        };
      case "SET_SCALE":
        return {
          ...state,
          namedScale: action.payload,
          fretboardSettings: SCALES[action.payload],
        };
      case "TOGGLE_INTERVAL":
        fretboardSettings[INTERVALS.indexOf(action.payload)]["active"] =
          !fretboardSettings[INTERVALS.indexOf(action.payload)]["active"];
        return {
          fretboardSettings: fretboardSettings,
        };
      default:
        return fretboardSettings; //state;
    }
  };

  const [fretboardSettingsState, dispatch] = useReducer(
    fretboardSettingsReducer,
    () => initialIntervalsState,
  );

  return (
    <FretboardSettingsContext.Provider value={{ fretboardSettings, dispatch }}>
      {children}
    </FretboardSettingsContext.Provider>
  );
};
