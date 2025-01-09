import React, { Fragment } from "react";
import { getDayOfTheWeek } from "@lib/utils/formatDate";
import type {  WeeklyEvents } from "types/global";

const DailyEventSummaryCard = ({ events }: { events: WeeklyEvents[] }) => {
  const currentDay = getDayOfTheWeek();
  const data = events.find((event) => {    
    return event.day === currentDay} );
  
  return (
    <div className={`w-[100%] h-auto my-4 font-roboto p-1 md:max-w-3xl md:p-1 text-base`}>     
      <div className="flex flex-col gap-4">        
          {data?.events.map((event, index) => (
            <div className="grid grid-cols-6 gap-x-1 pl-6 md:pl-0" key={index}>
              <time
                className={`col-span-1 text-blue-950 flex items-start  
                        justify-end px-1 py-0 md:leading-6 }`}
              >
                {event.time}:
              </time>
              <div className="col-span-5 w-full text-start px-1 py-0 md:leading-6">
                {event.details}
              </div>
            </div>
          ))}
          {/* <hr /> */}
        
      </div>
    </div>
  );
};

export default DailyEventSummaryCard;
