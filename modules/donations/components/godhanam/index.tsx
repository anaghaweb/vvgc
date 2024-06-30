import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { opensans } from "app/fonts";
import Divider from "@modules/common/components/divider";

const GodhanamInDonation = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Fragment>
      <div
        className={`flex flex-col text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}
      >
        <div>
          <h1
            className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}
          >
            Go Samrakshanam Program
          </h1>
        </div>
        <Divider />
        <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[300px]">
          <Image
            quality={75}
            src={imageUrl}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
            className="absolute object-contain cursor-pointer"
            alt="vvgc san martin loan program"
          />
        </div>
        <div>
          <h3 className={`leading-8 md:text-xl text-center `}>
            (Sustaining & Caring for Cows)
          </h3>
          <h3
            className={` md:text-xl text-justify md:text-center  py:2 md:py-5`}
          >
            At VVGC San Martin, we maintain a Goshala where indigenous cows (Gyr
            breeds) are raised. We have a few initiatives as part of sustaining
            our Goshala to provide the best care and living experiences for our
            growing list of cattle.
            <span>
              {" "}
              <Link
                className={`text-orange-500 font-[bold]`}
                href={
                  "https://paybee.io/quickpay.html?handle=vvgc&ppid=8#optionList"
                }
                target="_blank"
              >
                Click here{" "}
              </Link>
            </span>
            to learn more about the programs and how you can support them.
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default GodhanamInDonation;
