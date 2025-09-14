import Link from "next/link";
import React from "react";

const Upcoming_Event = () => {

  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1757855271/vvgc/images/2025/september/bhagwati_jagran_sept19.jpg`,
  ];
  
  return (
    <div className="w-full lg:max-w-7xl mx-auto md:p-6 
    
     text-gray-800">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-orange-700">
        Bhagwati Jagran, 19th Sept
      </h2>
     
       <div className="w-full overflow-hidden h-auto my-4 mx-auto">
        <Link
          className=""
          href={cdn_cloudinary_urls[0]}
          target="_blank"
        >
          <img
            src={cdn_cloudinary_urls[0]}
            alt="event"
            className="w-full mx-auto max-w-[500px] object-contain"
          />
          
        </Link>
      </div>
     
    </div>
  );
};

export default Upcoming_Event;
