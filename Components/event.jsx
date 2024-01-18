import React from "react";
import Image from "next/image";
import CalenderLinks from "@/components/calendarlinks";
import Link from "next/link";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button"
import { Card,  CardContent,
  div,
  CardFooter,
  CardHeader,
  CardTitle, } from "./ui/card";


export default async function RenderEvent({ data }) {


  return (
    <div className="flex flex-col  max-w-full lg:w-[900px] mx-auto h-auto  px-1 relative">
       <h1 className="py-2 px-1 font-opensans text-4xl text-blue-900  max-w-full lg:w-[900px] ">Event Details</h1>
       <hr/>
      {data.content.map((data, index) => (
        <Card key={index} className={`bg-gray-100 flex flex-col w-full sm:w-full m-auto h-auto my-2  md:p-2 shadow`}>
          
          <CardHeader className=" w-full md:w-[235px] text-2xl md:text-2xl  text-slate-800" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}

          </CardHeader>

          <CardTitle className=" pl-7 text-base md:text-2xl text-red-600">{data.title}</CardTitle>

          <hr className=" my-2 " />

          {data.imageurl && <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]"><Link href={data.imageurl} target="_blank"><Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="absolute object-contain cursor-pointer" /></Link></div>}

          {data.imageurl && <hr className=" my-2 " />}

          <CardContent key={index} className="grid grid-cols-8 gap-x-1 gap-y-3 my-5">
            {data.startTime && data.endTime && data.description ?
              <><div className="col-span-2 border-r-[1px] text-red-600 align-middle text-[14px] md:text-base font-opensans flex items-center justify-end px-[4px]">{data.startTime}</div><div className="col-span-6 text-[14px] md:text-base ">{data.description}</div></>
              : data.startTime && !data.endTime ?
                <><div className="col-span-2 border-r-[1px] text-red-600 align-middle text-[14px]
                    md:text-base font-sans flex items-center justify-end px-[4px]">{data.startTime}:</div><div className="col-span-6 text-[14px] md:text-base">{data.description}</div></>
                : data.startTime && data.endTime && !data.description ? ""
                  : <div className="col-span-6 text-[14px] md:text-base">{data.description}</div>
            }
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              data[`time_${num}`] ? (
                <>
                  <div key={num} className="col-span-2 border-r-[1px] text-[14px] md:text-base text-red-600 flex items-center justify-end font-inter px-1">
                    {data[`time_${num}`]}:
                  </div>
                  <div className="col-span-6 px-1 text-[14px] md:text-base w-full">
                    {data[`event_${num}`]}
                  </div>
                </>
              ) : (
                data[`event_${num}`] ? (
                  <div key={index} className="col-span-6 font-inter text-[14px] md:text-base">
                    {data[`event_${num}`]}
                  </div>
                ) : (
                  ""
                )
              )
            ))}



          </CardContent>
          {/* sponsor event Link */}
          <CardFooter className="p-2 rounded w-full md:max-w-fit border-slate-400 border-solid shadow-inner bg-gray-100 " >
          {data.sponsorLink &&
          
            <Link className="flex  sm:max-w-fit items-center " href={data.sponsorLink} target="_blank"><h1 className=" text-base md:text-xl text-indigo-950 px-2">Sponsor this event</h1> <FaExternalLinkAlt style={{ color: 'indigo' }} /></Link>}
          <div className="flex md:flex-row  p-2">
            <span className="justify-center md:text-xl md:text-left text-blue-950 pr-2">Add to Calendar: </span>
            <div className="grid grid-cols-3 items-center gap-x-3">
              <CalenderLinks eventdata={{
                startdate: data.date,
                enddate: data.date,
                startTime: data.startTime,
                endTime: data.endTime,
                summary: data.title === "" ? `Events on ${data.date}` : data.title,
                description: data.description
              }} />

            </div>
            
          </div>
          </CardFooter>
        </Card>

      ))}
    </div>

  )
}

