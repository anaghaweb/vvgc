import { Metadata } from "next";
import PriestsPageViewTemplate from "@modules/priests";

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/inner.jpg`;
  const twitterURL = `https://vvgc.org/images/og/inner.jpg`;
  return {
    title: "VVGC Priests",
    description: "VVGC- Temple",
    metadataBase: new URL(`https://vvgc.org/priests/`),
    openGraph: {
      title: "VVGC Priests",
      description: "VVGC- Temple",
      images: [
        {
          url: opengraphURL,
          width: 1200,
          height: 630,
          alt: `About Us Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "VVGC Priests",
      description: "VVGC- Temple",
      images: twitterURL,
    },
  };
}

export default function PriestPageView() {
  return <PriestsPageViewTemplate />;
}
