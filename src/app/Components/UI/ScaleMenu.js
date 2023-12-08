// import react and create function component
import React from "react";
import { TonicSelector } from "./TonicSelector";
import { ScaleSelector } from "./ScaleSelector";
import { IntervalToggles } from "./IntervalToggles";
import { HueSlider } from "./HueSlider";
export default function ScaleMenu() {
  return (
    <div className="w-full flex flex-auto">
      <div id="select-scale" className="basis-1/3 p-0">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
        </div>
        <h2 className="">
          <div className={"caprasimo"}>
            <TonicSelector />
            <ScaleSelector />
          </div>
        </h2>
      </div>
      <IntervalToggles />
    </div>
  );
}
