import React from "react";
import { cormorant } from "../fonts";
import { FetchData } from "../../Components/fetchdata";
import SponsorEvent from "../../Components/sponsor";
import Link from 'next/link'
import Youtube from "../../lib/icons/youtube";
import Zoom from "../../lib/icons/zoom";
import FaceBook from "../../lib/icons/facebook";
import { Card, CardHeader } from "../../Components/ui/card";
   

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
           < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-san-jose ${cormorant.variable} `}        
                >
                     <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Welcome to VVGC San Jose </h1>
                </div>
            <main className={`${cormorant.variable} w-full mx-auto`} >
            <Card  className="flex flex-col max-w-full lg:w-[900px] bg-yellow-100 h-auto my-5 mx-auto">
                    <CardHeader  className=" font-opensans text-center lg:text-left text-2xl md:text-4xl text-blue-900 ">Watch events live</CardHeader>
                    <hr />
                    <div className="w-full p-2 h-auto min-h-[100%] md:h-60 md:grid grid-cols-3 rounded border-slate-400 border-solid shadow-inner">
                        <div className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                            <Link href="https://www.youtube.com/@vaidicavidhyaganapathicent2187/streams" target="_blank"><span className="text-2xl md:text-4xl text-sky-950">Youtube</span>
                            <div className="flex justify-center"><Youtube /></div></Link>
                        </div>
                        <div className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                            <Link href="https://www.facebook.com/vvgctemple" ><span className="text-2xl md:text-4xl text-sky-950">Facebook</span><div className="flex justify-center"><FaceBook /></div></Link>
                        </div>
                        <div className=" h-36 sm:min-h-48 col-span-1 flex flex-col justify-center items-center">
                           
                        <span className="text-2xl md:text-4xl text-sky-950">Zoom</span>
                        <Link href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQklUdz09#success" target="_blank"> <div className="flex justify-center"><Zoom /></div></Link>
                        <p>Meeting ID: 6233634720</p>
                        <p> Password : 040415</p>
                        <div className="flex gap-1 items-center">
                        
                        </div>
                        
                        </div>
                    </div>
                  


                </Card>

               

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


