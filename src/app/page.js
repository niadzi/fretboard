"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
//import NoSSR from "react-no-ssr";
import React, { useState, useEffect } from "react";
import { ScaleProvider } from "./Components/Store/ScaleContext";
//import { useScale } from "./Store/ScaleContext";
import { ScaleSelector } from "./Components/UI/ScaleSelector";
import FretBoard from "./Components/Fretboard";
import DynamicFretboard from "./Components/DynamicFretboard";
import {
  ActiveIntervalsProvider,
  useActiveIntervals,
} from "./Components/Store/ActiveIntervalsContext";
import { TonicProvider } from "./Components/Store/TonicContext";
import FretboardSettings from "./Components/UI/FretboardSettings";
import {
  Notes,
  Scales,
  PitchedNotes,
  Intervals,
  Note,
} from "./Components/Utils/MusicTheory";
import { TonicSelector } from "./Components/UI/TonicSelector";

//import FretBoard from "./FretBoard"; // Assuming you have a FretBoard component

export default function Home() {
  const NoSSRFretboard = dynamic(() => import("./Components/Fretboard"), {
    ssr: false,
  });

  const selectedIntervals = [
    { name: "A", active: true, interval: "R" },
    { name: "A#", active: false, interval: "m2" },
    { name: "B", active: true, interval: "M2" },
    { name: "C", active: false, interval: "m3" },
    { name: "C#", active: true, interval: "M3" },
    { name: "D", active: true, interval: "P4" },
    { name: "D#", active: false, interval: "TT" },
    { name: "E", active: true, interval: "P5" },
    { name: "F", active: false, interval: "m6" },
    { name: "F#", active: true, interval: "M6" },
    { name: "G", active: false, interval: "m7" },
    { name: "G#", active: true, interval: "M7" },
  ];

  const activeNotes = [];
  selectedIntervals.forEach((note) => {
    activeNotes.push(new Note(note.name, note.active, note.interval));
  });

  function calculateSelectedIntervals(tonic, scale) {
    const selectedIntervals = [];
    const scaleNotes = Scales[scale];
    const tonicIndex = Notes.indexOf(tonic);
    const tonicNote = Notes[tonicIndex];
    const tonicPitch = PitchedNotes[tonicIndex];
    scale.forEach((intervalIndex) => {
      const interval = Intervals[intervalIndex];
      const note = Notes[(tonicIndex + intervalIndex) % 12];
      const intervalActive = true;
      selectedIntervals.push({
        name: note,
        interval: interval,
        active: intervalActive,
      });
    });
    return selectedIntervals;
  }

  console.log(calculateSelectedIntervals("A", Scales["Ionian"]));
  console.log(calculateSelectedIntervals("C", Scales["Ionian"]));
  console.log(calculateSelectedIntervals("D", Scales["Pentatonic Major"]));
  console.log(calculateSelectedIntervals("E", Scales["Pentatonic Minor"]));
  console.log(calculateSelectedIntervals("E", [0, 7]));

  // const initialState = {
  //   tonic: "A",
  //   namedScale: "Ionian",
  //   activeIntervals: Scales["Ionian"],
  //   notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  // };
  //
  // const UPDATE_NOTES = "UPDATE_NOTES";
  // const SET_TONIC = "SET_TONIC";
  // const SET_SCALE = "SET_SCALE";
  // const TOGGLE_INTERVAL = "TOGGLE_INTERVAL";
  //
  // // calculate an array of notes from a tonic and a scale
  // // e.g. getNotes ("C", "Ionian") => ["C", "D", "E", "F", "G", "A", "B"]
  // // getNotes ("C", "Dorian") => ["C", "D", "Eb", "F", "G", "A", "Bb"]
  // // tonic: string
  // // scale: array of intervals
  // const calculateIntervals = (tonic, scale) => {};
  //
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case UPDATE_NOTES:
  //       //calculateNotes(state.tonic, state.scale);
  //       return {
  //         tonic: "C",
  //         namedScale: "Ionian",
  //         activeIntervals: Scales["Ionian"],
  //         notes: ["C", "D", "E", "F", "G", "A", "B"],
  //       };
  //     case SET_TONIC:
  //       return {
  //         tonic: action.tonic,
  //         namedScale: state.namedScale,
  //         activeIntervals: state.activeIntervals,
  //         notes: ["C", "D", "E", "F", "G", "A", "B"],
  //       };
  //     case SET_SCALE:
  //       return {
  //         username: state.username,
  //         gender: state.gender,
  //         age: action.age,
  //       };
  //     default:
  //       return initialState;
  //   }
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold">
          Interactive Guitar Fretboard
        </h1>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;Rainbow Tech /&gt;
          <Image
            src="/logo.png"
            alt="Rainbow Tech"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
        </a>
      </div>
      <ScaleProvider>
        <TonicProvider>
          <ActiveIntervalsProvider>
            <ScaleSelector />
            <TonicSelector />
            <NoSSRFretboard />
          </ActiveIntervalsProvider>
        </TonicProvider>
      </ScaleProvider>
    </main>
  );
}
