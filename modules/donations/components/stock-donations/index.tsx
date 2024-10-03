import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { opensans } from "@lib/fonts/fonts";
import Divider from "@modules/common/components/divider";

const StockDonation = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col text-justify md:text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
      >
        <div>
          <h1
            className={`text-xl text-center leading-8 my-2 font-[cormorant] font-medium py:2`}
          >
            VVGC San Martin Stock Donations
          </h1>
        </div>
        <Divider />
        <div>
          <h3 className={`my-2 md:w-3/4 mx-auto  py:2 `}>
            You can save on your capital gains tax by directly donating your
            appreciated stock rather than cash. Brokerages such as Schwab
            provide facility for stock donations via their charities arm. Use
            the VVGC Tax ID 61-1449457 to direct the donation to the temple.
          </h3>
        </div>

        <p className="text-center">(Click to enlarge)</p>
        <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
          <Link href="/images/donations/loan/2.jpeg" target="_blank">
            <Image
              quality={75}
              src="/images/donations/loan/2-thumb.jpeg"
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

export default StockDonation;
