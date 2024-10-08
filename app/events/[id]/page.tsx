import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import type { CalendarEvent } from "types/global";
import MainEventCard from "@modules/events/components/mainEventsCard";
// import SingleEvent from "@modules/events/components/single-event-card";

export async function generateMetadata ({params}:{
  params:{
    id:string
  }
})
{
  const event = await AllEventsData();
  const event_title = event.find((e:CalendarEvent)=> e.id === params.id);
  return {
    title: {
      absolute: `${event_title?.title}`,
      default: "VVGC Event",
      template: `%s | ${event_title?.title}`,
    },
    description: "some random description",
    authors: [
      {
        name: "BSK",
        url: "vvgc.org",
      },
    ],
    keywords: ["temple", "temple events", "ganesha", "spiritual"],
  } 
}

const SingleEventPage = async ({params}:{
  params:{
    id:string
  }
}) => 
{
    const event = await AllEventsData();
    const data = event.find((e:CalendarEvent)=> e.id === params.id)
    
  return (
    <Fragment>
        {/* <SingleEvent data={data} /> */}
        
          <div className="w-full h-full grid grid-cols-1 py-6 justify-items-center">
           {data && <MainEventCard data={data}/>}
          </div>
      
    </Fragment>
  )
}
export default SingleEventPage