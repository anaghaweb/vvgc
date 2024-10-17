import React from "react";
import PrasadamServicesPageView from "@modules/prasadam-services/page";
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/left.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/left.jpg`;
  return {
    title: "Prasadam Services",
    description: "VVGC- Temple",
    metadataBase: new URL(`${process.env.BASE_URL}/prasadam-services/`),
    openGraph: {
      title: "Prasadam Services",
      description: "VVGC- Temple",
      images: [{
        url: opengraphURL,
        width: 1200,
        height: 630,
        alt: `About Us Image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Prasadam Services",
      description: "VVGC- Temple",
      images: [twitterURL],
    }
  }
}

export default function Prasadam() {
  // const prasadamListURL =
  //   "https://docs.google.com/document/d/e/2PACX-1vQOl-51RHrgRT9dbGG6A3xVG2SRBI-QmcXNn-0LiycySp_JuNTHfdG1BHLVUl6KAFPuPMvQ5s_WF0Fz/pub?embedded=true";

  // const CustomPrasadamBookingFormURL =
  //   "https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform";

  return (
    <React.Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl 
          leading-9 text-white font-playfair
          bg-hero-prasadam bg-center bg-no-repeat bg-cover m-px`}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-cormorant">
          Prasadam Services{" "}
        </h1>
      </div>

      <main className={`font-cormorant mx-auto`}>
        {/* Kitchen Flyer */}
        <PrasadamServicesPageView />
      </main>
    </React.Fragment>
  );
}
