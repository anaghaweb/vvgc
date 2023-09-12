import React from "react";
import RenderEvent from "@/Components/event";
import FetchData from "@/Components/fetchdata";
import { Cormorant } from "next/font/google"
export const metadata = {
    title: 'Events',
    description: 'VVGC- Temple',
}
const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: 'serif' });

export default async function Event() {

    const data = await FetchData();

    return (

        <>
            <React.Fragment>
                <section className={`h-96 md:h-[70vh] w-full bg-hero-event bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-sans font-[300] bg-opacity-70 m-[0.1px] ${cormorant.variable}`}>
                    <div className="w-full h-auto text-center font-cormorant"><h1>VVGC San Martin Events</h1></div>
                </section>
            </React.Fragment>
            <main className="flex flex-col w-full items-center py-4 my-4 md:my-6">
                <section className="flex flex-col w-[900px] h-auto my-10 items-center text-center">
                    <h1 className="py-2 px-1 md:font-bold font-opensans text-sm md:text-xl text-red-950 md:underline">Watch events live on Youtube and Facebook</h1>
                    <hr />
                    <section className="my-5">
                        <iframe className="w-[560px] h-[315px]" src="https://www.youtube.com/embed/2cPHTccmXbc?si=9zoHXb8Jp4uc1jRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </section>
                    <hr />
                    <section className="my-5">
                        <iframe className="w-full h-[314px] md:w-[560px]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvvgctemple%2Fvideos%2F1693276331153085%2F&show_text=false&width=560&t=0" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </section>
                    <hr />
                </section>

                <section>
                    <h1 className="py-2 px-1 md:font-semibold font-cormorant text-sm md:text-4xl text-red-950 " >Event Details</h1>
                    <hr />
                    <RenderEvent data={data} />
                    <hr className="my-4" />
                </section>

            </main>

        </>
    );
}
