
import React from "react";
import RenderEvent from "@/Components/event";
import FetchData from "@/Components/fetchdata";
import { Cormorant } from "next/font/google";
import Regular from "@/Components/regular";
import { Zoomlink, StyledLink, Heading01 } from "./eventstyles";
import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = {
    title: 'Events',
    description: 'VVGC- Temple',
}
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'serif' });

export default async function Event() {

    const data = await FetchData();


    return (

        <>

            <section className={`h-96 md:h-[70vh] w-full bg-hero-event bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-sans font-[300] bg-opacity-70 m-[0.1px] ${cormorant.variable}`}>
                <div className="w-full h-auto text-center font-cormorant"><h1>VVGC San Martin Events</h1></div>
            </section>

            <main className="flex flex-col w-full items-center py-4 my-4 md:my-6">
                <section className="flex flex-col max-w-full lg:w-[900px] h-auto my-5 items-center text-center">
                    <h1 className="py-2 px-1 md:font-bold font-opensans text-sm md:text-xl text-red-950 md:underline">Watch events live on Youtube and Facebook</h1>
                    <hr />
                    <section className="my-5">
                        <iframe className="w-full h-auto md:w-[560px] md:h-[314px]" src="https://www.youtube.com/embed/5EsafKRdnqs" ></iframe>

                    </section>
                    <hr />
                    <section className="my-5">
                        <iframe className="w-full h-[314px] md:w-[560px]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvvgctemple%2Fvideos%2F964852681442973" ></iframe>
                    </section>

                    <Zoomlink>
                        <span>Zoom Link:</span>
                        <p>Meeting Number: 6233634720</p>
                        <p>Meeting Password : 040415</p>
                        <StyledLink href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQklUdz09#success" target="_blank"><span>Click Here to launch Zoom</span> <div><FaExternalLinkAlt size={20} color={'#BF4F74'} /></div></StyledLink>
                    </Zoomlink>


                </section>

                <section className={cormorant.variable}>
                    <Heading01>Event Details</Heading01>
                    <hr />
                    <RenderEvent data={data} />
                    <hr className="my-4" />
                </section>

                <hr />
                <section className="w-full lg:w-[900px] h-auto my-10 items-center text-center">

                    <Regular />
                </section>
            </main>

        </>
    );
};
