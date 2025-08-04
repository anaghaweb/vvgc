import Link from "next/link";
import React from "react";
import { Next_Video } from "@modules/common/components/next-video-player";

const VishwaShanthiHomamEvent = () => {

  const cdn_cloudinary_urls = [


    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1752862159/vvgc/images/2025/July/17/varamahalakshmi_vratha.jpg`,
  ];
  const url = "https://cp30cky8vva110s1.public.blob.vercel-storage.com/varalakshmi_video.mp4";
  return (
    <div className="max-w-2xl mx-auto md:p-6 bg-white shadow-sm text-gray-800">
      <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center underline">
        Sri Varalakshmi Vratha Celebrations
      </h1>

     

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
       <video
        controls
        className='mx-auto sm:w-80 md:w-96 lg:w-[400px] my-4'
      >
        <source src={url} type="video/mp4" />
        Varamahalakshmi celebrations
      </video>
      {/* <Next_Video /> */}
    </div>
  );
};

export default VishwaShanthiHomamEvent;
