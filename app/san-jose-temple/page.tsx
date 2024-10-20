import React from "react";
import LakshmiGanapathiPageTemplate from "@modules/lakshmi-ganapathi-temple/page";

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/sanjose.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/sanjose.jpg`;
  return {
    title: 'Lakshmi Ganapathi Temple',
    description: 'San Jose',
    metadataBase: new URL(`${process.env.BASE_URL}/san-jose-temple/`),
    openGraph: {
      title: 'Lakshmi Ganapathi Temple',
      description: 'San Jose',
      images: [{
        url: opengraphURL,
        width: 1200,
        height: 630,
        alt: `About Us Image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lakshmi Ganapathi Temple',
      description: 'San Jose',
      images: [twitterURL],
    }
  }
}

export default async function SanJose() {

  return (
    <React.Fragment>

      <LakshmiGanapathiPageTemplate />
    </React.Fragment>
  );
}


