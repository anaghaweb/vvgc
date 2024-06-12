import React from "react";
import { cormorant } from "../fonts";
import Link from "next/link";
import Divider from "../../Components/divider";
import Image from "next/image";


export const metadata = {
    title: 'Prasadam Services',
    description: 'VVGC- Temple',
}

export default function Prasadam() {

    const prasadamListURL = 'https://docs.google.com/document/d/e/2PACX-1vQOl-51RHrgRT9dbGG6A3xVG2SRBI-QmcXNn-0LiycySp_JuNTHfdG1BHLVUl6KAFPuPMvQ5s_WF0Fz/pub?embedded=true';

    const CustomPrasadamBookingFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform';

    return (
        <React.Fragment>
            < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-prasadam ${cormorant.variable}`}>
                <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Prasadam Services </h1>
            </div>

            <main className={`${cormorant.variable} mx-auto`}>

                    {/* Kitchen Flyer */}
            <section className="flex flex-col w-full py-3 my-3 px-2 mx-auto">
                    <div>
                        <p className="text-center text-xl md:text-3xl font-[cormorant] ">An appeal for Standard Kitchen</p>
                    </div>
                    <Divider />
                    
                    
                    <div className="relative overflow-hidden block mx-auto w-full h-48 md:w-3/4 lg:w-1/2 md:h-[400px] cursor-pointer">
                    <Link href="/images/prasadam-services/kitchen/standard-kitchen.webp" target="_blank">
                        <Image fill alt="kitchen flyer" src="/images/prasadam-services/kitchen/standard-kitchen.webp" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-scale-down"/>
                        </Link>
                    </div>   
                     
                    <span className="text-center">(Click to enlarge)</span>      
                </section>

                <section className="flex flex-col w-[full] mx-auto max-w-screen-lg h-auto my-5 p-5 gap-2 items-center text-center  shadow-slate-900 drop-shadow-md rounded-sm bg-white">
                    <p className="text-xl md:text-[1.9rem] font-[cormorant]">Order Custom Prasadam</p>
                    <Divider/>
                    <p>Daily Maha Prasadam offered to all deities: Pongal, Jaggery Pongal, Puliyotharai (Tamarind Rice).
                        Maha prasadam will be served daily as annadhanam (Preethi Bhoj) at VVGC San Martin to everyone.
                    </p>
                    <hr/>
                    <p>Separately, Devotees can place custom order of Maha prasadam using the form below. Custom orders are available for pickup at VVGC San Martin or San Jose Temple.</p>                    
                    <hr />
                    <Link className="p-3 text-xl bg-blue-100 w-full" href={CustomPrasadamBookingFormURL} target="_blank">
                   
                        <span className="text-xl text-blue-900 cursor-pointer">Click here to book your custom prasadam Order</span>
                    
                    </Link>
                </section>

               

                <hr/>

                <section className="block max-w-full relative h-[3500px] p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={prasadamListURL} className="w-[850px] md:m-auto h-[3500px]"></iframe>
                </section>

            </main>
        </React.Fragment>
    );
}

const CustomPrasadamBookingForm = () => {


    // <iframe
    //     src="https://docs.google.com/forms/d/e/1FAIpQLSdKe1bGct5Imy89sgXoWGftT8HGTGOgmN0flzs65QWKxDl_Uw/viewform?embedded=true"
    //     max-width="100%"
    //     width="100%"
    //     height="1700"
    //     frameborder="0"
    //     marginheight="0"
    //     marginwidth="0"
    //     padding-bottom="1px"
    // >
    //     Loading…
    // </iframe>


}