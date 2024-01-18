import React from "react";
import { cormorant } from "../fonts";
import { H1_Wrapper, Hero_Image_Wrapper } from "../GlobalStyles/globalstyles";
import {FetchData} from "@/Components/fetchdata";
import SponsorEvent from "@/Components/sponsor";
import Link from 'next/link'


export const metadata = {
    title: 'San Jose Temple',
    description: 'Second Branch',
}

export default async function SanJose() {

    const data = await FetchData()

    const IframeURL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d943.8068848783809!2d-121.83776058292534!3d37.28149680729865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e324114e97d6d%3A0x6669fb128082a9f3!2sSri%20Lakshmi%20Ganapathi%20Temple!5e0!3m2!1sen!2sin!4v1690648613216!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691930949/VVGC%20San%20Martin%20Temple%20Data/Gallery/multi-colored-elephant-statue-symbolizes-hinduism-spirituality-beauty-generated-by-ai_hquonb.jpg';

    return (
        <React.Fragment>
            <Hero_Image_Wrapper $bgimg={heroimgURL}>
                <div className={cormorant.variable}><h1>Welcome To San Jose Temple</h1></div>
            </Hero_Image_Wrapper>
            <main className={`${cormorant.variable} w-full mx-auto`} >
                <H1_Wrapper>
                    <h1>Watch Events Online</h1>
                </H1_Wrapper>

                <section className="flex flex-col max-w-full w-full h-auto my-5 mx-auto text-center">
                    <h1 className="py-2 px-1 md:font-bold font-opensans text-sm md:text-xl text-red-950 md:underline">Watch events live on Youtube and Facebook</h1>
                    <hr />
                    <section className="my-5 mx-auto text-lg sm:underline text-blue-700">
                        <Link href="https://www.youtube.com/@vaidicavidhyaganapathicent2187/streams">Click here to visit our Youtube Channel</Link>

                    </section>
                    <hr />
                    <section className="my-5 mx-auto">
                        <iframe className="w-full h-[316px] md:w-[560px]" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvvgctemple%2Fvideos%2F964852681442973" ></iframe>
                    </section>
                </section>

                <section className="w-[100%] h-auto md:h-auto  md:p-10">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-cormorant text-red-950 ">We invite you to attends these upcoming events</h1>
                    </div>
                    <hr className="h-[2px] bg-red-800 my-2 " />
                    <div className="my-4 w-[100%] grid grid-cols-1 md:grid-cols-2 ">
                        {data.content.map((data, index) => {

                            return (data.homepage === 'sponsor' ? <SponsorEvent data={data} key={index} /> : "")
                        })
                        }
                    </div>

                    <section className="my-5">
                        <iframe className="w-full h-[200px] md:h-[400px]" src={IframeURL} ></iframe>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}


