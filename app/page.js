import React from "react";
import FetchData from "@/Components/fetchdata";
import SponsorEvent from "@/Components/sponsor";
import { Cormorant } from 'next/font/google';
import { BiSolidNavigation } from 'react-icons/bi';
import Image from "next/image";
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from "next/link";

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
      <section id="herohome" className={`h-[40dvh] sm:h-[70dvh] my-[0.1px] mx-auto w-full bg-hero-pattern bg-center bg-no-repeat bg-cover bg-blend-soft-light flex justify-center items-center bg-opacity-70 ${cormorant.variable}`}>
        <div className="w-[200px] md:w-[300px] h-auto align-middle text-start">
          <h1><span className="text-3xl md:text-7xl text-white font-cormorant">A Home For Hindu Devotees</span></h1></div>
      </section>


      <main className={`${cormorant.variable} flex flex-col max-w-screen overflow-hidden h-auto bg-gradient-to-tr from-gray-100 via-blue-100 to-slate-100`} >


        <section className={`w-[100%] h-auto md:h-96 p-1 md:p-10 bg-amber-50`}>
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
        <section className="w-[100%] h-auto md:h-auto  md:p-10">
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
        <section className={`w-[100%] md:max-w-screen h-auto p-1 md:p-10 my-10 grid grid-col-1 md:grid-cols-3 justify-items-center `} >


          <div className="flex flex-col w-full md:w-[330px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1689678777/VVGC%20Images/image_12.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Gallery </div>
              <div className="flex p-1 my-1 items-center"><span className="px-2">See more Photoes</span> <BiSolidNavigation /></div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[330px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914196/VVGC%20San%20Martin%20Temple%20Data/Gallery/68936063_2274984382569962_8933000778419798016_n_uqrzsf.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Sponsor other Events </div>
              <div className="flex p-1 my-1 items-center"><span className="px-2">Know more</span> <FaExternalLinkAlt /></div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-[330px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914197/VVGC%20San%20Martin%20Temple%20Data/Gallery/73283570_2376249725776760_7286846728483897344_n_taqhkw.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Our History </div>
              <div className="flex p-1 my-1 items-center"><span className="px-2">Know more</span> <BiSolidNavigation /></div>
            </div>
          </div>

        </section>

        <section>
          <iframe
            className="w-screen h-[200px] md:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101884.10724336727!2d-121.596685!3d37.060382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e04d2c0127e7%3A0xe48ebd982c2bd31b!2s11355%20Monterey%20Hwy%2C%20San%20Martin%2C%20CA%2095046!5e0!3m2!1sen!2sus!4v1694500881687!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </main>
    </React.Fragment>
  );
}
