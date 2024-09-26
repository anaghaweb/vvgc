import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import { getTemplateEventData } from "@lib/server-actions/mainEvents";
import type { SpecialEvent } from "types/global";
// import SingleEvent from "@modules/events/components/single-event-card";

export async function generateMetadata ({params}:{
  params:{
    id:string
  }
})
{
  const event = await getTemplateEventData()
  const event_title = event.find((e:SpecialEvent)=> e.id === params.id);
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
    const event = await getTemplateEventData();
    const data = event.find((e:SpecialEvent)=> e.id === params.id)
    
  return (
    <Fragment>
        {/* <SingleEvent data={data} /> */}
        <div className="h-48 w-full">
          <div className="w-96 h-[200px] shadow-lg bg-stone-900 bg-gradient-to-bl text-center content-center">
            <h1 className="text-blue-500 text-2xl font-bold font-cormorant">
              {data?.title}
            </h1>
          </div>
        </div>
    </Fragment>
  )
}
export default SingleEventPage