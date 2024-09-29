import React from "react";
import { cormorant } from "@lib/fonts/fonts";
import AboutUsPage from "@modules/about-us/page";
import { Metadata } from "next";

// export const metadata = {
//   title: "About Us",
//   description: "VVGC- Temple",
// };

export const metadata:Metadata = {
  title: 'Social Metadata - Cruip Tutorials',
  description:
    "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
  openGraph: {
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
    type: "article",
    url: "https://vvgc-test.vercel.app/about-us/opengraph-image",
    images: [
      {
        url: "https://vvgc-test.vercel.app/about-us/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
    description:
      "A guide on how to optimize SEO with static and dynamic metatags using Next.js 13's new Metadata API.",
      
    images: ["https://vercel-test.vercel.app/api/og?title=Testing Twitter Card for VVGC"],
  },
} 


export default function About() {
  return (
         <React.Fragment>
        {/* Hero Section */}
        <div
          className={`flex justify-center items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-about-us font-cormorant `}
        >
          <h1 className="text-[1.9rem] md:text-[4.5rem] ">
            About Us
          </h1>
        </div>
        {/* Page Content */}
        <main>
          <AboutUsPage />
        </main>
      </React.Fragment>
    
  );
}
