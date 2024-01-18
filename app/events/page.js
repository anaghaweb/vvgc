import React from "react";
import RenderEvent from "@/Components/event";
import { FetchData } from "@/Components/fetchdata";
import { cormorant } from "../fonts";
import Regular from "@/Components/regular";
import Link from "next/link";
import Youtube from "@/lib/icons/youtube";
import Zoom from "@/lib/icons/zoom";
import FaceBook from "@/lib/icons/facebook";
import { Card,  CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "../../Components/ui/card";
   

export default async function Event() {

    const data = await FetchData();
    const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0006_vhnxgu.jpg';


    return (

        <>

< div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-event ${cormorant.variable} `}        
                >
                     <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Events </h1>
                </div> 
            <main className="mx-auto py-4 my-4 bg-neutral-100">               
                <Card className="flex flex-col max-w-full lg:w-[900px] h-auto my-5 mx-auto">
                    <CardHeader className=" font-opensans text-center lg:text-left text-2xl md:text-4xl text-blue-900 ">Watch events live</CardHeader>
                    <hr />
                    <CardContent className="w-full p-2 h-auto min-h-[100%] md:h-60 md:grid grid-cols-3 rounded border-slate-400 border-solid shadow-inner">
                        <Card className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                            <Link href="https://www.youtube.com/@vaidicavidhyaganapathicent2187/streams" target="_blank"><span className="text-2xl md:text-4xl text-sky-950">Youtube</span>
                            <div className="flex justify-center"><Youtube /></div></Link>
                        </Card>
                        <Card className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                            <Link href="https://www.facebook.com/vvgctemple" ><span className="text-2xl md:text-4xl text-sky-950">Facebook</span><div className="flex justify-center"><FaceBook /></div></Link>
                        </Card>
                        <Card className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                       <span className="text-2xl md:text-4xl text-sky-950">Zoom</span>
                        <Link href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQklUdz09#success" target="_blank"> <div className="flex justify-center"><Zoom /></div></Link>
                        <p>Meeting ID: 6233634720</p>
                        <p> Password : 040415</p>
                        <div className="flex gap-1 items-center">
                      </div>
                        </Card>
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
