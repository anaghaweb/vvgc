import React from "react";
import { FetchData } from "@lib/utils/fetchdata";
import { weeklyEventsList } from "@lib/data/regularEventData";
import EventsPageView from "@modules/events/pages";
import { notFound } from "next/navigation";

// export const metadata = {
//   title: "Events",
//   description: "Temple performs all types of events",
// };

export async function generateMetadata({ searchParams }) {
  try {
   
     return {
      title: `${searchParams.evtype + " " + 'events' ?? 'Events'} | VVGC`,
      description:'vvgc events',
     
    }
  } catch (error) {
    console.log(error)
     notFound();
  }
}

export default async function Event({searchParams}) {
  const data = await FetchData();
  const dailyEventData = weeklyEventsList;

  return (
    <>
      <main className="mx-auto py-4 bg-neutral-100">
        <EventsPageView data={data} dailyEventData={dailyEventData} searchParams={searchParams}/>
      </main>
    </>
  );
}
