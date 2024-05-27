import { Cormorant } from 'next/font/google'
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const cormorant = Cormorant({subsets: ['latin'], variable:'--font-cormorant', fallback: 'sans'})

export default function Regular({regularEventData}) {

    const result = regularEventData;
    if(!result){
        return <div>...No data found. Retry after some time.</div>
    }

    else{
   return (
        <Card className ={`${cormorant.variable} lg:w-[900px] mx-auto`} >
              <CardHeader className=' text-[2rem]  text-orange-600 border-b-2 border-b-indigo-800 leading-7 px-1 py-2 md:text-4xl md:leading-10 md:font-semibold' >Regular Events</CardHeader>
            {
                result.content.map((data, index) => {
                    
                    return(  
                     <React.Fragment key={index}>                  
                    <CardContent className='grid grid-cols-6 gap-x-1 gap-y-3 my-5 pl-6'>
                        <div className='text-start col-span-full text-2xl font-medium leading-7 
                        text-blue-950 p-2}'>{data.day}</div>
                         
                        <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time}:</div >
                            <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event}</div>
                            
                            <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time1}:</div>
                    <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event1}</div>
                            
                            {data.time2 && <> 
                            <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time2}:</div>
                            <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event2}</div></>}
                            
                        {data.time3 &&  <>
                        <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time3}:</div>
                        <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event3}</div></>}
                            
                        {data.time4  && <>
                        <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time4}:</div>
                        <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event4}</div></>}
                            
                        {data.time5  && <>
                        <div className={`col-span-1 text-sm  text-blue-950 flex items-center 
                        justify-end px-1 py-0 border-r md:text-xl md:leading-6 }`}>{data.time5}:</div>
                        <div className='col-span-5 text-sm w-full text-start px-1 py-0 md:text-xl md:leading-6'>{data.event5}</div></>}
                    <hr/>        
                    </CardContent>
                    </React.Fragment>
                    )
                    
                 })
             
             }
        </Card>)}
        
    
};
