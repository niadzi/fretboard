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
} from "./Components/Utils/MusicTheory";
import { TonicSelector } from "./Components/UI/TonicSelector";

//import FretBoard from "./FretBoard"; // Assuming you have a FretBoard component

export default function Home() {
  const NoSSRFretboard = dynamic(() => import("./Components/Fretboard"), {
    ssr: false,
  });

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
            <NoSSRFretboard active={useActiveIntervals} />
          </ActiveIntervalsProvider>
        </TonicProvider>
      </ScaleProvider>
    </main>
  );
}
