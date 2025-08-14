import Link from "next/link";
import React from "react";
import { Next_Video } from "@modules/common/components/next-video-player";
import LazyImageLoader from "@modules/common/components/LazyImageLoader";
const VishwaShanthiHomamEvent = () => {

  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1754978040/vvgc/images/2025/august/bhagwati_jagran_20250815.jpg`,
  ];
  const url = "https://cp30cky8vva110s1.public.blob.vercel-storage.com/varalakshmi_video.mp4";
  return (
    <div className="w-full lg:max-w-7xl mx-auto md:p-6 
    
     text-gray-800">
      <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center underline">
        Bhagwati Jagran
      </h1>
      <p className="text-center font-semibold font-sans text-xl">
        Every Third Friday of the Month
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

export default VishwaShanthiHomamEvent;
