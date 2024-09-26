import React, { Fragment } from "react";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import type {  WeeklyEvents } from "types/global";

const DailyEventSummaryCard = ({ events }: { events: WeeklyEvents[] }) => {
  const currentDay = dayOfTheWeek();
  const data = events.find((event) => event.day === currentDay);
  return (
    <div
      className={`w-[100%] font-roboto h-auto md:h-full p-1 md:max-w-3xl md:p-1 text-sm `}
    >
      <div className="text-blue-600 "></div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-6 gap-x-1 gap-y-3 my-5 pl-6 md:pl-0">
          {data?.events.map((event, index) => (
            <Fragment key={index}>
              <div
                className={`col-span-1 text-blue-950 flex items-center 
                        justify-end px-1 py-0 md:leading-6 }`}
              >
                {event.time}:
              </div>
              <div className="col-span-5  w-full text-start px-1 py-0  md:leading-6">
                {event.details}
              </div>
            </Fragment>
          ))}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default DailyEventSummaryCard;
