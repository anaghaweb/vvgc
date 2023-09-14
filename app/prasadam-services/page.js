import React from "react";
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'sans' })

import Link from "next/link";


export const metadata = {
    title: 'Prasadam Services',
    description: 'VVGC- Temple',
}

export default function Prasadam() {

    const prasadamListURL = 'https://docs.google.com/document/d/e/2PACX-1vQOl-51RHrgRT9dbGG6A3xVG2SRBI-QmcXNn-0LiycySp_JuNTHfdG1BHLVUl6KAFPuPMvQ5s_WF0Fz/pub?embedded=true';

    const CustomPrasadamBookingFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform';


    return (
        <React.Fragment>
            <section className={`h-[70vh] w-full bg-hero-prasadam bg-center bg-no-repeat bg-cover flex justify-center items-center text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                <div className="w-[280px] h-auto text-center"><h1>Prasadam Services</h1></div>
            </section>

            <main className={`${cormorant.variable} m-auto`}>
                <section className="flex flex-col w-[full] md:w-[900px] h-auto mx-auto my-10 p-5 gap-2 justify-center items-center text-center font-sans font-normal text-base  text-black shadow-slate-900 drop-shadow-md rounded-sm bg-white">

                    <h2>Daily Maha Prasadam offered to all deities: Pongal, Jaggery Pongal, Puliyotharai (Tamarind Rice).
                        Maha prasadam will be served daily as annadhanam (Preethi Bhoj) at VVGC San Martin to everyone.
                    </h2>

                    <hr />

                    <h3>   Separately, Devotees can place custom order of Maha prasadam using the form below. Custom orders are available for pickup at VVGC San Martin or San Jose Temple.</h3>

                    <hr />

                    <Link href={CustomPrasadamBookingFormURL} target="_blank"><span className="text-2xl text-orange-600 font-bold cursor-pointer">Click here to book your custom prasadam Order</span></Link>

                </section>

                <hr />

                <section className="block max-w-full relative h-[3500px] p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={prasadamListURL} className="w-[850px] md:m-auto h-[3500px]"></iframe>
                </section>

            </main>
        </React.Fragment>
    );
}

const CustomPrasadamBookingForm = () => {


    <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdKe1bGct5Imy89sgXoWGftT8HGTGOgmN0flzs65QWKxDl_Uw/viewform?embedded=true"
        max-width="100%"
        width="100%"
        height="1700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        padding-bottom="1px"
    >
        Loading…
    </iframe>


}