import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { opensans } from "@lib/fonts/fonts";
import Divider from "@modules/common/components/divider";

const GodhanamInDonation = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Fragment>
      {/* ---------------------------- */}

      <div
        className={`flex flex-col w-full font-sans gap-4 p-6 px-3 leading-6 md:max-w-screen-md mx-auto`}
      >
        <div>
          <h1 className={`text-2xl md:text-4xl font-serif text-cyan-950`}>
            Go Samrakshanam Program
          </h1>
          <Divider />
        </div>
        <p className="md:max-w-screen-md">
          At VVGC San Martin, we maintain a Goshala where indigenous cows (Gyr
          breeds) are raised. We have a few initiatives as part of sustaining
          our Goshala to provide the best care and living experiences for our
          growing list of cattle.
          <span>
            {" "}
            <Link
              className={`underline text-blue-500 font-bold`}
              href={
                "https://paybee.io/quickpay.html?handle=vvgc&ppid=8#optionList"
              }
              target="_blank"
            >
              Click here{" "}
            </Link>
          </span>
          to learn more about the programs and how you can support them.
        </p>

        <div className="relative w-[95%] h-64 md:h-80 mx-auto">
          <Image
            quality={75}
            src={imageUrl}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
            className="object-contain"
            alt="vvgc san martin loan program"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default GodhanamInDonation;
