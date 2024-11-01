import React from "react";
import { Metadata } from "next"
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import EventsPageView from "@modules/events/pages";
import { notFound } from "next/navigation";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import { CalendarEvent, type EventTypes } from "types/global";



export async function generateMetadata({ searchParams }: { searchParams: EventTypes }):Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/inner.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/inner.jpg`;
  try {
    return {
      title: `${searchParams.evtype} ${(searchParams.evtype === 'regular' || searchParams.evtype === 'special' || searchParams.evtype === 'weekly') ? 'Events' : ''} | VVGC`,
      description: 'vvgc events',
      metadataBase: new URL(`${process.env.BASE_URL}/events`),
      openGraph: {
        title: "Events",
        description: "Help us Grow",
        images: [{
          url: opengraphURL,
          width: 1200,
          height: 630,
          alt: `About Us Image`,
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: "Events",
        description: "Help us Grow",
        images: [twitterURL],
      }
    }
  } catch (error) {
    console.log(error)
    notFound();
  }
}

export default async function Event({ searchParams }:
  {
    searchParams: EventTypes
  }
) {

  const templateEventData: CalendarEvent[] = await AllEventsData();

  return (
    <>
      <main className="mx-auto py-4 bg-neutral-100">
        <EventsPageView data={templateEventData} weeklyEventsData={weeklyEventsDataList} searchParams={searchParams} />
      </main>
    </>
  );
}
