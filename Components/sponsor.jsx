import React from "react";
import Image from "next/image";
import CalenderLinks from "@/components/calendarlinks";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {FaExternalLinkAlt} from 'react-icons/fa'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', fallback: 'serif' });

export default function SponsorEvent({ data, index }) {
        
    
        
    return (
        
        <section key={index} className={`bg-gray-50 w-full md:w-[600px] 
            ${playfair.variable} h-auto my-2 md:shadow-lg md:rounded md:p-2 mx-auto`}>

            <div className="p-3 w-full md:w-[235px] text-center text-base md:text-2xl bg-indigo-950 text-white" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}</div>

            <div className="p-2 text-center text-base md:text-xl md:text-start font-semibold font-cormorant text-red-950">{data.title}</div>

            <hr className=" my-2 " />

            {data.imageurl && <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]"><Link href={data.imageurl} target="_blank"><Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="absolute object-contain cursor-pointer" /></Link></div>}

            {data.imageurl && <hr className="h-[1.1px] bg-indigo-950 my-2 " />}
                
            {data.sponsorLink && 
            <Link className="flex w-full items-center bg-green-50" href={data.sponsorLink} target="_blank"><h1 className=" text-base md:text-xl text-indigo-950 px-2">Sponsor this event</h1> <FaExternalLinkAlt style={{ color: 'indigo' }} /></Link> }             

                <div className="flex md:flex-row w-full p-2 bg-green-50">
                    <span className="justify-center md:text-xl md:text-left text-blue-950 pr-2">Add to Calendar: </span>
                    <div className="grid grid-cols-3 items-center gap-x-3">
                        <CalenderLinks eventdata={{
                            startdate: data.date,
                            enddate: data.date,
                            startTime: data.startTime,
                            endTime: data.endTime,
                            summary: data.title,
                            description: data.description
                        }} /></div></div>


            </section>
        
    );
              
                    
                    
                    
}