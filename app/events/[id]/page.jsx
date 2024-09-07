import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import { FetchData } from "@lib/utils/fetchdata";
// import SingleEvent from "@modules/events/components/single-event-card";

export async function generateMetadata ({params, parent})
{
  const event = await FetchData()
  const event_title = event.content.find((e)=> e.id === params.id);
  return {
    title: {
      absolute: `${event_title.title}`,
      default: "VVGC Event",
      template: `%s | ${event_title.title}`,
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

const SingleEventPage = async ({params}) => 
{
    const event = await FetchData();
    const data = event.content.find((e)=> e.id === params.id)
    
  return (
    <Fragment>
        {/* <SingleEvent data={data} /> */}
        <div className="h-48 w-full">

          <Link href="/events" className="text-xl text-bold underline text-blue-800 m-auto">
            View All Events
          </Link>
        </div>
    </Fragment>
  )
}
export default SingleEventPage