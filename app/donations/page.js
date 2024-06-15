import React from "react"
import { cormorant, opensans } from "../fonts";
import Image from "next/image";
import Divider from "../../Components/divider";

import Link from "next/link";
import { Card } from "../../Components/ui/card";
import { TfiPencilAlt } from "react-icons/tfi";


export const metadata = {
    title: 'Donations',
    description: 'Help us Grow',
}

export default function Donations() {

    const divine_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';

    const go_dhanam_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914207/VVGC%20San%20Martin%20Temple%20Data/temple-donation-image-1_fb8q9e.jpg';

    const godhanam_donate_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1694926304/VVGC%20San%20Martin%20Temple%20Data/VVGC/GoDanam_ar6vy1.jpg';

    const TPN = "https://res.cloudinary.com/dixkqgqsi/image/upload/v1717667737/VVGC%20Images/TPN_xouysf.png";

    return (
        <React.Fragment>
            < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-donations
                     
                     `}
            >
                <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Support Us</h1>
            </div>
            {/* main section */}


            <main className={`mx-auto w-full max-w-full`}>
                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6 px-3`}>
                        <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Build the Divine Abode</h1>
                        <h3 className={`leading-8 my-2 md:text-xl md:text-center py:2 md:py-5`}>Help Fund the Expansion and Maintenance of VallabhaMaha Ganapathi Temple</h3>
                        <h3 className={`leading-8 md:text-xl md:text-center  py:2 md:py-5`}>VVGC is a registered non-profit organization
                            (CA Tax ID: 61-1449457) and your donations are always 100% tax deductible.</h3>
                    </div>
                    <div className={`relative col-span-1 w-full max-w-full h-auto md:col-span-2`}>
                        <Image src={`${divine_img}`} alt="Support Us" fill quality={75} sizes={'100vw'}
                            className=" object-contain m-auto" />
                    </div >
                </div>
                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div className="w-full">
                        <h1 className={`text-2xl leading-8 font-[cormorant] font-medium `}>Choose your payment type</h1>
                        <Divider />
                    </div>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <div className="text-center text-base font-normal md:px-5 md:w-3/4">
                            <h3 className={` md:text-xl text-justify md:text-center md:py-5`}>
                                Donate using PayPal Giving Fund (requires PayPal account) and 100% of
                                your donations will go to the Temple. Click below</h3>
                        </div>

                        <Link href="https://www.paypal.com/US/fundraiser/charity/1269532" target="blank">
                            <Card className="p-3 bg-yellow-300 w-72">
                                <div className="mx-auto my-2 w-full ">
                                    <p className=" relative ">
                                        Click Here to donate through</p>
                                    <div className="relative w-32 h-10 mx-auto">
                                        <Image alt="paypal logo" src="/icons/paypal.png" className="object-scale-down" fill />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div >
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <div className="text-center text-base font-normal md:px-5 md:w-3/4">
                            <h3 className={` md:text-xl text-justify md:text-center md:py-5`}>
                                If you prefer to donate without logging into PayPal or if you don't have a PayPal account, click on the Donate button below. After a small credit/debit card processing fee, the rest of your donations will go to the Temple.</h3></div>

                        <Link href="https://www.paypal.com/donate/?hosted_button_id=ZPJQND4F58NHE" target="blank">
                            <Card className="p-3 bg-yellow-300 w-72">
                                <div className="mx-auto my-2 w-full ">
                                    <p className=" relative ">
                                        Donate using Debit / Credit Cards </p>
                                    <div className="relative flex justify-between items-center w-32 h-10 mx-auto gap-x-1">
                                        <div className="relative w-16 h-10"><Image alt="paypal logo" src="/icons/003-american express.svg" className="object-scale-down" fill /></div>
                                        <div className="relative w-16 h-10"><Image alt="paypal logo" src="/icons/master-card.png" className="object-scale-down" fill /></div>
                                        <div className="relative w-16 h-10"> <Image alt="paypal logo" src="/icons/visa.png" className="object-scale-down" fill /></div>
                                    </div>
                                </div>
                            </Card>
                        </Link>


                    </div>

                </div>


                {/* PHASE 2 CONSTRUCTION LOAN PLEDGE SECTION */}


                {/* <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div>
                        <h1 className={`text-xl leading-8 my-2 font-[cormorant] font-medium py:2`}>
                            VVGC San Martin Loan Program</h1>
                    </div>
                    <Divider />
                    <div>
                        <h3 className={`my-2 md:w-3/4 mx-auto text-left md:text-center py:2 `}>
                            If you would like to extend a loan to VVGC, you do so for a minimum of $10,000 on a 4 year term or more. VVGC will pay a 5% intereset rate at the end of the term.
                            <Link className={`text-orange-500 font-[bold]`} href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505" target="_blank">
                                <span> Click here</span></Link> for the Temple promissory note. Please call the Temple for any qustions about this loan program.</h3>
                    </div>
                    <div>
                        <p>Temple promissory Note</p>
                        <p>(Click to enlarge)</p>
                        <Link href="/images/donations/loan/1.png" target="_blank"> <Image quality={75} src="/images/donations/loan/1-thumb.png" width={125} height={200}
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 33vw " className="object-contain cursor-pointer" alt="vvgc san martin loan program" /></Link>
                    </div>
                </div> */}

                {/* SAN MARTIN PHASE ii CONSTRUCTION */}
                <div className={`flex flex-col max-w-full text-justify md:text-center bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div>
                        <h1 className={`text-xl leading-8 my-2 text-center font-[cormorant] font-medium py:2`}>
                            VVGC San Martin Phase II Construction Donations</h1>
                    </div>
                    <Divider />
                    <div>
                        <p className="font-bold my-1">Special Fund raising for vvgc temple phase II expansion project:</p>
                    </div>


                    <p className="xs:text-[12px] text-base">We have updated the payment details Payments through Direct Bank transfers and Check Payments. Please read the flyer for further details. </p>


                    <p className="text-center">(Click to enlarge)</p>
                    <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
                        <Link href="/images/donations/expansion/1.webp" target="_blank">
                            <Image quality={75} src="/images/donations/expansion/1.webp"
                                fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw " className="absolute object-contain cursor-pointer" alt="vvgc san martin loan program" /></Link>
                    </div>
                </div>

                {/* LOAN PROGRAM PROMISSORY NOTE */}
                <div className={`flex flex-col text-justify md:text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div>
                        <h1 className={`text-xl text-center leading-8 my-2 font-[cormorant] font-medium py:2`}>VVGC San Martin Phase Loan Program</h1>
                    </div>
                    <Divider />
                    <div>
                        <h3 className={`my-2 md:w-3/4 mx-auto py:2 `}>
                            If you would like to extend a loan to VVGC, you do so for a minimum of $10,000 on a 4 year term or more. VVGC will pay a 5% intereset rate at the end of the term.
                            <Link className={`text-orange-500 font-[bold]`} href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505" target="_blank">
                                <span> Click here</span></Link> for the Temple promissory note. Please call the Temple for any qustions about this loan program.</h3>
                    </div>
                    <div>
                        <p>Temple promissory Note</p>
                        <p className="text-center">(Click to enlarge)</p>
                        <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
                            <Link href="/images/donations/loan/1.png" target="_blank">
                                <Image quality={75} src="/images/donations/loan/1-thumb.png" fill
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
                                    className="absolute object-contain cursor-pointer" alt="vvgc san martin loan program" /></Link>
                        </div>
                    </div>
                </div>

                {/* STOCK DONATIONS */}
                <div className={`flex flex-col text-justify md:text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div>
                        <h1 className={`text-xl text-center leading-8 my-2 font-[cormorant] font-medium py:2`}>VVGC San Martin Stock Donations</h1>
                    </div>
                    <Divider />
                    <div>
                        <h3 className={`my-2 md:w-3/4 mx-auto  py:2 `}>
                            You can save on your capital gains tax by directly donating your appreciated stock rather than cash. Brokerages such as Schwab provide facility for stock donations via their charities arm. Use the VVGC Tax ID 61-1449457 to direct the donation to the temple.</h3>
                    </div>

                    <p className="text-center">(Click to enlarge)</p>
                    <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[800px]">
                        <Link href="/images/donations/loan/2.jpeg" target="_blank">
                            <Image quality={75} src="/images/donations/loan/2-thumb.jpeg"
                                fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
                                className="absolute object-contain cursor-pointer"
                                alt="vvgc san martin loan program" /></Link>

                    </div>


                </div>




                {/* GO SAMRAKSHANA PROGRAM */}
                <div className={`flex flex-col text-center max-w-full bg-white mx-auto my-5 p-5 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div>
                        <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Go Samrakshanam Program</h1>
                    </div>
                    <Divider />
                    <div className="mx-auto relative w-full h-64 md:w-3/4 md:h-[300px]">
                                            <Image quality={75} src={go_dhanam_img}
                            fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw "
                            className="absolute object-contain cursor-pointer"
                            alt="vvgc san martin loan program" />

                    </div>
                    <div>
                        <h3 className={`leading-8 md:text-xl text-center `}>
                            (Sustaining & Caring for Cows)</h3>
                        <h3 className={` md:text-xl text-justify md:text-center  py:2 md:py-5`}>
                            At VVGC San Martin, we maintain a Goshala where indigenous cows (Gyr breeds) are raised. We have a few initiatives as part of sustaining our Goshala to provide the best care and living experiences for our growing list of cattle.
                            <span> <Link className={`text-orange-500 font-[bold]`} href={'https://paybee.io/quickpay.html?handle=vvgc&ppid=8#optionList'} target="_blank">
                                Click here </Link></span>
                            to learn more about the programs and how you can support them.</h3>
                    </div>
                    


                </div>




            </main>
        </React.Fragment>
    )
}

