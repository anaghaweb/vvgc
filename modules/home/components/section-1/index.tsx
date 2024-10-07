import React, { Fragment } from "react";
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import Divider from "@modules/common/components/divider";
import MahaPrasadamSanMartin from "./maha-prasadam";
import { CalendarEvent } from "types/global";


const SectionOne = ({ eventdata }:{
  eventdata:CalendarEvent[]
}) => {
  const data = eventdata.find(
    (event) => new Date(event.date).getDate() === new Date().getDate()
  );
  const currentDay = dayOfTheWeek();
  return (
    <div className="ring-[1px] ring-sky-500 rounded-sm p-6">
     
      <div className="min-h-[300px]  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-auto flex-1 lg:pl-2 md:pl-4  col-span-1 ">
          <div className="  text-2xl md:text-3xl md:mt-2  text-sky-700 font-roboto">
            Today at the Temple, {currentDay}
          </div>
          <Divider />
          {
          data?.title ? 
          <SpecialEventSummaryCard eventdata={data} /> 
          :          
          <DailyEventSummaryCard events={weeklyEventsDataList} />
          }
        </div>
        <MahaPrasadamSanMartin />       
      </div>
      
    </div>
  );
};

export default SectionOne;
