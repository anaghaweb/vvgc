import React, {Fragment} from "react";
import { AllEventsData } from "@lib/server-actions/mainEvents";
import type { CalendarEvent } from "types/global";
import MainEventCard from "@modules/events/components/mainEventsCard";

export async function generateStaticParams(){
  const events = await AllEventsData();
  return events.map((event)=>({
    id:event.id
  }))
}

export async function generateMetadata ({params}:{
  params:{
    id:string
  }
})
{
  const {id} = params;
  const events = await AllEventsData();
  const EVENT = events.find((e:CalendarEvent)=> e.id === id);
  const localImage = `${process.env.BASE_URL}/images/og/inner.jpg`;
  const cl = EVENT?.eventList.map((e)=> e.imageUrl);
  const cloudImage = cl && `${cl[0]}`;
  const image = cloudImage ? cloudImage : localImage;
  return {
    title: {
      absolute: `${EVENT?.title}`,
      default: "VVGC Event",
      template: `%s | ${EVENT?.title}`,
    },
    description: `${EVENT?.subtitle || EVENT?.title}`,
    metadataBase:new URL(`${process.env.BASE_URL}/events/${id}`),
    
    openGraph:{ 
        title:`${EVENT?.title}`,
        description:`${EVENT?.title}`,
        // url:ogImageURL,
        images:[ {url:image, width:1200, height:630, alt:'events opengraph image'}],
        type:"website",            
    },
    twitter:{
        card:"summary_large_image",
        title:`${EVENT?.title}`,
        description:`${EVENT?.title}`,
        images:image,
    }  
  } 
}

const SingleEventPage = async ({params}:{
  params:{
    id:string
  }
}) => 
{
    const {id} = params;
    const event = await AllEventsData();
    const data = event.find((e:CalendarEvent)=> e.id === id)
    
  return (
    <Fragment>
        {/* <SingleEvent data={data} /> */}
        
          <div className="w-full h-full grid grid-cols-1 py-6 justify-items-center">
           {data && <MainEventCard data={data}/>}
          </div>
      
    </Fragment>
  )
}
export default SingleEventPage