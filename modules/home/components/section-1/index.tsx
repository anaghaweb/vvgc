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
    <Fragment>
     
      <div className="min-h-[300px]  grid grid-cols-1 lg:grid-cols-2">
        <div className="h-auto flex-1 p-2 lg:pl-2 md:pl-4 bg-orange-100 col-span-1">
          <div className="text-2xl md:text-3xl md:mt-2 font-semibold text-sky-950 font-cormorant">
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
      
    </Fragment>
  );
};

export default SectionOne;
