import * as React from "react";
import Image from "next/image";
import "./Inlays.scss";

export default function Inlay({ index, displayInlay, width }) {
  const numInlays = index % 12 === 0 ? 2 : 1;
  return (
    <li
      key={"inlay-" + index}
      id={"inlay-" + index}
      className={"inlay fret fret-" + index + " numInlays-" + numInlays}
      style={{ width: width + "%" }}
    >
      {displayInlay === "true" ? (
        <InlayImage />
      ) : (
        <InlayImage isInvisible="true" />
      )}
      {numInlays === 2 ? <InlayImage /> : " "}
    </li>
  );
}

export function InlayImage({ isInvisible }) {
  //let invisible = isInvisible ? " invisible" : "";
  return (
    <Image
      src="/sparkle.png"
      alt="sparkle"
      className={"holo holo-shine" + (isInvisible ? " invisible" : "")}
      width="30"
      height="30"
    />
  );
}
