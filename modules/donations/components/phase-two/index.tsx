import React, {Fragment} from "react";
import Divider from "@modules/common/components/divider";
import Image from "next/image";
import { cormorant, opensans } from "app/fonts";
import Link from "next/link";

const PhaseTwoConstruction = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col max-w-full text-justify md:text-center bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
      >
        <div>
          <h1
            className={`text-xl leading-8 my-2 text-center font-[cormorant] font-medium py:2`}
          >
            VVGC San Martin Phase II Construction Donations
          </h1>
        </div>
        <Divider />
        <div>
          <p className="font-bold my-1">
            Special Fund raising for vvgc temple phase II expansion project:
          </p>
        </div>

        <p className="xs:text-[12px] text-base">
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
