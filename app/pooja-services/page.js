import React from "react";
import { cormorant } from "../fonts"
import Link from "next/link";
import Divider from "../../Components/divider";

export const metadata = {
    title: 'Pooja Services',
    description: 'VVGC- Temple',
}

export default function Pooja() {

    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScUfVMwLiLHa8UuEFO9rz1-k9JcK01AWD7PMu0DP0NBxcbpAQ/viewform';

    const iframeURL = "https://docs.google.com/document/d/e/2PACX-1vRI8sKKzJyvmKWd7my0oH1yju-9ZpLDBm8IgbRcfvpEUa_bpyYjTLUYZtM5mQoR1Q/pub?embedded=true";

    



    return (
        <React.Fragment>
            < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-pooja ${cormorant.variable} `}        
                >
                     <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Pooja Services </h1>
                </div> 
            <main className={`${cormorant.variable} m-auto `}>
                <section className="flex flex-col w-full max-w-screen-lg text-[1rem]  h-auto mx-auto my-10 p-5  shadow-slate-900 drop-shadow-md rounded-sm bg-slate-100">
                  <h3 className="text-[1.9rem] font-[cormorant]">Perform Events</h3>
                    <Divider />
                    <p className="sm:font-medium ">
                  At VVGC, we perform a variety of poojas and events for our devotees. Our priests can conduct the events, 
                  both at home or at the temple premises.
                    </p> 
                    
                     <span >Please provide us with the details of the event you would like to perform by filling this : </span> 
                     <Link href={formURL} target="_blank">
                        <span className="text-2xl text-orange-600 font-bold cursor-pointer underline">form</span>
                        </Link> 
                     <p> One of our priests will reach out to you regarding the same.</p> 
                    
                        <div className="mt-1 p-3 bg-blue-200">
                        <p>
                       Note: that these are the dollar amounts that are set by the temple. Devotees are welcome to 
                       contribute additional dakshina directly to the priests during the event.
                        </p> 
                        </div>
                       
                    
                </section>
                <section className="flex flex-col w-full max-w-screen-lg h-auto mx-auto my-10 p-5 gap-2  text-black shadow-slate-900 drop-shadow-md rounded-sm bg-slate-100">
                    
                    <ul>
                        <li className="md:text-2xl font-[cormorant]">
                            <h3 className="text-[1.9rem]">For Poojas and Rituals Contact:</h3></li>
                        <Divider />
                        
                        <li>Pandit Ganesh Shasthry</li>
                        <li>880, E Fremont Ave, Apt#302,</li>
                        <li>Sunnyvale, CA 94087</li>
                        <li>Home: 4082455443</li>
                        <li>Cell: 9252097637</li>
                        <li>Email: srikalahatheeswara@yahoo.com</li>
                    </ul>
                </section>
                <section className="block max-w-full relative h-[1300px] p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={iframeURL} className="w-[700px] md:m-auto h-[1300px]"></iframe>
                </section>
            </main>
        </React.Fragment>
    );
}



