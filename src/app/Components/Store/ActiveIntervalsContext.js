// Context Provider for ActiveNotesContext
// Stores the notes/intervals that are currently active on the fretboard.
import React, { useReducer } from "react";
import { createContext } from "react";
import { initialIntervalsState, INTERVALS, SCALES } from "../Utils/MusicTheory";

export const ActiveIntervalsContext = createContext([]);

export const ActiveIntervalsProvider = ({ children }) => {
  const activeIntervals = initialIntervalsState;
  const intervalsReducer = (state, action) => {
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
          activeIntervals: SCALES[action.payload],
        };
      case "TOGGLE_INTERVAL":
        activeIntervals[INTERVALS.indexOf(action.payload)]["active"] =
          !activeIntervals[INTERVALS.indexOf(action.payload)]["active"];
        return {
          activeIntervals: activeIntervals,
        };
      default:
        return activeIntervals; //state;
    }
  };

  const [activeIntervalsState, dispatch] = useReducer(
    intervalsReducer,
    () => initialIntervalsState,
  );

  return (
    <ActiveIntervalsContext.Provider
      value={{ activeIntervals, activeIntervalsState, dispatch }}
    >
      {children}
    </ActiveIntervalsContext.Provider>
  );
};
