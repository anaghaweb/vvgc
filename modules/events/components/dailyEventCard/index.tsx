import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@modules/common/components/ui/card";
import type { WeeklyEvents } from "types/global";

const DailyEventCard = ({ data }: { data: WeeklyEvents }) => {
  return (
    <Card className="p-2 border-[1px] border-purple-200">
      <CardHeader className=" text-[2rem] text-red-700 border-b-[1px] border-b-indigo-800 leading-7 px-1 py-2 md:text-4xl md:leading-10 md:font-semibold">
      {data.day}
      </CardHeader>
      <CardContent >
      
        {data.events.map((data, index) => (
          <div key={index} className="grid grid-cols-8 md:grid-cols-6 my-5 bg-gray-200 py-4">
            <div
              className={`w-full col-span-2 md:col-span-1 text-right text-sm  text-blue-950 px-1 py-0 border-r md:text-xl md:leading-6 }`}
            >
              {data.time}:
            </div>
            <div className="col-span-6 md:col-span-5 text-sm px-1 py-0 md:text-xl md:leading-6">
              {data.details}
            </div>
            <hr />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DailyEventCard;
