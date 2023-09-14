import React from "react";
import Image from "next/image";
import CalenderLinks from "@/Components/calendarlinks";
import Link from "next/link";
import { FaExternalLinkAlt } from 'react-icons/fa';


export default async function RenderEvent({data}) {
        
            
        
        return <div className="flex flex-col w-full h-auto md:shadow-md:shadow-indigo-500 px-1 relative">
        {data.content.map((data, index) => (
            <section key={index} className={`bg-white flex flex-col w-full sm:w-full md:w-[900px] m-auto h-auto my-2  md:p-2`}>

                <div className="p-3 w-full md:w-[235px] text-center text-base md:text-2xl bg-indigo-300 text-black" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}
                
                </div>
                
                            <div className="p-2 text-center text-lg md:text-start font-opensans text-red-700">{data.title}</div>

                            <hr className="h-[1.1px] bg-indigo-950 my-2 " />

                            {data.imageurl && <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]"><Link href={data.imageurl} target="_blank"><Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="absolute object-contain cursor-pointer" /></Link></div>}

                            {data.imageurl && <hr className="h-[1.1px] bg-indigo-950 my-2 " />}

                            <div className="grid grid-cols-6 gap-x-1 gap-y-3 my-5">
                                {data.startTime && data.endTime && data.description ?
                                    <><div className="col-span-1 border-r-[1px] text-red-600 align-middle text-[12px] md:text-base font-opensans flex items-center justify-end px-[4px]">{data.startTime}</div><div className="col-span-5 text-[12px] md:text-base ">{data.description}</div></>
                                    : data.startTime && !data.endTime ?
                                        <><div className="col-span-1 border-r-[1px] text-red-600 align-middle text-[12px]
                    md:text-base font-sans flex items-center justify-end px-[4px]">{data.startTime}:</div><div className="col-span-5 text-[12px] md:text-base">{data.description}</div></>
                                        : data.startTime && data.endTime && !data.description ? ""
                                            : <div className="col-span-6 text-[12px] md:text-base">{data.description}</div>
                                }
                                {data.time_1 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_1}:</div><div className="col-span-5 px-1 text-[12px] md:text-base w-full">{data.event_1}</div></>
                                    : data.event_1 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_1}</div>
                                        : ""}
                                {data.time_2 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_2}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_2}</div></>
                                    : data.event_2 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_2}</div>
                                        : ""}
                                {data.time_3 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_3}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_3}</div></>
                                    : data.event_3 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_3}</div>
                                        : ""}
                                {data.time_4 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_4}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_4}</div></>
                                    : data.event_4 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_4}</div>
                                        : ""}
                                {data.time_5 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_5}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_5}</div></>
                                    : data.event_5 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_5}</div>
                                        : ""}
                                {data.time_6 ? <><div className="col-span-1 border-r-[1px] text-[12px]
                    md:text-base text-red-600 flex items-center justify-end font-inter px-1">{data.time_6}:</div><div className="col-span-5 px-1 text-[12px]
                    md:text-base w-full">{data.event_6}</div></>
                                    : data.event_6 ? <div className="col-span-6 font-inter text-[12px] md:text-base">{data.event_6}</div>
                                        : ""}

                            </div>
                            {/* sponsor event Link */}
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
                        }} />
                       
                    </div></div>
                
                        </section>
                        
                    ))}
                </div>
              
                                
}

