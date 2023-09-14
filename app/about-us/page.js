import React from "react";

export const metadata = {
    title: 'About Us',
    description: 'VVGC- Temple',
}

export default function About() {

    const vvgcCommitteeURL = 'https://docs.google.com/document/d/e/2PACX-1vQe4T-tgmaYJbxlv1lr3z38Dfykqmgxciujo1ib6nNIfvITGtixVWdjADc0mnexaetlkR9MjGQ86SXO/pub'

    return (
        <>
            <React.Fragment>
                <section className={`h-[50dvh] w-full bg-hero-about bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                    <div className="w-[280px] h-auto text-center"><h1>About Us</h1></div>
                </section>

                <div className="w-full bg-white">
                    <section className="block max-w-full relative h-[1000px] p-5 overflow-x-auto overflow-y-hidden">

                        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQe4T-tgmaYJbxlv1lr3z38Dfykqmgxciujo1ib6nNIfvITGtixVWdjADc0mnexaetlkR9MjGQ86SXO/pub?embedded=true" className="w-[900px] h-[1200px] md:mx-auto" ></iframe>

                    </section>
                </div>


            </React.Fragment>
        </>
    );
}
