import React, { Fragment } from "react";
import { cormorant } from "@lib/fonts/fonts";
import PoojaServicePage from "@modules/pooja-services/page";

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/right.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/right.jpg`;
  return {
    title: "Pooja Services",
    description: "VVGC- Temple",
    metadataBase: new URL(`${process.env.BASE_URL}/pooja-services/`),
    openGraph: {
      title: "Pooja Services",
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
      title: "Pooja Services",
      description: "VVGC- Temple",
      images: [twitterURL],
    }
  }
}

export default function PoojaServices() {
  return (
    <Fragment>
      <div
        className={`flex justify-center relative items-center w-full h-[75svh] 
          bg-hero-pooja bg-center bg-no-repeat bg-cover
          text-3xl leading-9 text-white font-cormorant
           m-px `}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-cormorant">
          Pooja Services{" "}
        </h1>
      </div>
      <main className={`font-cormorant m-auto `}>
        <PoojaServicePage />
      </main>
    </Fragment>
  );
}
