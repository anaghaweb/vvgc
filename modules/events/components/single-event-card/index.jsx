import React from "react";
import Image from "next/image";
import Link from "next/link";

export default  function SingleEvent({data}) { 
  return (
    <React.Fragment>
      {data && data.content.map((event, index) => {
         (
          <div
            key={index}
            className="my-[16px] w-[100%] grid grid-cols-1 lg:grid-cols-6 lg:gap-6 "
          >
            <div className="relative w-[100%] h-[200px] md:w-[100%] md:h-[600px] lg:col-span-4">
              <Link href={event.imageurl} target="_blank">
                <Image
                  src={`/events/special/maharudram2024.png`}
                  alt="Event"
                  fill
                  quality={100}
                  sizes={"100vw"}
                  className="absolute object-contain cursor-pointer"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-3 p-2 lg:col-span-2">
              <div className="text-xl ">Events Schedule</div>
              <hr/>
            <section key={index} className="grid grid-cols-10 gap-x-1 gap-y-3 my-5">
         {event.startTime && event.endTime && event.description ?
           <><div key={index + event.title} className="col-span-2 border-r-[1px] text-blue-900 text-[13px] md:text-base font-opensans flex items-center justify-center px-[4px]">{event.startTime}</div><div key={index + event.title} className="col-span-8 text-[13px] md:text-base ">{event.description}</div></>
           : event.startTime && !event.endTime ?
             <><div key={index + event.title} className="col-span-2 border-r-[1px] text-blue-900 text-[13px]
                 md:text-base font-sans flex items-center justify-center px-[4px]">{event.startTime}:</div><div key={index + event.title} className="col-span-8 text-[13px] md:text-base">{event.description}</div></>
             : event.startTime && event.endTime && !event.description ? ""
               : <div key={index + event.title} className="col-span-10 text-xl ">{event.description}<br/></div>
         }
         {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11].map((num, index) => (
           event[`time_${num}`] ? (
             <>
               <div key={index} className="col-span-2 border-r-[1px] text-[13px] md:text-base text-blue-900 flex items-center justify-center font-inter px-1">
                 {event[`time_${num}`]}:
               </div>
               <div className="col-span-8 px-1 text-[13px] md:text-base w-full">
                 {event[`event_${num}`]}
               </div>
             </>
           ) : (
             event[`event_${num}`] ? (
              <>
              <div key={num} className="col-span-2 border-r-[1px] text-[13px] md:text-base text-blue-900 flex items-center justify-center font-inter px-1">
                 {"-"}
               </div>
               <div key={index} className="col-span-8 font-inter text-[13px] md:text-base">
                 {event[`event_${num}`]}
               </div>
               </>
             ) : (
               ""
             )
           )
         ))}

                 {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus accusantium ipsum beatae atque, animi cum ipsam et distinctio nemo vitae sapiente vel libero eos velit eaque veniam recusandae debitis. */}
                
       </section>
              <div className="flex gap-3 p-2 text-xl"><h5>{event.link_keyword} -</h5>  <Link href={event.sponsorLink} target="_blank"><span className="text-sky-700">Click Here</span></Link></div>
              <div className="flex gap-3 p-2 text-xl"><h5>{event.link_keyword_1} -</h5>  <Link href={event.registerLink} target="_blank"><span className="text-sky-700">Click Here</span></Link></div>
         
                
             
            </div>
            <hr/>
          </div>
        )
      })}
    </React.Fragment>
  );
}
