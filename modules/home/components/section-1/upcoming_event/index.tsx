import Link from "next/link";
import React from "react";

const Upcoming_Event = () => {

  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1755833132/vvgc/images/2025/august/samaveda.jpg`,
  ];
  
  return (
    <div className="w-full lg:max-w-7xl mx-auto md:p-6 
    
     text-gray-800">
      <h1 className="text-xl md:text-2xl font-semibold font-serif text-red-700 mb-4 text-center">
        August 26th
      </h1>
      <p className="text-center font-semibold font-playfair text-xl md:text-2xl md:font-bold">
        Sama Veda Upakarma
      </p>
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
