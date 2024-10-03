import React, { Fragment } from "react";

const HeroCard = ({page, text}:{page:string, text:string}) => {
  return (
    <Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] 
          text-3xl leading-9 text-white bg-hero-home bg-center bg-no-repeat bg-cover m-px
                     font-playfair bg-[rgb(0,0,0,0.8)]`}
      >
        <h1 className="text-5xl md:text-7xl font-[playfair] text-wrap font-light text-center ">
          {text}{" "}
        </h1>
      </div>
    </Fragment>
  );
};

export default HeroCard;
