import React from "react";
// import Next_event_Grid from "./event_grid";
import NewEventCard from "./new_component";
import { upcoming_events } from "./data";
const Upcoming_Event = () => {
  
  return (   
    // <Next_event_Grid />
    <div className={`flex flex-col lg:flex-row gap-4 justify-around`}>
     {
      upcoming_events.map((event)=>{
      return <NewEventCard
        key={event.heading}
        // heading={event.heading}
        // subtitle={event.subtitle}
        // date={event.date}
        // time={event.time}
        // imageUrl={event.imageUrl}
        // description={event.description}
        {...event}
      
        //  sponsorLinks={[
        //   {  url: "https://paybee.io/@vvgc@33",
        //   name: "Suvasini Pooja Registration link", },
        //   {  url: "https://paybee.io/@vvgc@34",
        //   name: "Chandi Homam Sponsorship link", },   
        // ]}
        
      />
      })
     }
      {/* <NewEventCard
        heading="Sri Shirdi Sai 107th Maha Samadhi Utsav Day"
        subtitle="@ Vvgc San Martin"
        date="October 16th"
        time="6:30PM"
        imageUrl="https://res.cloudinary.com/dixkqgqsi/image/upload/v1760335852/vvgc/images/2025/october/saisamadhiutsav_107.jpg"
        description=""
       
      
        //  sponsorLinks={[
        //   {  url: "https://paybee.io/@vvgc@33",
        //   name: "Suvasini Pooja Registration link", },
        //   {  url: "https://paybee.io/@vvgc@34",
        //   name: "Chandi Homam Sponsorship link", },   
        // ]}
        
      />
      <NewEventCard
        heading="Sri Shirdi Sai 107th Maha Samadhi Utsav Day"
        subtitle="@ Vvgc San Martin"
        date="October 16th"
        time="6:30PM"
        imageUrl="https://res.cloudinary.com/dixkqgqsi/image/upload/v1760335852/vvgc/images/2025/october/saisamadhiutsav_107.jpg"
        description=""
       
      
        //  sponsorLinks={[
        //   {  url: "https://paybee.io/@vvgc@33",
        //   name: "Suvasini Pooja Registration link", },
        //   {  url: "https://paybee.io/@vvgc@34",
        //   name: "Chandi Homam Sponsorship link", },   
        // ]}
        
      />
      <NewEventCard
        heading="Sri Shirdi Sai 107th Maha Samadhi Utsav Day"
        subtitle="@ Vvgc San Martin"
        date="October 16th"
        time="6:30PM"
        imageUrl="https://res.cloudinary.com/dixkqgqsi/image/upload/v1760335852/vvgc/images/2025/october/saisamadhiutsav_107.jpg"
        description=""
       
      
        //  sponsorLinks={[
        //   {  url: "https://paybee.io/@vvgc@33",
        //   name: "Suvasini Pooja Registration link", },
        //   {  url: "https://paybee.io/@vvgc@34",
        //   name: "Chandi Homam Sponsorship link", },   
        // ]}
        
      /> */}
    </div>
  );
};

export default Upcoming_Event;



