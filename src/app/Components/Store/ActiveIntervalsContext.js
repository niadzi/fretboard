// Context Provider for the ActiveNotesContext
// This context is used to store the notes that are currently active on the fretboard.
//  This is used to highlight the notes on the fretboard.
//  The context is used in the Fret component to determine if the note should be highlighted.
import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import {
  calculateSelectedIntervals,
  initialIntervalsState,
  initSelectedIntervals,
  INTERVALS,
  Note,
  NOTES,
  SCALES,
} from "../Utils/MusicTheory";
import { compressSymbols } from "babel-plugin-styled-components/lib/minify";

export const ActiveIntervalsContext = createContext([]);

export const ActiveIntervalsProvider = ({ children }) => {
  //const [activeIntervals, setActiveIntervals] = useState(initialIntervalsState);

  const activeIntervals = initialIntervalsState;
  const intervalsReducer = (state, action) => {
    switch (action.type) {
      case "SET_TONIC":
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
        const newIntervals = [...activeIntervals];
        // const active = activeIntervals[action.payload];
        console.log("TOGGLE_INTERVAL");
        //console.log(newIntervals[INTERVALS.indexOf(action.payload)]["active"]);
        activeIntervals[INTERVALS.indexOf(action.payload)]["active"] =
          !activeIntervals[INTERVALS.indexOf(action.payload)]["active"];
        //newIntervals[INTERVALS.indexOf(action.payload)] = !active;
        //console.log(newIntervals);
        //console.log(action.payload);
        //console.log(state);
        console.log(newIntervals);
        //console.log(activeIntervalsState);
        return {
          //state,
          activeIntervals: newIntervals,
        };
      default:
        return state;
    }
  };

  const [activeIntervalsState, dispatch] = useReducer(
    intervalsReducer,
    () => initialIntervalsState,
    //() => initialIntervalsState,
  );

  // useEffect(() => {
  //   setActiveIntervals(calculateSelectedIntervals("D", Scales["Ionian"]));
  // }, []);

  //console.log(activeIntervals);
  return (
    <ActiveIntervalsContext.Provider
      value={{ activeIntervals, activeIntervalsState, dispatch }}
    >
      {children}
    </ActiveIntervalsContext.Provider>
  );
};
