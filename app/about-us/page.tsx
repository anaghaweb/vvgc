import React from "react";
import { cormorant } from "@lib/fonts/fonts";
import AboutUsPage from "@modules/about-us/page";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Us",
  description: "VVGC- Temple",
};


export default function About() {
  return (
         <React.Fragment>
        {/* Hero Section */}
        <div
        className={`flex justify-center relative items-center w-full h-[75svh] 
          text-3xl leading-9 text-white bg-hero-about-us bg-center bg-no-repeat bg-cover m-px
                     font-playfair bg-[rgb(0,0,0,0.8)]`}
      >
        <h1 className="text-5xl md:text-7xl font-[playfair] text-wrap font-light text-center ">
         About VVGC{" "}
        </h1>
      </div>
        {/* Page Content */}
        <main>
          <AboutUsPage />
        </main>
      </React.Fragment>
    
  );
}
