import { Fragment } from "react";
import MainEventCard from "@modules/events/components/mainEventsCard";
import type { CalendarEvent } from "types/global";
import LocalLinkWithBgColor from "@modules/common/components/LocalLinkWithBgColor";

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

       
        {data.map((event) => {
          return event.type === "sponsor" ? (          
            <MainEventCard data={event} key={event.id} />             
          ) : null;
        })}
       
      </div>
      <div className="my-2 flex justify-center  w-full">
        <LocalLinkWithBgColor  text="View Regular Events List" href="/events?evtype=regular" />
        </div>
    </Fragment>
  );
};

export default SectionTwo;
