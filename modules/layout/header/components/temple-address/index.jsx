import React, { Fragment } from "react";

const TempleAddressHeader = () => {
  return (
    <Fragment>
      <section className="py-1 mt-12 flex flex-col justify-center h-24 text-center text-[#000033] tracking-tight">
        <p
          className={`tracking-tight font-cormorant text-2xl md:text-2xl lg:text-3xl font-large`}
        >
          Vaidica Vidhya Ganapathi Center
        </p>
        <p
          className={`tracking-tighter font-cormorant text-xl md:text-xl lg:text-2xl `}
        >
          Sri Vallabha Maha Ganapathi Temple
        </p>
        <p
          className={`tracking-tighter font-cormorant text-[12px] md:text-[14px]  `}
        >
          (A Registered Non-Profit Organization - CA Tax ID: 61-1449457)
        </p>
      </section>
    </Fragment>
  );
};

export default TempleAddressHeader;
