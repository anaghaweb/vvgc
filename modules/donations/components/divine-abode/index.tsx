import React from "react";
import Image from "next/image";
import { cormorant, opensans } from "app/fonts";

const DivineAbode = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
    >
      <div
        className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6 px-3`}
      >
        <h1
          className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}
        >
          Build the Divine Abode
        </h1>
        <h3 className={`leading-8 my-2 md:text-xl md:text-center py:2 md:py-5`}>
          Help Fund the Expansion and Maintenance of VallabhaMaha Ganapathi
          Temple
        </h3>
        <h3 className={`leading-8 md:text-xl md:text-center  py:2 md:py-5`}>
          VVGC is a registered non-profit organization (CA Tax ID: 61-1449457)
          and your donations are always 100% tax deductible.
        </h3>
      </div>
      <div
        className={`relative col-span-1 w-full max-w-full h-auto md:col-span-2`}
      >
        <Image
          src={`${imageUrl}`}
          alt="Support Us"
          fill
          quality={75}
          sizes={"100vw"}
          className=" object-contain m-auto"
        />
      </div>
    </div>
  );
};

export default DivineAbode;
