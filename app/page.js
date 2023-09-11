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
    <React.Fragment >

      {/* Hero Section */}
      <section className={`h-[40dvh] sm:h-[70dvh] my-[0.1px] mx-auto w-full bg-hero-pattern bg-center bg-no-repeat bg-cover flex justify-center items-center  text-3xl md:text-6xl text-white font-sans font-normal bg-opacity-70 ${cormorant.variable}`}>
        <div className="w-[200px] md:w-[280px] h-auto align-middle text-center">
          <h1><span className="font-cormorant">A Home For Hindu Devotees</span></h1></div>
      </section>


      <main className={`${cormorant.variable} flex flex-col max-w-screen overflow-hidden h-auto`} >


        <section className={`w-[100%] h-auto md:h-96 bg-amber-100 p-1 md:p-10 `}>
          <div className="text-red-950 ">
            <h1 className="text-2xl md:text-4xl font-cormorant">Today at the Temple:</h1></div>
          <hr className="h-[2px] bg-red-800 my-2 " />

          <div className="text-sm md:text-xl ">Time: 12:00PM</div>
          <div className="text-sm md:text-base ">Jai Jagadeesha Hare Aarati followed by Maha prasadam / Priti Bhoj</div>
          <hr className="my-1" />

          <div className="text-sm md:text-xl ">Time: 7:30AM</div>
          <div className="text-sm md:text-base  ">September 6, Saturday - September 12, Sunday:</div>
          <div className="text-sm md:text-base  ">Sri Krishna Janmashtami - Bhagavatha Sapthagam</div>
          <hr className="my-1" />

          <div className="text-sm md:text-xl  ">Time: 4:00PM</div>
          <div className="text-sm md:text-base  ">September 9, Saturday - September 24, Sunday</div>
          <div className="text-sm md:text-base  ">Daily Ganapathi Homam, Weekdays at 6:00PM, Weekends at 4:00PM</div>
          <hr className="my-1" />
        </section>
        {/* Upcoming events */}
        <section className="w-[100%] h-auto md:h-auto bg-amber-100  md:p-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-cormorant text-red-950 ">Upcoming & Ongoing Events</h1>
          </div>
          <hr className="h-[2px] bg-red-800 my-2 " />
          <div className="my-[16px] w-[100%] grid grid-cols-1 md:grid-cols-2 ">
            {data.content.map((data, index) => {

              return (data.homepage === 'sponsor' ? <SponsorEvent data={data} key={index} /> : "")
            })
            }
          </div>
        </section>
        <div className={`w-[100%] md:max-w-screen h-auto md:h-96 bg-green-100 p-1 md:p-10 `}>
          <h1 className="text-2xl md:text-4xl font-cormorant text-red-950 ">Other Activities</h1>
        </div>

      </main>




    </React.Fragment>
  );
}
