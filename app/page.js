import React from "react";
import FetchData from "@/Components/fetchdata";
import SponsorEvent from "@/Components/sponsor";
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'serif' });


export const metadata = {
  title: 'Home',
  description: 'VVGC- Temple',
}

export default async function Home() {

  const data = await FetchData();

  return (
    <React.Fragment>

      <section className={`h-[40dvh] sm:h-[70dvh] my-[0.1px] mx-auto w-full bg-hero-pattern bg-center bg-no-repeat bg-cover flex justify-center items-center  text-3xl md:text-6xl text-white font-sans font-normal bg-opacity-70 ${cormorant.variable}`}>
        <div className="w-[200px] md:w-[280px] h-auto align-middle text-center">
          <h1><span className="font-cormorant">A Home For Hindu Devotees</span></h1></div>
      </section>

      <main className="flex flex-col w-full h-auto bg-blue-100 md:justify-center" >
        {data.content.map((data, index) => {

          return (data.homepage === 'sponsor' ? <SponsorEvent data={data} key={index} /> : "")
        })
        }
      </main>




    </React.Fragment>
  );
}
