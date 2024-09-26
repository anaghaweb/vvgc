import React from "react";
import ExternalLink from "@modules/common/components/ExternalLink";
import LazyImageLoader from "@modules/common/components/LazyImageLoader";

type EventListProps = {
    details?: string;
    startTime?: string;
    endTime?: string;
    imageUrl?: string;
    sponsorLink?: string;
    registerLink?: string;
};

const SubEventList = ({ event }:{event:EventListProps }
   ) => {
  return (

    <div className="grid grid-cols-10 mb-2 font-roboto">  
      {/* EVENT TIMINGS */}
      {event.details ?      
      <div className="col-span-full md:col-span-2 text-blue-950 font-bold md:text-center inline-block px-[4px] ">
        {( event.startTime) ? event.startTime : ""}
        { event.endTime ? ` to ${event.endTime} ` : ""}
      </div>      
      :
      event.startTime && <div className="col-span-full text-blue-950 font-bold px-[4px] content-center">
      Timings: {(event.startTime) ? event.startTime : ""}{ event.endTime ? ` to ${event.endTime}` : ""}
    </div> 
    }      
          {/* Event DETAILS */}
      <div className={`col-span-full gap-y-2 px-1 text-base w-full text-pretty content-center 
        ${event.startTime ? "md:col-span-8" : "md:col-span-full" }`}>
        {event.details ? event.details : ""}
       </div>
       {/* Event DETAILS */}

       {/* PAYBEE LINKS TO SPONSOR & REGISTER */}
       <div className={`col-span-full flex flex-col md:flex-row gap-2 justify-center`}>
        { event.sponsorLink && (
          <ExternalLink 
          href={event.sponsorLink} 
          text="sponsor link" 
          />
        )}
        { event.registerLink && (
          <ExternalLink
            href={event.registerLink}
            text="register link"
          />
        )}
      </div>

      {/* EVENT IMAGE LOADED FROM CLOUDINARY */}
      <div className={`col-span-full justify-items-center`}>
        { event.imageUrl && <LazyImageLoader imageUrl={event.imageUrl} maxHeight="300px"/>}
      </div>      
    </div>
  );
};

export default SubEventList;
