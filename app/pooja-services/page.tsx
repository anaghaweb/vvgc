import React, { Fragment } from "react";
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
      
      <main className={`font-cormorant m-auto `}>
       
        <PoojaServicePage />
      </main>
    </Fragment>
  );
}
