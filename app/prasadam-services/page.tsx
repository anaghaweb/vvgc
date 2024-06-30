import React from "react";
import { cormorant } from "app/fonts";
import PrasadamServicesPageView from "@modules/prasadam-services/page";

export const metadata = {
  title: "Prasadam Services",
  description: "VVGC- Temple",
};

export default function Prasadam() {
  const prasadamListURL =
    "https://docs.google.com/document/d/e/2PACX-1vQOl-51RHrgRT9dbGG6A3xVG2SRBI-QmcXNn-0LiycySp_JuNTHfdG1BHLVUl6KAFPuPMvQ5s_WF0Fz/pub?embedded=true";

  const CustomPrasadamBookingFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform";

  return (
    <React.Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-prasadam ${cormorant.variable}`}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">
          Prasadam Services{" "}
        </h1>
      </div>

      <main className={`${cormorant.variable} mx-auto`}>
        {/* Kitchen Flyer */}
        <PrasadamServicesPageView />
      </main>
    </React.Fragment>
  );
}
