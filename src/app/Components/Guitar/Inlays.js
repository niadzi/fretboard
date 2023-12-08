import * as React from "react";
import Inlay from "./Inlay";
import { useEffect } from "react";
import "./Inlays.scss";
import {Nut} from "./Nut";
import {randomInt} from "crypto";
const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
export default function Inlays({ numFrets, fretWidths }) {
  let inlays = [];
  let displayInlay = "false";
  for (let i = 1; i < numFrets; i++) {
    i === 1 ? inlays.push(<Nut/>) : null;
    FRET_MARKERS.includes(i)
      ? (displayInlay = "true")
      : (displayInlay = "false");
    inlays.push(
      <Inlay
        key={"inlays" + "_fret_" + i}
        index={i}
        displayInlay={displayInlay}
        width={fretWidths[i]}
      />,
    );
  }

  return <ol className="inlays w-full">{inlays}</ol>;
}
