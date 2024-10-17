import React from "react";

import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import EventsPageView from "@modules/events/pages";
import { notFound } from "next/navigation";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import { CalendarEvent, type EventTypes } from "types/global";

// export const metadata = {
//   title: "Events",
//   description: "Temple performs all types of events",
// };

export async function generateMetadata({ searchParams }: { searchParams: EventTypes }) {
  try {
    return {
      title: `${searchParams.evtype} ${(searchParams.evtype === 'regular' || searchParams.evtype === 'special' || searchParams.evtype === 'weekly') ? 'Events' : ''} | VVGC`,
      description: 'vvgc events',
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
