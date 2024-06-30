import React from "react";
import { cormorant } from "app/fonts";
import AboutUsPage from "@modules/about-us/page";
import type { Metadata } from "next";
export const metadata:Metadata = {
  title: "About Us",
  description: "VVGC- Temple",
};

export default function About() {
  return (
         <React.Fragment>
        {/* Hero Section */}
        <div
          className={`flex justify-center  items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-about-us ${cormorant.variable} `}
        >
          <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">
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
