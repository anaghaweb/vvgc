import React,{Fragment} from 'react'
import type { Campaign } from 'types/global';
import RenderEvent from '@modules/events/components/event-card-1';
import Regular from '@modules/events/components/event-card-2';
import { FetchData } from '@lib/utils/fetchdata';
import localJsonData from '@lib/utils/staticData';
import Link from 'next/link';
import { Separator } from '@modules/common/components/ui/separator';
import clsx from 'clsx';
import { getTemplateEventData } from '@lib/server-actions/templateData';

const TestPage =async ({camid, campaign, searchParams}:{
  camid?:string;
  campaign?:Campaign[]
  searchParams:{
    evtype: "regular" | "special" | "weekly" | 'festival'
  }
}) => {
  const eventType = searchParams.evtype || 'special';
  // const data = await FetchData();
  // const regularEventData = await localJsonData();
  const templateEventData = await getTemplateEventData();
  return (
    <Fragment>
    <div className="flex flex-col justify-start items-center gap-2">
      {
       templateEventData && templateEventData?.map((event, index)=>{
          return (
           event.id && <div className='flex flex-col items-center gap-2' key={event.id}>
                <div>{event.title }</div>
                <div>{event.description}</div>
                <div>{event.id}</div>
                <div>{new Date(event.date).toDateString()}</div>
                {
                 event.event && event.event?.map((item, index)=>(
                   item.name ? <li key={index} className='list-style-none'>name: {item.name} </li> : ""
                  ))
                }
            </div>
          )
        })
      }
    </div>
    </Fragment>
  )
}

export default TestPage