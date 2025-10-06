import React from "react";
// import Next_event_Grid from "./event_grid";
import NewEventCard from "./new_component";
const Upcoming_Event = () => {
  
  return (   
    // <Next_event_Grid />
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <NewEventCard
        heading="SRI SARADHA NAVARATRI FESTIVAL 2025"
        subtitle="VVGC SAN MARTIN"
        date="Sept 22nd - Oct 7th"
        time="Please open the flyer for event times"
        imageUrl="https://res.cloudinary.com/dixkqgqsi/image/upload/v1758093475/vvgc/images/2025/september/navaratri_2025.jpg"
        description="Please bring your family and friends and get the blessings"
       
      
         sponsorLinks={[
          {  url: "https://paybee.io/@vvgc@33",
          name: "Suvasini Pooja Registration link", },
          {  url: "https://paybee.io/@vvgc@34",
          name: "Chandi Homam Sponsorship link", },
          
        ]}
        
      />
    </div>
  );
};

export default Upcoming_Event;



