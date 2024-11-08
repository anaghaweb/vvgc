import React, { Fragment } from "react";
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import Divider from "@modules/common/components/divider";
import MahaPrasadamSanMartin from "./maha-prasadam";
import { CalendarEvent } from "types/global";
import { Card } from "@modules/common/components/ui/card";


import Image from "next/image";
import Link from "next/link";


const SectionOne = ({ eventdata }:{
  eventdata:CalendarEvent[]
}) => {
  const data = eventdata.find(
    (event) => new Date(event.date).getDate() === new Date().getDate()
  );
  const currentDay = dayOfTheWeek();
  return (
    <div className=" rounded-sm p-2">     
      <div className="min-h-[300px]  grid grid-cols-1 lg:grid-cols-2 ">
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
          <p className="  text-2xl md:text-3xl text-sky-700 font-roboto">
            Today at the Temple, {currentDay}
          </p>
          <Divider />
          {
          data?.title ? 
          <SpecialEventSummaryCard eventdata={data} /> 
          :          
          <DailyEventSummaryCard events={weeklyEventsDataList} />
          }
          
          <Link className="" href={`/images/home/services/kartikaChandramana.jpg`} target="_blank">
          <div className="relative w-full h-[300px] md:h-[400px] ">
          <Image src="/images/home/services/kartikaChandramana.jpg"
          alt="event" 
             sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
          className="object-contain cursor-pointer mx-auto sm:w-full"
          fill
          />
          </div>
          </Link>
        </Card>
        <MahaPrasadamSanMartin />       
      </div>
      
    </div>
  );
};

export default SectionOne;
