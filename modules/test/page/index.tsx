import { Fragment } from "react";
import type { Campaign } from "types/global";
import PageView from "./pageview";


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
  
  // const eventType = searchParams.evtype || "special";
  // const templateEventData: CalendarEvent[] = await AllEventsData();
  // const dateToday = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  // const yesterday = templateEventData.findIndex(
  //   (e) => {
  //     return e.date.toLocaleString("en-US", {timeZone:"America/Los_Angeles"} ) === dateToday
  //   }
  // );
  
  return (
    <Fragment>
     <PageView />
    </Fragment>
  );
};

export default TestPage;
