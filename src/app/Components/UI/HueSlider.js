import React, { useContext } from "react";
import { FretboardSettingsContext } from "../Store/FretboardSettingsContext";
import "./HueSlider.scss";

export const HueSlider = () => {
  const { fretboardSettings, dispatch } = useContext(FretboardSettingsContext);
  const [hueAdjust, setHueAdjust] = React.useState("0");
  function calculateIntervalHues(offset) {
    let hue = 0;
    let intervalHues = [];
    for (let i = 0; i < 12; i++) {
      hue = 30 * i;
      hue = Math.round(Math.round(hue + offset) % 360);
      intervalHues.push(hue);
    }
    console.log(intervalHues);
    return intervalHues;
  }
  return (
    <>
      {/*<label htmlFor="hueAdjust">Hue Adjust</label>*/}
      <input
        type="range"
        id="hueAdjust"
        min="0"
        max="360"
        //step="60"
        value={fretboardSettings.hueAdjust}
        onChange={(e) => {
          setHueAdjust(e.target.value);
          dispatch({
            type: "SET_HUE_ADJUST",
            payload: e.target.value,
          });
        }}
      />
    </>
  );
};
