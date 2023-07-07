import React from "react";
import * as Tonal from "tonal";
import "./Fret.css";
import FretWidths from "./FretWidths";

// could send array of notes(pitch classes) on eg  [A, C, E]
// activePitches = [A, C, E, G, B, D];
// but then each Fret has to be re-rendered on each change
const Fret = (props) => {
  const [isTonic, setIsTonic] = React.useState(false);
  return (
    <li
      id={props.uid}
      className="fret"
      width={FretWidths[props.number]}
      data-note={props.note}
      data-tone="7"
      data-interval="7"
      style={{ width: props.width + "px" }}
    >
      <div id="highlight-s-1-f-0" className="highlight open interval-on">
        <div id="number-s-1-f-0" className="number"></div>
        <div id="fretnote-s-1-f-0" className="fretnote open">
          {props.note}
        </div>
      </div>
    </li>
  );
};

export default Fret;
