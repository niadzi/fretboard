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
  calculateSelectedIntervals,
  initialIntervalsState,
  initSelectedIntervals,
} from "./Components/Utils/MusicTheory";
import {
  NOTES,
  SCALES,
  PITCHED_NOTES,
  INTERVALS,
  Note,
} from "./Components/Utils/MusicTheory";
import { TonicSelector } from "./Components/UI/TonicSelector";
import { IntervalToggles } from "./Components/UI/IntervalToggles";
import "./page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import FretBoard from "./FretBoard"; // Assuming you have a FretBoard component

export default function Home() {
  const NoSSRFretboard = dynamic(() => import("./Components/Fretboard"), {
    ssr: false,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-8 bg-white">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="">
          <Image
            src="/guitar.png"
            alt="Cute iridescent guitar"
            width={80}
            height={80}
            id={"guitar-logo"}
            className={"rotate-45 z-0"}
          />
        </h1>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="http://niadzi-muzira.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;Rainbow Tech /&gt;
        </a>
      </div>
      <ScaleProvider>
        <TonicProvider>
          <ActiveIntervalsProvider value={initialIntervalsState}>
            <NoSSRFretboard />
            <IntervalToggles />
            <fieldset className={"grid grid-cols-2"}>
              <TonicSelector />
              <ScaleSelector />
            </fieldset>
          </ActiveIntervalsProvider>
        </TonicProvider>
      </ScaleProvider>
    </main>
  );
}
