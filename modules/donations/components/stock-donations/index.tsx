import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { opensans } from "@lib/fonts/fonts";
import Divider from "@modules/common/components/divider";

const StockDonation = () => {
  return (
    <Fragment>
      <div
        className={`flex flex-col w-full  font-sans gap-4 p-6 px-3 leading-6 md:max-w-screen-md mx-auto`}
      >
        <div>
          <h1 className={`text-2xl md:text-4xl font-serif text-cyan-950`}>
          VVGC San Martin Stock Donations
          </h1>
          <Divider />
        </div>
         <p className="md:max-w-screen-md">
          You can save on your capital gains tax by directly donating your
            appreciated stock rather than cash. Brokerages such as Schwab
            provide facility for stock donations via their charities arm. Use
            the VVGC Tax ID 61-1449457 to direct the donation to the temple.
        </p>
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
