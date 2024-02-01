import React from 'react';


const EventCard = ({ events }) => {
  const getDay = () => {
    const today = new Date();
    const num = today.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[num];
  };

  const currentDay = getDay();
  const data = events.find((event) => event.day === currentDay);

  if (!data) {
    return <div>No events for today</div>;
  }

  return (
    <div>
      
      <div className='grid grid-cols-6 gap-x-1 gap-y-3 my-5 pl-6'>
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
                    </div>
    </div>
  );
};

export default EventCard;
