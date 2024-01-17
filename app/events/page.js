import React from "react";
import RenderEvent from "@/components/event";
import { FetchData } from "@/components/fetchdata";
import { cormorant } from "../fonts";
import Regular from "@/components/regular";
import { Zoomlink, DonateLink, Heading01 } from "./eventstyles";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Hero_Image_Wrapper } from "../GlobalStyles/globalstyles";
import Link from "next/link";
import Youtube from "@/lib/icons/youtube";
import Zoom from "@/lib/icons/zoom";
import FaceBook from "@/lib/icons/facebook";
import { Card,  CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card";
   

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

            <main className="mx-auto py-4 my-4 ">
                
                <Card className="flex flex-col max-w-full lg:w-[900px] h-auto my-5 mx-auto">
                    <CardHeader className="py-2 px-1 font-opensans text-4xl text-blue-900 ">Watch events live</CardHeader>
                    <hr />
                    <CardContent className="w-full p-2 h-auto min-h-[100%] md:h-60 md:grid grid-cols-3 rounded border-slate-400 border-solid shadow-inner bg-gray-100">
                        <div className=" sm:min-h-48 col-span-1 flex flex-col justify-start items-center">
                            <Link href="https://www.youtube.com/@vaidicavidhyaganapathicent2187/streams" target="_blank"><span className="text-4xl text-sky-950">Youtube</span>
                            <div><Youtube /></div></Link>
                        </div>
                        <div className=" sm:min-h-48 col-span-1 flex flex-col justify-start items-center">
                            <Link href="https://www.facebook.com/vvgctemple" ><span className="text-4xl text-sky-950">Facebook</span><div><FaceBook /></div></Link>
                        </div>
                        <div className=" sm:min-h-48 col-span-1 flex flex-col justify-start items-center">
                           
                        <span className="text-4xl text-sky-950">Zoom</span>
                        <Link href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQklUdz09#success" target="_blank"> <div><Zoom /></div></Link>
                        <p>Meeting ID: 6233634720</p>
                        <p> Password : 040415</p>
                        <div className="flex gap-1 items-center">
                        
                        </div>
                        
                        </div>
                    </CardContent>
                  


                </Card>
                

                <section className={cormorant.variable}>
               
                    
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
