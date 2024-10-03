import { Fragment } from "react";
import type { Campaign, CalendarEvent } from "types/global";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import MainEventCard from "../components/eventCard";

const TestPage = async ({
  camid,
  campaign,
  searchParams,
}: {
  camid?: string;
  campaign?: Campaign[];
  searchParams: {
    evtype: "regular" | "special" | "weekly" | "festival";
  };
}) => {
  const eventType = searchParams.evtype || "special";
  const templateEventData: CalendarEvent[] = await AllEventsData();
  const dateToday = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  const yesterday = templateEventData.findIndex(
    (e) => {       
      return e.date.toLocaleString("en-US", {timeZone:"America/Los_Angeles"} ) === dateToday
    }
  );
  
  return (
    <Fragment>
      <div className="flex flex-col gap-2">
        {templateEventData &&
          templateEventData?.slice(0,5).map((event) => {
            return <MainEventCard data={event} key={event.id} />;
          })}
      </div>
    </Fragment>
  );
};

export default TestPage;
