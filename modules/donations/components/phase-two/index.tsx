import React, { Fragment } from "react";
import Divider from "@modules/common/components/divider";
import Image from "next/image";
import { cormorant, opensans } from "@lib/fonts/fonts";
import Link from "next/link";

const PhaseTwoConstruction = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col w-full  font-sans gap-4 p-6 px-3 leading-6 md:max-w-screen-md mx-auto`}
      >
        <div>
          <h1 className={`text-2xl md:text-4xl font-serif text-cyan-950`}>
            VVGC San Martin Phase II Construction Donations
          </h1>
          <Divider />
        </div>
        <p className="font-bold my-1 md:max-w-screen-md">
          Special Fund raising for vvgc temple phase II expansion project:
        </p>
        <p className="md:max-w-screen-md">
          We have updated the payment details Payments through Direct Bank
          transfers and Check Payments. Please read the flyer for further
          details.{" "}
        </p>
        <p className="text-center">(Click to enlarge)</p>
        <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
          <Link href="/images/donations/expansion/1.webp" target="_blank">
            <Image
              quality={75}
              src="/images/donations/expansion/1.webp"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
              className="absolute object-contain cursor-pointer"
              alt="vvgc san martin loan program"
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PhaseTwoConstruction;
