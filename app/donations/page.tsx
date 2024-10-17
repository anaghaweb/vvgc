import React from "react";
import DonationsPageView from "@modules/donations/page";

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = "https://vvgc.org/images/og/donation.jpg";
  const twitterURL = "https://vvgc.org/images/og/donation.jpg";
  return {
    title: "Donations",
    description: "Help us Grow",
    metadataBase: new URL(`https://vvgc.org/donations`),
    openGraph: {
      title: "Donations",
      description: "Help us Grow",
      images: [{
        url: opengraphURL,
        width: 1200,
        height: 630,
        alt: `About Us Image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Donations",
      description: "Help us Grow",
      images: [twitterURL],
    }
  }
}

export default function Donations() {
  return (
    <React.Fragment>
      <div
        className={`flex justify-center relative items-center 
            w-full h-[75svh] text-3xl leading-9 text-white bg-center 
            bg-no-repeat bg-cover m-px bg-hero-donations`}
      >
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-cormorant">
          Support Us
        </h1>
      </div>
      {/* main section */}
      <main className={`mx-auto w-full max-w-full`}>
        <DonationsPageView />
      </main>
    </React.Fragment>
  );
}
