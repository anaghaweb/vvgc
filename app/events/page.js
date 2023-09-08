import React from "react";
import Image from "next/image";
import FetchData from "@/Components/fetchdata";
import CalenderLinks from "@/Components/calendarlinks";

export const metadata = {
    title: 'Events',
    description: 'VVGC- Temple',
}

export default async function Event() {
    const url = "https://script.google.com/macros/s/AKfycbwi1DRMxZlv8XkSIm0K_8nKMPukufofUvxF-wXYmiB9_E5uMhTF8-CyBNnzEFSoDHNy2g/exec";

    const data = await FetchData({ url });

    return (

        <>
            <React.Fragment>
                <section className={`h-[50dvh] md:h-[70vh] w-full bg-hero-event bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                    <div className="w-[280px] h-auto text-center"><h1>VVGC San Martin Events</h1></div>
                </section>
            </React.Fragment>
            {
                <div className="flex flex-col w-full h-auto shadow-md px-2 relative">
                    {data.content.map((data, index) => (
                        <section key={index} className="bg-white flex flex-col w-full sm:w-full md:w-[800px] m-auto h-auto my-2 md:border-[1px] md:border-black md:p-10 ">

                            <div className="p-3 w-full md:w-[235px] text-center text-base md:text-2xl bg-indigo-950 text-white" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}</div>

                            <div className="p-2 text-center text-lg md:text-start font-serif text-red-700">{data.title}</div>

                            <hr className="h-[1.1px] bg-indigo-950 my-2 " />

                            <div className="relative w-[100%] h-[200px] md:w-[100%] md:h-[500px] object-contain self-center">
                                {<Image className="object-contain relative" src={data.imageurl} alt="Event" fill
                                    quality={75} sizes={'100dvw'} />}</div>
                            <hr className="h-[1px] bg-indigo-950 my-2 " />
                            <div className="grid grid-col-6 md:grid-col-9 grid-flow-col">
                                {data.startTime && data.endTime ? <><div className="col-span-1 px-1  text-red-700 text-[12px] md:text-base ">{data.startTime}-{data.endTime}:</div>
                                    <div className="col-span- text-sm md:w-[100%] md:text-base">{data.description}</div></>
                                    : data.startTime && !data.endTime ? <><div className="col-span-1 md:col-span-1 px-1  text-red-700 text-[12px]  md:text-base">{data.startTime}:</div>
                                        <div className="col-span-8 text-sm  md:w-[100%] md:text-base">{data.description}</div></>
                                        : data.startTime && <div>{data.description}</div>
                                }
                            </div>
                            <div className="grid grid-flow-row grid-col-8">
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_1 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_1}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_1}</div></>
                                    : <div>{data.event_1}</div>}</div>
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_2 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_2}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_2}</div></>
                                    : <div>{data.event_2}</div>}</div>
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_3 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_3}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_3}</div></>
                                    : <div>{data.event_3}</div>}</div>
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_4 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_4}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_4}</div></>
                                    : <div>{data.event_4}</div>}</div>
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_5 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_5}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_5}</div></>
                                    : <div>{data.event_5}</div>}</div>
                                <div className="grid grid-col-6 md:grid-col-9 grid-flow-col my-2">{data.time_6 ? <><div className="col-span-1 items-start text-[12px] md:text-base text-red-700 ">{data.time_6}:</div><div className="col-span-8 items-start text-sm  md:text-base">{data.event_6}</div></>
                                    : <div>{data.event_6}</div>}</div>
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
                    ))}
                </div>
            }
        </>
    );
}
