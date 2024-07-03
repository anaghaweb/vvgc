import React, { cache } from "react";
import Image from "next/image";
import CalenderLinks from "@lib/utils/calendarlinks";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@modules/common/components/ui/card";

import clsx from 'clsx';
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import Divider from "@modules/common/components/divider-2/divider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  fallback: "serif",
});

export default function EventSummaryCard({ eventdata }) {
    
    const data = eventdata;
    const currentDay = dayOfTheWeek();
    return (
       <div        
          className={` flex flex-col w-full sm:w-full m-auto my-2 sm:p-2`}
        >
          <div className="text-blue-600 text-2xl pl-4  font-cormorant">
        
          Today at the Temple:
        
      </div>
          <CardTitle className=" pl-4 text-lg my-1 gap-4  text-cyan-950">
          
            {data.title},
           <span className="text-zinc-800 font-normal"> { data.subtitle && data.subtitle}</span> 
          </CardTitle>
         
      <Divider />
          {/* {data.imageurl && (
            <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]">
              <Link href={data.imageurl} target="_blank">
                <Image
                  src={data.imageurl}
                  alt="Event"
                  fill
                  quality={75}
                  sizes={"100vw"}
                  className="absolute object-contain cursor-pointer"
                />
              </Link>
            </div>
          )} */}
          
          <CardContent className="flex flex-col gap-x-1 gap-y-3 my-5">
          {data.description &&  
          <div className="col-span-8 text-[12px] text-left line-clamp-1">
                 {data.description} 
                
               </div> }
          
            
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) =>
            <>
              {data[`time_${num}`] ? (
                <>
                  <div                  
                    className=" border-r-[1px] text-[12px]  md:text-base  flex items-center justify-center font-inter px-1"
                  >
                   <span className="text-blue-900 inline-block">{data[`time_${num}`]}: </span> 
                 
                  <div  className={"px-1 text-[12px] md:text-base text-justify w-full line-clamp-1"}>
                    {data[`event_${num}`]}    
                  </div>
                 
                  </div>
                </>
              ) : data[`event_${num}`]  &&
                  <>
                  <div                  
                    className={clsx("col-span-10 font-inter text-[12px] text-justify md:text-base line-clamp-1",{
                      'font-bold':num===8
                    })}
                  >
                   {"-"} {data[`event_${num}`]}  <Link href={`/events/${data.id}`} className="text-blue-800 text-xl col-span-8">...Read More</Link>    
                  </div>
                  
                </>
}
              
              </>
           )} 
           
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus accusantium ipsum beatae atque, animi cum ipsam et distinctio nemo vitae sapiente vel libero eos velit eaque veniam recusandae debitis. */}
           <Link href={`/events/${data.id}`} className="text-blue-800 text-xl col-span-8">...Read More</Link>
          </CardContent>
          {/* sponsor event Link */}
    
       
        </div>
      );
}


  

