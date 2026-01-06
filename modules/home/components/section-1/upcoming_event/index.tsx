import React from "react";
// import Next_event_Grid from "./event_grid";
import NewEventCard from "./components";
import { upcoming_events } from "./components/data";
const Upcoming_Event = () => {
  
  return (       
    <div className={`grid grid-cols-1 lg:grid-cols-2`}>
     {
      upcoming_events.map((event)=>{
      return <NewEventCard
        key={event.heading}  
        {...event}        
      />
      })
     }     
    </div>
  );
};

export default Upcoming_Event;



