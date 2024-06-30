import React, { Fragment } from "react";
import { cormorant } from "app/fonts";
import PoojaServicePage from "@modules/pooja-services/page";
export const metadata = {
  title: "Pooja Services",
  description: "VVGC- Temple",
};

export default function PoojaServices() {
  return (
    <Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-pooja ${cormorant.variable} `}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">
          Pooja Services{" "}
        </h1>
      </div>
      <main className={`${cormorant.variable} m-auto `}>
        <PoojaServicePage />
      </main>
    </Fragment>
  );
}
