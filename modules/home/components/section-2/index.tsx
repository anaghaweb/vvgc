import { Fragment } from "react";
import { Button } from "@modules/common/components/ui/button";
import Link from "next/link";
import MainEventCard from "@modules/events/components/mainEventsCard";
import type { CalendarEvent } from "types/global";

const SectionTwo = ({ data }:{
  data:CalendarEvent[]
}) => {
  return (
    <Fragment>
      <div className="grid grid-col-1 lg:grid-cols-2 p-4 gap-4 w-full">
        {/* Special Event Card */}
        <div className="p-2 col-span-full ">
          <h1 className="text-2xl lg:text-3xl font-cormorant text-blue-950 font-semibold">
            Upcoming Special Events
          </h1>
          <hr className="h-[2px] bg-red-800 my-2" />
        </div>

        {/* <div className="col-span-1 w-full"> */}
        {data.map((event) => {
          return event.type === "sponsor" ? (          
            <MainEventCard data={event} key={event.id} />             
          ) : null;
        })}

        {/* </div> */}
        <div className="my-2 col-span-full w-full mx-auto text-center">
          <Button className="w-full sm:w-44 mx-auto p-6 my-1 items-center text-white bg-green-700">
            <Link href="/events?evtype=regular">View Regular Events</Link>
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionTwo;
