import React from "react";

export const metadata = {
    title: 'About Us',
    description: 'VVGC- Temple',
}

export default function About() {
    return (
        <>
            <React.Fragment>
                <section className={`h-[50dvh] w-full bg-hero-about bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                    <div className="w-[280px] h-auto text-center"><h1>About Us</h1></div>
                </section>
            </React.Fragment>
        </>
    );
}
