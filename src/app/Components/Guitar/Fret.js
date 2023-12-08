import React from "react";
import "./Fret.scss";
import "../UI/IntervalToggle.scss";
import { useContext } from "react";
import { ActiveIntervalsContext } from "../Store/ActiveIntervalsContext";
import { FretboardSettingsContext } from "../Store/FretboardSettingsContext";
import {INTERVAL_COLOURS, INTERVAL_COLOURS_HSL, INTERVALS} from "../Utils/MusicTheory";
function Fret({ index, note, interval, active, string, width }) {
  const { dispatch } = useContext(ActiveIntervalsContext);
  const { fretboardSettings } = useContext(FretboardSettingsContext);

  const adjustHue = (i) => {
    console.log(i);
    let iIndex = INTERVALS.indexOf(i);
    let iHue = iIndex * 30;
    let hueOffset = Math.round(fretboardSettings.hueAdjust);
    let adjustedHue = Math.round(iHue + hueOffset) % 360;
    console.log(
      "interval: " +
        i +
        " index:" +
        iIndex +
        " iHue" +
        iHue +
        " hueAdjust: " +
        adjustedHue,
    );

    return adjustedHue;
    // parseInt(parseInt(iIndex, 10) + parseInt(fretboardSettings.hueAdjust, 10)) %
    //   360;
  };

  //const hue = adjustHue(interval);

  const getHueCSSFromInterval = (interval) => {
    //console.log((INTERVAL_COLOURS)[interval]);
    return (INTERVAL_COLOURS_HSL)[interval];
    //return `hsl(${adjustHue(hue)}, 100%, 50%)`;
  };

  const hue = getHueCSSFromInterval(interval);

  return (
    <li
      key={"string-" + string + "_fret-" + index}
      id={"string-" + string + "_fret-" + index}
      className={"fret fret-" + index + " " + note + " " + active}
      style={{ width: width + "%" }}
      onClick={() => {
        dispatch({ type: "SET_TONIC", payload: note.slice(0, -1) });
      }}
    >
      <div className={active + "-fret-button"}>
        <span className="fret-button-wrapper">
          <button
            key={"string-" + string + "__fret-" + index}
            id={"string-" + string + "__fret" + index}
            className={interval + " " + active + "-interval interval-toggle"}
            style={{
              //filter: `hue-rotate(${fretboardSettings.hueAdjust}deg)`,
              // backgroundColor: `hsl(${adjustHue(interval)}, 100%, 77%)`, // Adjusting base red
              backgroundColor: `hsla(${hue}, 100%, 50%,50%)`, // Adjusting base red
              //backgroundColor: `rgba(255, 255, 255, .18)`,
              //borderColor: `hsla(${hue}, 100%, 50%,28%)`,
              borderColor: `hsla(${hue}, 100%, 97%,18%)`,
            }}
          >
            {note.slice(0, -1)}
          </button>
        </span>
      </div>
    </li>
  );
}

export default Fret;
