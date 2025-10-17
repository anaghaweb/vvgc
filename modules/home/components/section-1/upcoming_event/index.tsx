import React from "react";
// import Next_event_Grid from "./event_grid";
import NewEventCard from "./new_component";
import { upcoming_events } from "./data";
const Upcoming_Event = () => {
  
  return (   
    
    <div className={`flex flex-col lg:flex-row gap-4 justify-around`}>
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



