import result from '@/json/regularevents.json'
import { Cormorant } from 'next/font/google'
import React from 'react';

const cormorant = Cormorant({subsets: ['latin'], variable:'--font-cormorant', fallback: 'sans'})

export default function regular() {

    
      return (
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
        </div>)
    
};
