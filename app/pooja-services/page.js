import React from "react";
import { Cormorant } from 'next/font/google';
import HeroOuter from "./poojastyles";

export const metadata = {
    title: 'Pooja Services',
    description: 'VVGC- Temple',
}

const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'sans' })

export default function Pooja() {
    return (
        <section className={cormorant.variable}>
            <HeroOuter>
                <div>Pooja Services</div>
            </HeroOuter>
        </section>
    );
}



