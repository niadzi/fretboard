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
            className={"rotate-45 z-0"}
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
      </div>
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
          </div>
          <h2 className="max-w-lg mb-6 font-mono text-2xl leading-none text-gray-900 md:mx-auto">
            <div className={""}>
              <TonicSelector />
              <ScaleSelector />
            </div>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
