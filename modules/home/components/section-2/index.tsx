import { Fragment } from "react";
import MainEventCard from "@modules/events/components/mainEventsCard";
import type { CalendarEvent } from "types/global";
import LocalLinkWithBgColor from "@modules/common/components/LocalLinkWithBgColor";

const SectionTwo = ({ data }: {
  data: CalendarEvent[]
}) => {
  
  
  return (
    <Fragment>
      {
        data ?
          <div className="grid grid-col-1 md:p-4 gap-4 w-full max-w-[1440] mx-auto">
            {/* Special Event Card */}
            <div className="p-2 col-span-full ">
              <h1 className="text-xl lg:text-2xl font-serif text-cyan-950">
                Upcoming Special Events
              </h1>
              <hr className="h-[2px] bg-red-800 my-2" />
            </div>
            {data ? data?.map(event => {
              return (<MainEventCard data={event} key={event.id} />)
            })
           : 
           <h3 className=" my-2 text-center text-sm md:text-base ">
            Please contact temple for future planned events or visit
            <a href={`${process.env.BASE_URL}/events`} className="text-blue-700 font-semibold underline align-baseline">  events  </a>
            to view the complete events list.
          </h3>
          }
          </div>
          :
          <h3 className=" my-2 text-center text-sm md:text-base ">
            Please contact temple for future planned events or visit
            <a href={`${process.env.BASE_URL}/events`} className="text-blue-700 font-semibold underline align-baseline">  events  </a>
            to view the complete events list.
          </h3>
      }
      <div className="p-4 flex justify-center w-full">
        <LocalLinkWithBgColor text="View Regular Events List" href="/events?evtype=regular" />
      </div>
    </Fragment>
  );
};

export default SectionTwo;
