import React from "react";
// import Next_event_Grid from "./event_grid";
import NewEventCard from "./new_component";
const Upcoming_Event = () => {
  
  return (   
    // <Next_event_Grid />
    <div className={`min-h-screen 
    `
    }>
      <NewEventCard
        heading="Karwa Chauth Pooja 2025"
        subtitle="Vvgc San Martin"
        date="October 9th & 10th"
        time="4:00PM Onwards"
        imageUrl="https://res.cloudinary.com/dixkqgqsi/image/upload/v1759811931/vvgc/images/2025/october/karvachauth.jpg"
        description="Bring your loved ones and join us for the Karwa Chauth pooja to seek blessings together!"
       
      
        //  sponsorLinks={[
        //   {  url: "https://paybee.io/@vvgc@33",
        //   name: "Suvasini Pooja Registration link", },
        //   {  url: "https://paybee.io/@vvgc@34",
        //   name: "Chandi Homam Sponsorship link", },
          
        // ]}
        
      />
    </div>
  );
};

export default Upcoming_Event;



