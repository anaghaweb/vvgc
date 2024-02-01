import React from "react";
import Image from "next/image";
import CalenderLinks from "./calendarlinks";
import Link from "next/link";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import result from '@/json/regularevents.json'
import { cormorant } from "../app/fonts";




export default function Tablist({data}){

    return(
        <Tabs defaultValue="special" className="w-full min-h-lvh h-full my-10 items-center text-center">
        <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger  value="special">Special Events</TabsTrigger>
        <TabsTrigger value="regular">
            Regular Events

        </TabsTrigger>
        <TabsContent value="special" className="flex flex-1 min-h-dvh w-full" >
          <iframe name="contentContainer" src="" className=" w-screen" >
        <div className="flex flex-col  max-w-full lg:w-[900px] mx-auto h-auto  px-1 relative">
       <h1 className="py-2 px-1 font-opensans text-center text-4xl text-blue-900  max-w-full lg:w-[900px]  lg:text-left ">Event Details</h1>
       <hr/>
      {data.content.map((data, index) => (
       !!data.title ? 
       <Card key={index} className={` flex flex-col w-full sm:w-full m-auto h-auto my-2 sm:p-2`}>
          
       <CardHeader  className=" text-2xl    text-cyan-950" >{new Date(data.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}

       </CardHeader>

       <CardHeader  className=" pl-7 text-xl   text-cyan-950">{data.title}</CardHeader>

       <hr className=" my-2 " />

       {data.imageurl && <div className="relative  w-[100%] h-[200px] md:w-[100%] md:h-[500px]"><Link href={data.imageurl} target="_blank"><Image src={data.imageurl} alt="Event" fill quality={75} sizes={'100vw'} className="absolute object-contain cursor-pointer" /></Link></div>}

       {data.imageurl && <hr className=" my-2 " />}

       <CardContent key={index + data.title} className="grid grid-cols-10 gap-x-1 gap-y-3 my-5">
         {data.startTime && data.endTime && data.description ?
           <><div key={index + data.title} className="col-span-2 border-r-[1px] text-blue-900 text-[13px] md:text-base font-opensans flex items-center justify-center px-[4px]">{data.startTime}</div><div key={index + data.title} className="col-span-8 text-[13px] md:text-base ">{data.description}</div></>
           : data.startTime && !data.endTime ?
             <><div key={index + data.title} className="col-span-2 border-r-[1px] text-blue-900 text-[13px]
                 md:text-base font-sans flex items-center justify-center px-[4px]">{data.startTime}:</div><div key={index + data.title} className="col-span-8 text-[13px] md:text-base">{data.description}</div></>
             : data.startTime && data.endTime && !data.description ? ""
               : <div key={index + data.title} className="col-span-10 text-xl ">{data.description}<br/></div>
         }
         {[1, 2, 3, 4, 5, 6].map((num, index) => (
           data[`time_${num}`] ? (
             <>
               <div key={num} className="col-span-2 border-r-[1px] text-[13px] md:text-base text-blue-900 flex items-center justify-center font-inter px-1">
                 {data[`time_${num}`]}:
               </div>
               <div className="col-span-8 px-1 text-[13px] md:text-base w-full">
                 {data[`event_${num}`]}
               </div>
             </>
           ) : (
             data[`event_${num}`] ? (
               <div key={index} className="col-span-8 font-inter text-[13px] md:text-base">
                 {data[`event_${num}`]}
               </div>
             ) : (
               ""
             )
           )
         ))}

                 {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus accusantium ipsum beatae atque, animi cum ipsam et distinctio nemo vitae sapiente vel libero eos velit eaque veniam recusandae debitis. */}

       </CardContent>
       {/* sponsor event Link */}
      
       <CardFooter className="flex flex-col p-2 rounded w-full border-slate-400 border-solid shadow-inner bg-gray-100 md:bg-transparent md:border-none " >
       {data.sponsorLink &&
       
         <Link className="flex justify-start items-center gap-2 " href={data.sponsorLink} target="_blank">
           <h6 className=" text-base md:text-xl text-indigo-950  ">Sponsor this event</h6> 
           <FaExternalLinkAlt className="text-lime-700" /></Link>}
           
       <div className="flex md:flex-row  p-2">
         <span className="justify-center md:text-xl md:text-left text-blue-950 pr-2">Add to Calendar: </span>
         <div className="grid grid-cols-3 items-center gap-x-3">
           <CalenderLinks eventdata={{
             startdate: data.date,
             enddate: data.date,
             startTime: data.startTime,
             endTime: data.endTime,
             summary: data.title === "" ? `Events on ${data.date}` : data.title,
             description: data.description
           }} />

         </div>        
       </div>
       </CardFooter>    
     </Card> : ""
    
      ))}
    </div>

    </iframe >
        </TabsContent>
      <TabsContent value="regular" className="flex flex-1 min-h-dvh h-full w-full">
      
     
      <iframe name="contentContainer" src="" className="h-auto min-h-full w-dvw" height="100%" >
      <div className ={cormorant.variable} >
              <div className=' text-[2rem]  leading-7 px-1 py-2 md:text-4xl md:leading-10 md:font-semibold' >Regular Events</div>
            {
                result.content.map((data, index) => {
                    
                    return(  
                     <React.Fragment key={index}>                  
                    <section className='grid grid-cols-6 gap-x-1 gap-y-3 my-5 pl-2'>
                        <div className='text-start col-span-full text-2xl font-medium leading-7 
                        text-blue-950 p-2}'>{data.day}</div>
                         
                        <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time}:</div >
                            <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event}</div>
                            
                            <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time1}:</div>
                    <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event1}</div>
                            
                            {data.time2 && <> 
                            <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time2}:</div>
                            <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event2}</div></>}
                            
                        {data.time3 &&  <>
                        <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time3}:</div>
                        <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event3}</div></>}
                            
                        {data.time4  && <>
                        <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time4}:</div>
                        <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event4}</div></>}
                            
                        {data.time5  && <>
                        <div className={`col-span-1 text-xs  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-base md:leading-6 }`}>{data.time5}:</div>
                        <div className='col-span-5 text-[12ps] w-full text-start px-1 py-0 md:text-base md:leading-6'>{data.event5}</div></>}
                    <hr/>        
                    </section>
                    </React.Fragment>
                    )
                    
                 })
             
             }
        </div>
      </iframe>
      </TabsContent>
      </TabsList>
      
    </Tabs>
    )
}

