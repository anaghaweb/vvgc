
import React from "react";
import RenderEvent from "@/Components/event";
import FetchData from "@/Components/fetchdata";
import { cormorant } from "../fonts";
import Regular from "@/Components/regular";
import { Zoomlink, DonateLink, Heading01 } from "./eventstyles";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Hero_Image_Wrapper } from "../GlobalStyles/globalstyles";
import Link from "next/link";

export const metadata = {
    title: 'Events',
    description: 'VVGC- Temple',
}

export default async function Event() {

    const data = await FetchData();
    const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0006_vhnxgu.jpg';


    return (

        <>

            <Hero_Image_Wrapper $bgimg={heroimgURL}>
                <div className={cormorant.variable}><h1>VVGC San Martin Events</h1></div>
            </Hero_Image_Wrapper>

            <main className="mx-auto py-4 my-4 md:my-6">
                <section className="flex flex-col max-w-full lg:w-[900px] h-auto my-5 mx-auto text-center">
                    <h1 className="py-2 px-1 md:font-bold font-opensans text-sm md:text-xl text-red-950 md:underline">Watch events live on Youtube and Facebook</h1>
                    <hr />
                    <section className="my-5 mx-auto text-lg sm:underline text-blue-700">
                        <Link href="https://www.youtube.com/@vaidicavidhyaganapathicent2187/streams">Click here to visit our Youtube Channel</Link>

                    </section>
                    <hr />
                    <section className="my-5 mx-auto">
                        <iframe className="w-full h-[316px] md:w-[560px]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvvgctemple%2Fvideos%2F964852681442973" ></iframe>
                    </section>

                    <Zoomlink>
                        <span>Zoom Link:</span>
                        <p>Meeting Number: 6233634720</p>
                        <p>Meeting Password : 040415</p>
                        <DonateLink href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQklUdz09#success" target="_blank"><span>Click Here to launch Zoom</span> <div><FaExternalLinkAlt size={20} color={'#BF4F74'} /></div></DonateLink>
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
