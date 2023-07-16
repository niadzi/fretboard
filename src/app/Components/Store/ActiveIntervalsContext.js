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

export const ActiveIntervalsContext = createContext([]);

export const ActiveIntervalsProvider = ({ children }) => {
  const initHighlightedIntervals = initialIntervalsState;
  const intervalsReducer = (state, action) => {
    switch (action.type) {
      case "SET_TONIC":
        let newTonic = getActiveIntervals(action.payload, state.scale);
        return {
          ...state,
          tonic: action.payload,
          activeIntervals: newTonic,
        };
      case "SET_SCALE":
        let newScale = getActiveIntervals(state.tonic, SCALES[action.payload]);
        return {
          ...state,
          scale: SCALES[action.payload],
          activeIntervals: newScale,
        };
      case "TOGGLE_INTERVAL":
        let newIntervals = state["activeIntervals"];
        newIntervals[INTERVALS.indexOf(action.payload)]["active"] =
          !newIntervals[INTERVALS.indexOf(action.payload)]["active"];
        return {
          ...state,
          activeIntervals: newIntervals,
        };
      default:
        return initHighlightedIntervals;
    }
  };

  const [intervalsState, dispatch] = useReducer(
    intervalsReducer,
    initialIntervalsState,
  );

  return (
    <ActiveIntervalsContext.Provider value={{ intervalsState, dispatch }}>
      {children}
    </ActiveIntervalsContext.Provider>
  );
};
