import React, {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";
import { FetchData } from "@lib/utils/fetchdata";
import SingleEvent from "@modules/events/components/single-event-card";

export async function generateMetadata ({params, parent})
{
  const event = await FetchData()
  const event_title = event.find((e)=> e.id === params.id);
  return {
    title: {
      absolute: `${event_title}`,
      default: "VVGC Event",
      template: `%s | ${event_title}`,
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
    const data = event.find((e)=> e.id === params.slug)
  return (
    <Fragment>
        <SingleEvent data={data} />
    </Fragment>
  )
}
export default SingleEventPage