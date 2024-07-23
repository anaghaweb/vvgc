import React from "react";
import { cormorant, opensans } from "app/fonts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@modules/common/components/ui/button";

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
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-goshala ${cormorant.variable} `}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">
          VVGC Goshala
        </h1>
      </div>
      {/* main section */}

      <main
        className={`${cormorant.variable} mx-auto w-full max-w-full md:mt-4`}
      >
        <div className={`grid relative grid-cols-1 max-w-full
           h-auto bg-white mx-auto  md:grid-cols-4 
           md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] 
           md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%]
            ${opensans.variable}`}>
          <div
            className={`flex flex-col justify-items-center 
            items-center w-full max-w-full 
            text-center font[opensans] col-span-2 p-6`}>
            <h1 className={`text-3xl leading-8  font-[cormorant] font-medium py:2 `}>
              Go Samrakshanam Program
            </h1>

            <h3
              className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}
            >
              (Sustaining & Caring for Cows)
            </h3>

            <h3 className={`leading-8 my-2 text-justify py:2`}>
              At VVGC San Martin, we maintain a Goshala where indigenous cows
              (Gyr breeds) are raised. We have a few initiatives as part of
              sustaining our Goshala to provide the best care and living
              experiences for our growing list of cattle.
            </h3>
          </div>
          <div
            className={`relative col-span-1 w-72 h-72 sm:min-w-full 
              sm:h-auto md:col-span-2 mx-auto object-cover`}
          >
            <Image src={go_dhanam_img} alt="Support Us" quality={75} fill />
          </div>
        </div>

        <div className={`grid relative grid-cols-1 max-w-full
         bg-white mx-auto  p-5 md:grid-cols-4 
         md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] 
         md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%]
          ${opensans.variable}`}>
          <div
            className={`flex flex-col justify-items-center 
              items-center gap-5 w-full max-w-full text-center 
              font[opensans] col-span-2 p-6`}
          >
            <div className=" flex flex-col gap-4 mx-auto min-h-fit 
            md:h-56 items-center justify-around">
              <h2 className="text-lg  my-2 text-justify">
                To learn more about our programs and how you can support them,
                please visit
              </h2>
              <div>
                <Button
                  className={`bg-orange-400 text-white width-full sm:w-fit font-[bold] text-xl`}
                >
                  <Link
                    href="https://paybee.io/quickpay.html?handle=vvgc&ppid=8#optionList"
                    target="_blank"
                  >
                    Click here{" "}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`relative col-span-1 w-full max-w-full h-72 md:col-span-2`}
          >
            <Image
              src={"/goshala/goshala-2.jpg"}
              alt="Support Us"
              fill
              quality={75}
              sizes={"100vw"}
              className="object-contain m-auto absolute"
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
