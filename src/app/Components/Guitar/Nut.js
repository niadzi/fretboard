import react from "react";
import "./Nut.scss";

export function Nut({ note }) {
  function handleClick() {
    console.log("Nut.js");
    console.log(note);
  }

  return (
    <li className="nut z-50" onClick={handleClick}>
      <label>{note}</label>
    </li>
  );
}
