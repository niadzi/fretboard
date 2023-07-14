// Context Provider for ActiveNotesContext
// Stores the notes/intervals that are currently active on the fretboard.
import React, { useReducer } from "react";
import { createContext } from "react";
import {
  calculateSelectedIntervals,
  initialIntervalsState,
  INTERVALS,
  SCALES,
} from "../Utils/MusicTheory";

export const ActiveIntervalsContext = createContext([]);

export const ActiveIntervalsProvider = ({ children }) => {
  const initActiveIntervals = initialIntervalsState;
  const intervalsReducer = (state, action) => {
    switch (action.type) {
      case "SET_TONIC": // TODO: complete this
        console.log("SET_TONIC: " + action.payload);
        //let tonic = activeIntervals;
        console.log(state);
        let newTonic = calculateSelectedIntervals(action.payload, state.scale);
        return {
          ...state,
          tonic: action.payload,
          activeIntervals: newTonic,
        };
      case "SET_SCALE":
        console.log("SET_SCALE: " + action.payload);
        console.log(SCALES[action.payload]);
        //let tonic = activeIntervals;
        console.log(state);
        let newScale = calculateSelectedIntervals(
          state.tonic,
          SCALES[action.payload],
        );
        return {
          ...state,
          scale: SCALES[action.payload],
          activeIntervals: newScale,
        };
      case "TOGGLE_INTERVAL":
        //...state = active;
        let newIntervals = state["activeIntervals"];
        newIntervals[INTERVALS.indexOf(action.payload)]["active"] =
          !newIntervals[INTERVALS.indexOf(action.payload)]["active"];
        //let i = INTERVALS.indexOf(action.payload);
        //return { ...state, i: !i };
        return {
          ...state,
          activeIntervals: newIntervals,
        };
      default:
        return initActiveIntervals; //state;
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
