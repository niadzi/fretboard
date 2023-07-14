import react from "react";
import "./Nut.scss";

export function Nut({ note }) {
  function handleClick() {
    console.log("Nut.js");
    console.log(note);
  }

  return (
    <li className="nut" onClick={handleClick}>
      <label>{note}</label>
    </li>
  );
}
