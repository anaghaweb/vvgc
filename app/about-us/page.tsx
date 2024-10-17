import React from "react";
import { cormorant } from "@lib/fonts/fonts";
import AboutUsPage from "@modules/about-us/page";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: "About Us",
  description: "VVGC- Temple",
};
export async function generateMetadata():Promise<Metadata>{
  const opengraphURL = `${process.env.BASE_URL}/about-us/opengraph-image`;
  const twitterURL = `${process.env.BASE_URL}/about-us/twitter-image`;
    return {
      title: "About Us",
  description: "VVGC- Temple",
       metadataBase: new URL(`${process.env.BASE_URL}/about-us`),
       openGraph:{
        title: "About Us",
        description: "VVGC- Temple",
        images:[{
          url:opengraphURL,
          width: 1200,
          height: 630,
          alt: `About Us Image`,
        }],        
       },
       twitter:{
        card:'summary_large_image',
        title: "About Us",
        description: "VVGC- Temple",
        images:[twitterURL],
       }
    }
}


export default function About() {
  return (        
       
        <main>
              <div
        className={`flex justify-center relative items-center w-full h-[75svh] 
          text-3xl leading-9 text-white bg-hero-home bg-center bg-no-repeat bg-cover m-px
                     font-playfair bg-[rgb(0,0,0,0.8)]`}
      >
        <h1 className="text-5xl md:text-7xl font-[playfair] text-wrap font-light text-center ">
          About Us{" "}
        </h1>
      </div>     
        
          <AboutUsPage />
        </main>
      
    
  );
}
