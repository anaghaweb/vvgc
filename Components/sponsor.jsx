import React from "react";
import Image from "next/image";
import CalenderLinks from "@/Components/calendarlinks";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', fallback: 'serif' });

export default function SponsorEvent({data,index, width}) {
        
    
        
    return (
        
        <section key={index} className={`bg-white w-full md:w-[600px] 
            ${playfair.variable} h-auto my-2 md:shadow-lg md:rounded md:p-2 mx-auto`}>

                <div className="p-3 w-full md:w-[235px] text-center text-base md:text-2xl bg-indigo-950 text-white" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}</div>

                <div className="p-2 text-center text-lg md:text-start font-playfair text-red-700">{data.title}</div>

                <hr className="h-[1.1px] bg-indigo-950 my-2 " />

                {data.imageurl && <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]"><Link href={data.imageurl} target="_blank"><Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="absolute object-contain cursor-pointer" /></Link></div>}

                {data.imageurl && <hr className="h-[1.1px] bg-indigo-950 my-2 " />}

                <div className="grid grid-cols-6 gap-x-1 gap-y-3 my-5">
                    {data.startTime && data.endTime && data.description ?
                        <><div className="col-span-1 border-r-[1px] text-red-600 align-middle text-[12px] md:text-sm font-opensans flex items-center justify-end px-[4px]">{data.startTime}</div><div className="col-span-5 text-[12px] md:text-sm ">{data.description}</div></>
                        : data.startTime && !data.endTime ?
                            <><div className="col-span-1 border-r-[1px] text-red-600 align-middle text-[12px]
                    md:text-sm font-sans flex items-center justify-end px-[4px]">{data.startTime}:</div><div className="col-span-5 text-[12px] md:text-sm">{data.description}</div></>
                            : data.startTime && data.endTime && !data.description ? ""
                                : <div className="col-span-6 text-[12px] md:text-sm">{data.description}</div>
                    }
                    {data.time_1 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_1}:</div><div className="col-span-5 px-1 text-[12px] text-sm w-full">{data.event_1}</div></>
                        : data.event_1 ? <div className="col-span-6 font-inter">{data.event_1}</div>
                            : ""}
                    {data.time_2 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_2}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_2}</div></>
                        : data.event_2 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_2}</div>
                            : ""}
                    {data.time_3 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_3}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_3}</div></>
                        : data.event_3 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_3}</div>
                            : ""}
                    {data.time_4 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_4}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_4}</div></>
                        : data.event_4 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_4}</div>
                            : ""}
                    {data.time_5 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_5}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_5}</div></>
                        : data.event_5 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_5}</div>
                            : ""}
                    {data.time_6 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-sm text-red-600 flex items-center justify-end font-inter px-1">{data.time_6}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_6}</div></>
                        : data.event_6 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_6}</div>
                            : ""}

                </div>

                <div className="flex flex-col md:flex-row w-full p-2 bg-green-400">
                    <span className="justify-center md:text-left text-blue-950">Add to Calendar: </span>
                    <div className="flex justify-around flex-grow">
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