import React from "react";
import Image from "next/image";
import Link from "next/link";

import Divider from "@modules/common/components/divider";

export const metadata = {
  title: "Goshala - VVGC",
  description: "Help us Grow",
};

export default function Goshala() {
  const divine_img =
    "https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg";

  const go_dhanam_img =
    "https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914207/VVGC%20San%20Martin%20Temple%20Data/temple-donation-image-1_fb8q9e.jpg";

  const godhanam_donate_img =
    "https://res.cloudinary.com/dixkqgqsi/image/upload/v1694926304/VVGC%20San%20Martin%20Temple%20Data/VVGC/GoDanam_ar6vy1.jpg";

  return (
    <React.Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center 
          bg-no-repeat bg-cover m-px bg-hero-goshala font-serif `}>
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-serif">
          VVGC Goshala
        </h1>
      </div>
      {/* main section */}

      <div
        className={`flex flex-col w-full font-sans gap-6 p-6 px-3 leading-6 md:max-w-screen-md mx-auto`}
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
        <p className="text-center">(Click to enlarge)</p>
        <div className="relative w-[95%] h-48 md:h-[500px] mx-auto">
        <Link href={godhanam_donate_img} target="_blank">
          <Image
            quality={75}
            src={godhanam_donate_img}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
            className="object-contain"
            alt="vvgc san martin loan program"
          />
        </Link>
          
        </div>
        <div className="relative w-[95%] h-40 md:h-80 mx-auto">
          <Image
            quality={75}
            src={"/goshala/goshala-2.jpg"}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
            className="object-contain"
            alt="vvgc san martin loan program"
          />
        </div>

        <div className="relative w-[95%] h-40 md:h-80 mx-auto">
          <Image
            quality={75}
            src={go_dhanam_img}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
            className="object-contain"
            alt="vvgc san martin loan program"
          />
          
        </div>
      </div>
    </React.Fragment>
  );
}
