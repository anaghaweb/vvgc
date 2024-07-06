import Link from "next/link";
import RenderEvent from "../event-card-1"
import Regular from "../event-card-2"
import React, {Fragment} from 'react';
import clsx from "clsx";
import { Separator } from "@modules/common/components/ui/separator";

export const EventTabs = ({data, regularEventData, searchParams}) =>{   
  const eventType = searchParams.evtype || 'special';
  return (    
    <Fragment>
    <div className="flex justify-start items-center gap-2 border-b-[1px] md:ml-4 md:pt-6 text-sm md:text-xl ">
     <Link href="/events/?evtype=special" shallow
     className={clsx("",{
      "border-b-2 font-semibold text-blue-900 border-blue-900": eventType === 'special'
     })}
     >Special Events</Link>
     <Separator orientation="vertical"  className="h-8 border-r-[0.1rem] border-red-500" />
     <Link href="/events/?evtype=regular" shallow
      className={clsx("",{
        "border-b-2 font-bold text-blue-900 border-blue-900": eventType === 'regular'
       })}
     >Regular Events</Link>
     <Separator orientation="vertical" className="h-8 border-r-[0.1rem] border-red-500"/>
    </div>
    <div>
        {eventType === 'special' && <RenderEvent data={data}/>}
        {eventType === 'regular' && <Regular regularEventData={regularEventData} /> }
    </div>
    </Fragment>
  )
}
