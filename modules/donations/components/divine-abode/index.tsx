import React from "react";
import Image from "next/image";
import Divider from "@modules/common/components/divider";

const DivineAbode = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      className={`bg-white my-5 p-5 md:max-w-screen-lg mx-auto`}
    >
      <div
        className={`flex flex-col w-full mx-auto p-6 px-3 leading-6 font-roboto bg-purple-100 text-center`}
      >
        <h2
          className={`text-2xl md:text-4xl font-serif text-cyan-950`}
        >
          Build the Divine Abode
        </h2>
        <Divider className="border-purple-950" />
        <p className={`py:2 my-4 font-semibold `}>
          Help Fund the Expansion and Maintenance of Vallabha Maha Ganapathi
          Temple.
        </p>
        <div className={` py:2 my-4 font-semibold text-purple-900 `}>

        <p >
          VVGC is a registered non-profit organization
        </p>
        <p>(CA Tax ID: 61-1449457)</p>
        <p>and your donations are always 100% tax deductible.</p>
        </div>
      </div>
      {/* <div
        className={`col-span-1 md:col-span-4 relative bg-black`}
      >
        <Image
          src={`${imageUrl}`}
          alt="Support Us"
         fill
          quality={75}
          sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
          className="object-cover"
        />
      </div> */}
    </div>
  );
};

export default DivineAbode;
