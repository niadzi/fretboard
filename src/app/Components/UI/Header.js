import Image from "next/image";
import React from "react";
import { TonicSelector } from "./TonicSelector";
import { ScaleSelector } from "./ScaleSelector";

const Header = () => {
  return (
    <header className={"w-full"}>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="">
          <Image
            src="/guitar.png"
            alt="Cute iridescent guitar"
            width={80}
            height={80}
            id={"guitar-logo"}
            className={"rotate-45 z-10"}
          />
        </h1>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://niadzi-muzira.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;Rainbow Tech /&gt;
        </a>
        <button className={"z-20"}>Options</button>
      </div>
    </header>
  );
};

export default Header;
