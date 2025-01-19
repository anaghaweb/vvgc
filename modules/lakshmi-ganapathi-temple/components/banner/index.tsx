import React, { Fragment } from "react";

const LakshmiGanapathiBanner = () => {
  return (
    <Fragment>
      <div
        className={`flex justify-center items-center relative w-full md:h-[73svh] 
           bg-cover bg-center md:bg-cover bg-no-repeat m-px
          bg-hero-san-jose`}
      >
        <div
          className={`
            flex flex-col justify-end items-start
            leading-9 font-playfair 
             h-52 md:h-full w-full text-white md:gap-2 p-2 md:p-12
             backdrop-blur-[2px] text-2xl  md:text-[3rem] 
            `}
        >
          <p className="md:my-1">Welcome to </p>
          <p >Lakshmi Ganapathi Temple,</p>
          <p> San Jose </p>
        </div>
      </div>
    </Fragment>
  );
};

export default LakshmiGanapathiBanner;
