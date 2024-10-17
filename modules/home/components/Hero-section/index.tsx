import React, { Fragment } from "react";

const HeroCard = ({ page, text }: { page: string; text?: string }) => {
  return (
    <Fragment>
      <div
        className={`flex flex-col justify-center items-center relative  
          w-full h-24 sm:h-64 md:h-80  bg-hero-home bg-top bg-cover bg-no-repeat
             
          `}
      >
        <div
          className="flex flex-col justify-start items-center
       text-xl sm:text-5xl md:text-7xl leading-7 text-white font-playfair
        "
        >
          <p>A Home</p>
          <p>For Spiritual</p>
          <p>Devotees</p>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroCard;
