import React,{Fragment} from 'react'
import type { Campaign } from 'types/global';
import RenderEvent from '@modules/events/components/event-card-1';
import Regular from '@modules/events/components/event-card-2';
import { FetchData } from '@lib/utils/fetchdata';
import localJsonData from '@lib/utils/staticData';
import Link from 'next/link';
import { Separator } from '@modules/common/components/ui/separator';
import clsx from 'clsx';

const TestPage =async ({camid, campaign, searchParams}:{
  camid?:string;
  campaign?:Campaign[]
  searchParams:{
    evtype: "regular" | "special" | "weekly" | 'festival'
  }
}) => {
  const eventType = searchParams.evtype || 'special';
  const data = await FetchData();
  const regularEventData = await localJsonData();
  return (
    <Fragment>
    <div className="flex justify-start items-center gap-2 border-b-[1px]">
     <Link href="/test/?evtype=special"
     className={clsx("",{
      "border-b-2 font-bold text-blue-900 border-blue-900": eventType === 'special'
     })}
     >Special Events</Link>
     <Separator orientation="vertical" className="border-b-2 h-2"/>
     <Link href="/test/?evtype=regular"
      className={clsx("",{
        "border-b-2 font-bold text-blue-900 border-blue-900": eventType === 'regular'
       })}
     >Regular Events</Link>
     <Separator orientation="vertical" />
    </div>
    <div>
        {eventType === 'special' && <RenderEvent data={data}/>}
        {eventType === 'regular' && <Regular regularEventData={regularEventData} /> }
    </div>
    </Fragment>
  )
}

export default TestPage