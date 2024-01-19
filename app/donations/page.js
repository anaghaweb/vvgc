import React from "react"
import { cormorant, opensans } from "../fonts";
import Image from "next/image";


import Link from "next/link";


export const metadata = {
    title: 'Donations',
    description: 'Help us Grow',
}


export default function Donations() {



    const divine_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';

    const go_dhanam_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914207/VVGC%20San%20Martin%20Temple%20Data/temple-donation-image-1_fb8q9e.jpg';

    const godhanam_donate_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1694926304/VVGC%20San%20Martin%20Temple%20Data/VVGC/GoDanam_ar6vy1.jpg';



    return (
        <React.Fragment>
            < div className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-donations ${cormorant.variable} `}
            >
                <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">Support Us</h1>
            </div>
            {/* main section */}


            <main className={`${cormorant.variable} mx-auto w-full max-w-full`}>


                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>

                        <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Build the Divine Abode</h1>

                        <hr />

                        <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>Help Fund the Expansion and Maintenance of VallabhaMaha Ganapathi Temple</h3>

                        <hr />

                        <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>VVGC is a registered non-profit organization
                            (CA Tax ID: 61-1449457) and your donations are always 100% tax deductible.</h3>

                    </div>
                    <div className={`relative col-span-1 w-full max-w-full h-auto md:col-span-2`}>
                        <Image src={`${divine_img}`} alt="Support Us" fill quality={75} sizes={'100vw'}
                            className=" object-contain m-auto" />


                    </div >
                </div>


                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>

                        <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Go Samrakshanam Program</h1>


                        <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>(Sustaining & Caring for Cows)</h3>


                        <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>At VVGC San Martin, we maintain a Goshala where indigenous cows (Gyr breeds) are raised. We have a few initiatives as part of sustaining our Goshala to provide the best care and living experiences for our growing list of cattle.  <span><Link className={`text-orange-500 font-[bold]`} href={'https://paybee.io/quickpay.html?handle=vvgc&ppid=8#optionList'} target="_blank">Click here</Link></span> to learn more about the programs and how you can support them.</h3>

                    </div>
                    <div className={`relative col-span-1 w-full max-w-full h-auto md:col-span-2`}>
                        <Image src={go_dhanam_img} alt="Support Us" fill quality={75} sizes={'100vw'}
                            className="object-contain m-auto absolute" />

                    </div>
                </div>

                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>

                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Choose your payment type</h1>
                        <div className="text-center py-5 text-base font-normal md:px-5 font-opensans">
                            <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>Donate using PayPal Giving Fund (requires PayPal account) and 100% of your donations will go to the Temple. Click below</h3></div>

                        <div className="mx-auto">
                            <Link className={`text-orange-500 font-[bold] text-xl`} href="https://www.paypal.com/US/fundraiser/charity/1269532">Click Here to donate through PayPal </Link>
                        </div>
                    </div >
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <div className="text-center  py-5 text-base font-normal md:px-5 font-opensans"> <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>If you prefer to donate without logging into PayPal or if you don't have a PayPal account, click on the Donate button below. After a small credit/debit card processing fee, the rest of your donations will go to the Temple.</h3></div>

                        <div className="mx-auto">
                            <Link className={`text-orange-500 font-[bold] text-xl`} href="https://www.paypal.com/donate?token=HYL-hpCzltaDvpErldKPbXdVDQQxQkJy0okO_jjIVqhutaOg-7Q3AITqcGhDiST1wyzB4HzlTgU5VeTv">Donate using Debit/ Credit Cards  </Link>
                        </div>

                    </div>

                </div>

                <div className={`grid relative grid-cols-1 max-w-full h-auto bg-white mx-auto my-5 p-5 md:grid-cols-4 md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:[filter:drop-shadow(0_10px_8px_rgb(0_0_0_/_0.04))_drop-shadow(0_4px_3px_rgb(0_0_0_/_0.1))] lg:w-[90%] ${opensans.variable}`}>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <div>
                            <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>VVGC San Martin Loan Program</h1>
                        </div>

                        <div>
                            <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>If you would like to extend a loan to VVGC, you do so for a minimum of $10,000 on a 4 year term or more. VVGC will pay a 5% intereset rate at the end of the term. <Link className={`text-orange-500 font-[bold]`} href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505" target="_blank">
                                <span>Click here</span></Link> for the Temple promissory note. Please call the Temple for any qustions about this loan program.</h3>
                        </div>
                    </div>
                    <div className={`flex flex-col justify-items-center items-center w-full max-w-full text-center font[opensans] col-span-2 p-6`}>
                        <div >
                            <h1 className={`text-3xl leading-8 my-2 font-[cormorant] font-medium py:2 md:py-5`}>Stock Donations</h1>
                        </div>

                        <div>
                            <h3 className={`leading-8 my-2 md:text-xl text-justify md:text-center  py:2 md:py-5`}>You can save on your capital gains tax by directly donating your appreciated stock rather than cash. Brokerages such as Schwab provide facility for stock donations via their charities arm. Use the VVGC Tax ID 61-1449457 to direct the donation to the temple.</h3>
                        </div>
                    </div>
                </div>


            </main>
        </React.Fragment>
    )
}

