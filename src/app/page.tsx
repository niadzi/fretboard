import Image from 'next/image'
import {Fretboard} from "@/app/Components/Fretboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold">
          Interactive Guitar Fretboard
        </h1>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;Rainbow Tech /&gt;
            <Image
              src="/logo.png"
              alt="Rainbow Tech"
              className="dark:invert"
              width={35}
              height={35}
              priority
            />
          </a>
        </div>
      <Fretboard></Fretboard>
    </main>
  )
}
