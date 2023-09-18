import React from "react";
import { Hero_Image_Wrapper } from "../GlobalStyles/globalstyles";
import { cormorant } from "../fonts";

export const metadata = {
    title: 'About Us',
    description: 'VVGC- Temple',
}

export default function About() {

    const vvgcCommitteeURL = 'https://docs.google.com/document/d/e/2PACX-1vQe4T-tgmaYJbxlv1lr3z38Dfykqmgxciujo1ib6nNIfvITGtixVWdjADc0mnexaetlkR9MjGQ86SXO/pub?embedded=true';

    const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0009_yam0oq.jpg';

    return (
        <>
            <React.Fragment>
                {/* Hero Section */}
                <Hero_Image_Wrapper $bgimg={heroimgURL} >
                    <div className={cormorant.variable}>
                        <h1>About Us</h1></div>
                </Hero_Image_Wrapper>

                <div className="w-full bg-white">
                    <section className="block max-w-full relative h-[1000px] p-5 overflow-x-auto overflow-y-hidden">

                        <iframe src={vvgcCommitteeURL} className="w-[900px] h-[1200px] md:mx-auto" ></iframe>

                    </section>
                </div>


            </React.Fragment>
        </>
    );
}
