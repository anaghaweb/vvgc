
import { FetchData } from "./fetchdata";
import SponsorEvent from "@/components/sponsor";
import { cormorant } from "@/app/fonts";
import { BiSolidNavigation } from 'react-icons/bi';
import Image from "next/image";
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Hero_Image_Wrapper } from "@/app/GlobalStyles/globalstyles";
import * as React from 'react'


export default async function HomePage() {

    const data = await FetchData();



  const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';
  return (
    <React.Fragment >

      {/* Hero Section */}
      <Hero_Image_Wrapper $bgimg={heroimgURL}>
        <div className={cormorant.variable}>
          <h1>A Home For Hindu Devotees</h1></div>
      </Hero_Image_Wrapper>


      <main className={`${cormorant.variable} flex flex-col max-w-screen overflow-hidden h-auto from-gray-100 via-blue-100 to-slate-100`} >


        <section className={`w-[100%] h-auto md:h-96 p-1 md:p-10 bg-amber-50`}>
          <div className="text-red-950 ">
            <h1 className="text-2xl md:text-4xl font-cormorant">Today at the Temple:</h1></div>
          <hr className="h-[2px] bg-red-800 my-2 " />

          <div className="text-sm md:text-xl ">Time: 6:30PM</div>
          <div className="text-sm md:text-base ">Shiva Abisheka, Aarthi and Manthra Pushpa</div>
          <hr className="my-1" />

          <div className="text-sm md:text-xl ">Time: 7:30AM</div>
          <div className="text-sm md:text-base  ">Sri Shridi Sai Haarathulu Dhoop Aarathi</div>

          <hr className="my-1" />

          <div className="text-sm md:text-xl  ">Time: 8:00PM</div>
          <div className="text-sm md:text-base  ">Sri Jai Jagadesha Hare Aarathi</div>
          <hr className="my-1" />
        </section>
        {/* Upcoming events */}
        <section className="w-[100%] h-auto md:h-auto  md:p-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-cormorant text-red-950 ">Upcoming Special Events</h1>
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
            className="w-full h-[200px] md:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101884.10724336727!2d-121.596685!3d37.060382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e04d2c0127e7%3A0xe48ebd982c2bd31b!2s11355%20Monterey%20Hwy%2C%20San%20Martin%2C%20CA%2095046!5e0!3m2!1sen!2sus!4v1694500881687!5m2!1sen!2sus"></iframe>
        </section>
      </main>
    </React.Fragment>
  );
}
