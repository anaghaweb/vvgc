import Link from "next/link";
import SpecialEventTab from "../specialEventsTab";
import DailyEventTab from "../dailyEventTab";
import { Fragment } from 'react';
import clsx from "clsx";
import { Separator } from "@modules/common/components/ui/separator";
import type { CalendarEvent, EventTypes, WeeklyEvents } from "types/global";

export const EventTabs = async ({data, weeklyEventsData, searchParams}:{
  data:CalendarEvent[],
  searchParams: Promise<EventTypes>,
  weeklyEventsData: WeeklyEvents[]
}) =>{   
  const {evtype} = await searchParams || 'special';
  return (    
    <Fragment>
    <div className="flex justify-start items-center gap-2 border-b md:ml-4 md:pt-6 text-sm md:text-xl ">
     <Link href="/events/?evtype=special" shallow
     className={clsx("",{
      "border-b-2 font-semibold text-blue-900 border-blue-900": evtype === 'special'
     })}
     >Special Events</Link>
     <Separator orientation="vertical"  className="h-8 border-r-[0.1rem] border-red-500" />
     <Link href="/events/?evtype=regular" shallow
      className={clsx("",{
        "border-b-2 font-bold text-blue-900 border-blue-900": evtype === 'regular'
       })}
     >Regular Events</Link>
     <Separator orientation="vertical" className="h-8 border-r-[0.1rem] border-red-500"/>
    </div>
    <div>
        {evtype === 'special' && <SpecialEventTab data={data} />}
        {evtype === 'regular' && <DailyEventTab weeklyEventsData={weeklyEventsData} /> }
    </div>
    </Fragment>
  )
}
