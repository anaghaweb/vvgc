import React, { Fragment } from "react";

const LakshmiGanapathiBanner = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col gap-y-4 justify-center relative items-center w-full 
          h-[75svh] text-3xl leading-9 text-blue-200 bg-center bg-no-repeat bg-cover m-px
                    bg-hero-san-jose font-cormorant `}
      >
        <h1 className="text-[1.3rem] md:text-[3rem] md:mb-3">Welcome to </h1>
        <h1 className="text-[1.3rem] md:text-[4rem] md:mb-2">
          Lakshmi Ganapathi Temple,
        </h1>

        <h1 className="text-[1.3rem] md:text-[4rem]">San Jose </h1>
      </div>
    </Fragment>
  );
};

export default LakshmiGanapathiBanner;
