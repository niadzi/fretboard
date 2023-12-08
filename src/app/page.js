"use client";
import Image from "next/image";
import React from "react";
import Fretboard from "./Components/Guitar/Fretboard";
import { ActiveIntervalsProvider } from "./Components/Store/ActiveIntervalsContext";
import FretboardSettings from "./Components/UI/FretboardSettings";
import "./page.scss";
import { FretboardSettingsProvider } from "./Components/Store/FretboardSettingsContext";
import Header from "./Components/UI/Header";
import { IntervalToggles } from "./Components/UI/IntervalToggles";
import { TonicSelector } from "./Components/UI/TonicSelector";
import { ScaleSelector } from "./Components/UI/ScaleSelector";
import { Info } from "./Components/Info";
import ScaleMenu from "./Components/UI/ScaleMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 py-8 bg-white">
      <FretboardSettingsProvider>
        <ActiveIntervalsProvider>
          <Header />
          <Fretboard />
          <ScaleMenu />
          <FretboardSettings />
        </ActiveIntervalsProvider>
      </FretboardSettingsProvider>
      <Info />
    </main>
  );
}
