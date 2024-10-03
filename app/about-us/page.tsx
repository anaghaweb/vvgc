import React from "react";
import { cormorant } from "@lib/fonts/fonts";
import AboutUsPage from "@modules/about-us/page";
import { Metadata } from "next";
import HeroCard from "@modules/home/components/Hero-section";

export const metadata:Metadata = {
  title: "About Us",
  description: "VVGC- Temple",
};


export default function About() {
  return (
         <React.Fragment>
        {/* Hero Section */}
        <HeroCard page="aboutus"/>
        {/* Page Content */}
        <main>
          <AboutUsPage />
        </main>
      </React.Fragment>
    
  );
}
