'use client'
import {CardHeader} from "@modules/common/components/ui/card";
import MainEventCard from "@modules/events/components/mainEventsCard";
import type { CalendarEvent, EventTypes } from "types/global";
import { useState } from "react";
import LoadMoreButton from "../loadMoreButton";

export default function SpecialEventTab({ data, searchParams }:
  {data: CalendarEvent[],
    searchParams:EventTypes,
  }) {
  const count = searchParams.numberofevents ? parseInt(searchParams.numberofevents, 10) : 5;
  const total = data.length;
  const [num, setNum] = useState(count);
  const handleClick=()=>{
  setNum(p=>p+5);
  }
  
  return (
   
      <div className="flex flex-col max-w-full lg:w-[900px] mx-auto h-auto  px-1 relative">
        <CardHeader className=" text-[2rem] leading-7 px-1 py-2 md:text-4xl text-orange-600 border-b-2 border-b-indigo-800 md:leading-10 md:font-semibold">
          Special Events
        </CardHeader>
        <hr />
        {data.slice(0,num).map(data =>
          !!data.title ? (         
            <MainEventCard data={data} key={data.id} count={count}  />
          ) : (
            null
          )
        )}
          <LoadMoreButton num={num} total={total} searchParams={searchParams} handleClick={handleClick}/>
      </div>
    
  );
}
