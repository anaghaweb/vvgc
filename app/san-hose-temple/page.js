import React from "react";
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'serif' });
export const metadata = {
    title: 'San Jose Temple',
    description: 'Second Branch',
}

export default function SanJose() {
    return (
        <React.Fragment>
            <section className={`${cormorant.variable} h-[50dvh] md:h-[70vh] w-full bg-hero-pattern bg-center bg-no-repeat bg-cover flex justify-center items-center text-5xl md:text-6xl text-white  font-[500] bg-opacity-70`}>
                <div className="w-[280px] h-auto text-center font-cormorant"><h1>Welcome to San Jose Temple</h1></div>
            </section>
        </React.Fragment>
    );
}
