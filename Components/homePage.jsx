import { FetchData } from "./fetchdata";
import SponsorEvent from "./sponsor";
import { cormorant, playfair } from "../app/fonts";
import { BiSolidNavigation } from 'react-icons/bi';
import Image from "next/image";
import { FaExternalLinkAlt } from 'react-icons/fa'
import * as React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import {events} from '../data/regularEvent'
import EventCard from './dailyEvent'

export default async function HomePage() {

    const data = await FetchData();

  const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';
  return (
    <React.Fragment >

      {/* Hero Card */}
      < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-home ${playfair.variable} bg-[rgb(0,0,0,0.8)]  `}        
                >
                     <h1 className="text-6xl md:text-7xl font-[playfair] text-wrap font-light text-center ">A Home  For Hindu Devotees </h1>
                </div>


      <main className={`${cormorant.variable} flex flex-col max-w-screen overflow-hidden h-auto from-gray-100 via-blue-100 to-slate-100`} >

      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-4 h-auto md:h-[400px] my-2 md:my-0 flex-1 text-center">
          <Card className={`w-[100%] h-auto md:h-full p-1 md:p-1`}>
          <div className="text-blue-600 ">
            <CardHeader className="text-2xl md:text-4xl font-cormorant">Today at the Temple:</CardHeader></div>
          <CardContent className="flex flex-col gap-6">
            <EventCard events = {events} />
          {/* <div>
          <div className="text-sm md:text-xl ">Time: 6:30PM</div>
          <div className="text-sm md:text-base ">Shiva Abisheka, Aarthi and Manthra Pushpa</div>
          </div>
          <div>
          <div className="text-sm md:text-xl ">Time: 7:30AM</div>
          <div className="text-sm md:text-base  ">Sri Shridi Sai Haarathulu Dhoop Aarathi</div>

          </div>
        <div>
          <div className="text-sm md:text-xl  ">Time: 8:00PM</div>
          <div className="text-sm md:text-base  ">Sri Jai Jagadesha Hare Aarathi</div>
          </div> */}
          </CardContent>
        </Card>
        </div>

        {/* FEEDBACK */}
        <div className="col-span-1 lg:col-span-2 h-auto md:h-[400px] flex-1  text-center">
        <Card className={`w-[100%] h-auto md:h-[400px] p-1 md:p-1`}>
        <CardHeader className="text-2xl md:text-4xl font-cormorant text-blue-500">Feedback</CardHeader>
        <CardContent className="flex flex-col gap-3">
        <div className="text-sm md:text-base ">Please consider sharing a few words about your recent experiences. Your feedback plays a crucial role in shaping the services we provide. </div>
        <div className="text-sm md:text-base ">Thank you for being an integral part of our temple community</div>
        <div className="text-sm md:text-base ">Click to provide feedback</div>
        
        
        </CardContent>
        <CardFooter><Button className="flex w-full sm:w-44 mx-auto p-6 my-1 items-center text-white bg-green-700"><Link href={'/feedback'}> Feedback</Link></Button></CardFooter>
        </Card>
        

        </div>
      </div>
        
        {/* Upcoming events */}
        <Card className="w-[100%] h-auto md:h-auto  md:p-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-cormorant text-blue-500 ">Upcoming Special Events</h1>
          </div>
          <hr className="h-[2px] bg-red-800 my-2 " />
          <div className="my-[16px] w-[100%] grid grid-cols-1 lg:grid-cols-2 lg:gap-6 ">
            {data.content.map((data, index) => {

              return (data.homepage === 'sponsor' ? <SponsorEvent data={data} key={index} /> : "")
            })
            }
          </div>
          <CardFooter><Button className="flex w-full sm:w-44 mx-auto p-6 my-1 items-center text-white bg-green-700" ><Link href="/events/regular">View Regular Events</Link></Button></CardFooter>
        </Card>
        <Card className={`w-[100%] md:max-w-screen h-auto p-1 md:p-10 my-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4`} >


          <Card className="flex flex-col w-full md:w-[300px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1689678777/VVGC%20Images/image_12.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Gallery </div>
              <Button className="flex p-1 my-1 items-center bg-orange-400"><Link href={"https://photos.google.com/share/AF1QipPnhJjX11JcdedpRJ97_AGnHygXzxq4Gd0YsdiwYThBuxLKsobJZ3ZtnIfpVUrFkA/photo/AF1QipNR2fkwsk0gbcML9Ie4Tum9r_yHNgmbF-gVAkSj?key=elhBbTRXUkdGWklPdkRGYk5Jcy1mV0JyeXU1eFpR"} target="_blank" className="flex flex-row gap-1 items-center justify-center pl-2 pr-2"><span className="px-2">See more Photos</span> <BiSolidNavigation/></Link> </Button>
            </div>
          </Card>

          <Card className="flex flex-col w-full md:w-[300px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914196/VVGC%20San%20Martin%20Temple%20Data/Gallery/68936063_2274984382569962_8933000778419798016_n_uqrzsf.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Sponsor other Events </div>
              <Button className="flex p-1 my-1 items-center bg-orange-400"><Link href={"https://paybee.io/quickpay.html?handle=vvgc#campaignList"} target="_blank" className="flex flex-row gap-1 items-center justify-center pl-2 pr-2"><span className="px-2">Know more</span> <FaExternalLinkAlt/></Link> </Button>
            </div>
          </Card>

          <Card className="flex flex-col w-full md:w-[300px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] "><Image className="absolute object-cover place-self-start" fill sizes="100dvw" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914197/VVGC%20San%20Martin%20Temple%20Data/Gallery/73283570_2376249725776760_7286846728483897344_n_taqhkw.jpg`} alt="/"></Image></div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">Our History </div>
              <Button className="flex p-1 my-1 items-center bg-orange-400"><Link href={"/about-us"}  className="flex flex-row gap-1 items-center justify-center pl-2 pr-2"><span className="px-2">Know more</span> <BiSolidNavigation/></Link> </Button>
            </div>
          </Card>

        </Card>

        <Card>
          <iframe
            className="w-full h-[200px] md:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101884.10724336727!2d-121.596685!3d37.060382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e04d2c0127e7%3A0xe48ebd982c2bd31b!2s11355%20Monterey%20Hwy%2C%20San%20Martin%2C%20CA%2095046!5e0!3m2!1sen!2sus!4v1694500881687!5m2!1sen!2sus"></iframe>
        </Card>
      </main>
    </React.Fragment>
  );
}
