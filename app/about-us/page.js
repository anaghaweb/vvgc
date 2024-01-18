import React from "react";

import { cormorant } from "../fonts";

export const metadata = {
    title: 'About Us',
    description: 'VVGC- Temple',
}

export default function About() {

    const vvgcCommitteeURL = 'https://docs.google.com/document/d/e/2PACX-1vQe4T-tgmaYJbxlv1lr3z38Dfykqmgxciujo1ib6nNIfvITGtixVWdjADc0mnexaetlkR9MjGQ86SXO/pub?embedded=true';

    return (
        <>
            <React.Fragment>
                {/* Hero Section */}
                < div className={`flex justify-center  items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-about-us ${cormorant.variable} `}        
                >
                     <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">About Us</h1>
                </div>  
                 {/* <Hero_Image_Wrapper $bgimg={heroimgURL}>
                   
                    <div className={cormorant.variable}>
                       </div>
                    </Hero_Image_Wrapper> */}

                <div className="w-full bg-white">
                    <section className="block max-w-full relative h-[1000px] p-5 overflow-x-auto overflow-y-hidden">

                        <iframe src={vvgcCommitteeURL} className="w-[900px] h-[1200px] md:mx-auto" ></iframe>

                    </section>
                </div>


            </React.Fragment>
        </>
    );
}
