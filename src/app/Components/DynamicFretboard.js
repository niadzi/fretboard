"use client";

import * as React from "react";
import String from "./String";
import { useState } from "react";
import FRETWIDTHS from "./FRETWIDTHS";
import dynamic from "next/dynamic";

const DynamicFretboard = dynamic(() => import("./Fretboard"), {
  ssr: false,
});
export default DynamicFretboard;
