import Link from "next/link";
import React from "react";
import { Next_Video } from "@modules/common/components/next-video-player";

const VishwaShanthiHomamEvent = () => {

  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1754978039/vvgc/images/2025/august/modaga_20250812.jpg`,
  ];
  const url = "https://cp30cky8vva110s1.public.blob.vercel-storage.com/varalakshmi_video.mp4";
  return (
    <div className="max-w-full mx-auto md:p-6 bg-white shadow-sm text-gray-800">
      <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center underline">
        Sankata Hara Chaturthi
      </h1>
      <p className="text-center font-semibold font-sans text-xl">
        12th Aug, Evening 7:30PM
      </p>
       <div className="w-full overflow-hidden shadow h-auto my-4 mx-auto">
        <Link
          className=""
          href={cdn_cloudinary_urls[0]}
          target="_blank"
        >
          <img
            src={cdn_cloudinary_urls[0]}
            alt="event"
            className="w-full object-cover"
          />
        </Link>
      </div>
     
    </div>
  );
};

export default VishwaShanthiHomamEvent;
