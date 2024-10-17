import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@modules/common/components/ui/button"; 
import { Card, CardContent, CardHeader } from "@modules/common/components/ui/card";

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/inner.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/inner.jpg`;
  return {
    title: "VVGC Priests",
    description: "VVGC- Temple",
    metadataBase: new URL(`${process.env.BASE_URL}/priests/`),
    openGraph: {
      title: "VVGC Priests",
      description: "VVGC- Temple",
      images: [{
        url: opengraphURL,
        width: 1200,
        height: 630,
        alt: `About Us Image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "VVGC Priests",
      description: "VVGC- Temple",
      images: [twitterURL],
    }
  }
}

const goFundMeURL = 'https://www.gofundme.com/f/vvgc-priests-guru-dakshana?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer';

const placeholderImg = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914205/VVGC%20San%20Martin%20Temple%20Data/Priests/Hindu_priest_rfqtoy.jpg';

const heroimgURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0009_yam0oq.jpg';

export default function Priest() {


    return (
        <React.Fragment>

            < div className={`flex justify-center relative items-center w-full h-[75svh] 
            text-3xl leading-9 text-white  bg-hero-priests bg-center bg-no-repeat bg-cover m-px
                     `}
            >
                <h1 className="text-[1.9rem] md:text-[4.5rem] font-cormorant">VVGC Priests </h1>
            </div>
            <main className="font-roboto">

                <div className={`flex flex-col justify-center items-center`}>
                    <h2 className={`text-xl w-5/5 px-8 py-4 text-justify`}>Their selfless service forms the 
                    foundation of our temple's spiritual offerings, and their presence enriches our lives in
                     countless ways. We would like to express our deep appreciation for the priests and acknowledge 
                     the invaluable role they play in maintaining the sanctity and vibrancy of our Temple.
                    </h2>
                    <h3 className={`text-xl w-5/5 px-8 py-4 text-justify`}>
                        If you would like to give Guru Dakshana to our priests, you can do so using GoFundMe.
                    </h3>
                    <div className={`text-xl w-5/5 px-8 py-[1em]`}>
                  <Button className={`text-white font-[bold] text-2xl bg-orange-600`}> <Link  href={goFundMeURL} target="_blank">Click Here</Link > </Button> 
                    </div>
                </div>

                <div className={`w-full h-auto bg-[#eeeeee] mx-auto my-4`}>
                    <div className={`w-4/5 grid grid-cols-1 text-[green] gap-8 m-auto  md:grid-cols-2 md:w-full md:ga md:p-2`}>

                        {/* 1st priest */}
                        <Card className={` bg-white h-[350px]  sm:min-w-80 max-w-80 mx-auto flex flex-col  md:col-span-1 
                         md:h-auto md:p-2` }>
                            <div className="relative w-full h-[200px]">
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></div>

                            <div className={`flex flex-col justify-items-center items-center w-full max-w-full h-auto text-center p-6`}>
                                <h1>Pandit Ganesh Shasthry</h1>
                                <h3>9252097637</h3>

                            </div>
                        </Card>

                        {/* 2nd priest */}
                        <Card className={` bg-white h-[350px]  sm:min-w-80 max-w-80 mx-auto flex flex-col  md:col-span-1 
                         md:h-auto md:p-2` }>
                            <div className="relative w-full h-[200px]">
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></div>

                            <div className={`flex flex-col justify-items-center items-center w-full max-w-full h-auto text-center p-6`}>
                                <h1>Pandit </h1>
                                <h1>Sivasankar Hemmanur </h1>
                                <h3>408-724-3577</h3>

                            </div>
                        </Card>


                        {/* 3rd priest */}
                        <Card className={` bg-white h-[350px]  sm:min-w-80 max-w-80 mx-auto flex flex-col  md:col-span-1 
                         md:h-auto md:p-2` }>
                            <div className="relative w-full h-[200px]">
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></div>

                            <div className={`flex flex-col justify-items-center items-center w-full max-w-full h-auto text-center p-6`}>
                                <h1>Pandit Bhaskaran </h1>
                                <h1>Ganeshan Janardhan </h1>
                                <h3>669-350-5788</h3>

                            </div>
                        </Card>
                        {/* 4th priest */}

                        <Card className={` bg-white h-[350px]  sm:min-w-80 max-w-80 mx-auto flex flex-col  md:col-span-1 
                         md:h-auto md:p-2` }>
                            <div className="relative w-full h-[200px]">
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></div>

                            <div className={`flex flex-col justify-items-center items-center w-full max-w-full h-auto text-center p-6`}>
                                <h1>Pandit Krishnamurthy 
                                </h1>
                                <h3>860-262-2478</h3>

                            </div>
                        </Card>


                    </div>
                </div>
            </main>



        </React.Fragment>
    );
}


