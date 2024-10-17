import GoshalaPageView from "@modules/goshala/page"

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/goshala.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/goshala.jpg`;
  return {
    title: "Goshala",
    description: "Help us Grow",
    metadataBase: new URL(`${process.env.BASE_URL}/goshala/`),
    openGraph: {
      title: "Goshala",
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
      title: "Goshala",
      description: "Help us Grow",
      images: [twitterURL],
    }
  }
}


export default function PageViewGoshala() {

  return (
    <GoshalaPageView />
  )
}