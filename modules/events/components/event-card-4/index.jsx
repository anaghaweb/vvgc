import {
  Card,
  CardContent,
  CardHeader,
} from "@modules/common/components/ui/card";
import React from "react";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";

const DailyEventCard = ({ events }) => {
  
  const currentDay = dayOfTheWeek();
  const data = events.find((event) => event.day === currentDay);

  if (!data) {
    return (
      <>
        <div>No events for today</div>;
      </>
    );
  }

  return (
    <Card className={`w-[100%] h-auto md:h-full p-1 md:p-1`}>
      <div className="text-blue-600 ">
        <CardHeader className="text-2xl md:text-4xl font-cormorant">
          Today at the Temple:
        </CardHeader>
      </div>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-6 gap-x-1 gap-y-3 my-5 pl-6">
          <div
            className="text-start col-span-full text-2xl font-medium leading-7 
                        text-blue-950 p-2}"
          >
            {data.day}
          </div>

          <div
            className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
          >
            {data.time}:
          </div>
          <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
            {data.event}
          </div>

          <div
            className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
          >
            {data.time1}:
          </div>
          <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
            {data.event1}
          </div>

          {data.time2 && (
            <>
              <div
                className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
              >
                {data.time2}:
              </div>
              <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
                {data.event2}
              </div>
            </>
          )}

          {data.time3 && (
            <>
              <div
                className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
              >
                {data.time3}:
              </div>
              <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
                {data.event3}
              </div>
            </>
          )}

          {data.time4 && (
            <>
              <div
                className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
              >
                {data.time4}:
              </div>
              <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
                {data.event4}
              </div>
            </>
          )}

          {data.time5 && (
            <>
              <div
                className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}
              >
                {data.time5}:
              </div>
              <div className="col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6">
                {data.event5}
              </div>
            </>
          )}
          <hr />
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyEventCard;
