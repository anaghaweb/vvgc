import React from "react";
import { Playfair } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Home',
  description: 'VVGC- Temple',
}

export default function Home() {
  return (
    <React.Fragment>
      <section className={`h-[70vh] w-full bg-hero-pattern bg-center bg-no-repeat bg-cover flex justify-center items-center text-6xl text-white ${playfair.variable} font-sans font-[300]`}>
        <div className="w-[280px] h-auto"><h1>A Home For Hindu Devotees</h1></div>
      </section>

    </React.Fragment>
  );
}
