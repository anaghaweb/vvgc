import React, { Fragment } from "react";

const LakshmiGanapathiBanner = () => {
  return (
    <Fragment>
      <div
        className={`flex justify-center items-center relative w-full h-[75svh] 
           bg-center bg-no-repeat bg-cover m-px
          bg-hero-san-jose`}>
            <div className={`
            flex flex-col gap-y-4 justify-center items-center
            text-3xl leading-9 font-playfair 
            bg-clip-text text-transparent h-full w-full font-bold
            bg-gradient-to-r from-red-300 via-green-300 to-blue-300
             backdrop-blur-[2px] text-center md:text-[3rem] text-[1.4rem]
            `}>

        <p className="  md:mb-3 ">
          Welcome to{" "}
        </p>
        <p className="  md:mb-2 ">
          Lakshmi Ganapathi Temple,
        </p>

        <p className=" ">
          San Jose{" "}
        </p>
            </div>
      </div>
    </Fragment>
  );
};

export default LakshmiGanapathiBanner;
