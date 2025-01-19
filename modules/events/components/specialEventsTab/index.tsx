import {CardHeader} from "@modules/common/components/ui/card";
import MainEventCard from "@modules/events/components/mainEventsCard";
import type { CalendarEvent } from "types/global";
// import { useState } from "react";
// import LoadMoreButton from "../loadMoreButton";

export default function SpecialEventTab({ data}:
  {data: CalendarEvent[],
   
  }) {
  
  // const total = data.length;
  // const [num, setNum] = useState(5);
  // const handleClick=()=>{
  // setNum(p=>p+5);
  // }
  
  return (   
      <div className="flex flex-col max-w-full lg:w-[900px] mx-auto h-auto  px-1 relative">
        <CardHeader className="font-serif text-[2rem] leading-7 px-1 py-2 md:text-4xl text-cyan-950 border-b-2 border-b-indigo-800 md:leading-10">
          Special Events
        </CardHeader>
        <hr />
        {/* {data.slice(0,num).map(data =>
          !!data.title ? (         
            <MainEventCard data={data} key={data.id}  />
          ) : (
            null
          )
        )       
        } */}
        {
          data.map(data=>(
            !!data.title ? <MainEventCard data={data} key={data.id}  /> : null
          ))
        }
          {/* <LoadMoreButton num={num} total={total} handleClick={handleClick}/> */}
      </div>
    
  );
}
