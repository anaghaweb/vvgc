'use client'
import React from 'react'
import { useContext } from 'react'
import { googlecontext } from './googleContext';
import MainEventCard from '@modules/events/components/mainEventsCard';

const Events = () => {
    const googledata = useContext(googlecontext);
  return (
    <div className={`container h-full mx-auto flex flex-col 
       bg-gradient-to-r from-purple-800 via-fuchsia-800 to-violet-800 text-center text-white`}>
        {/* {
            googledata.map(event=>(
                  <MainEventCard data={event} key={event.id} />
            ))
          }           */}

          
    </div>
  )
}
export default Events