import React from "react"
import { cormorant } from "../fonts";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { StyledLink, DonateLink } from "../events/eventstyles";
import { HorizontalBox, HBox_Text_Div, HBox_Image_Div } from "../GlobalStyles/globalstyles";



export const metadata = {
    title: 'Donations',
    description: 'Help us Grow',
}


export default function Donations() {

    const donateHeroImageURL = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914197/VVGC%20San%20Martin%20Temple%20Data/Gallery/72523726_2376249359110130_8985447543194255360_n_qf7i6r.jpg';

    const divine_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';

    const go_dhanam_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914207/VVGC%20San%20Martin%20Temple%20Data/temple-donation-image-1_fb8q9e.jpg';


    return (
        <React.Fragment>
            <section className={cormorant.variable}>
                <div className={`h-[50dvh] md:h-[70vh] max-w-full w-full bg-hero-donate bg-center bg-no-repeat bg-cover flex justify-center items-center text-3xl md:text-6xl text-white font-[500] bg-opacity-70 `}>
                    <div className="w-[200px] md:w-[280px] h-auto text-center"><h1 className="font-cormorant">Support Us</h1></div>
                </div>
            </section>
            {/* main section */}
            <main className={`${cormorant.variable} mx-auto w-full max-w-full`}>

                <HorizontalBox>
                    <HBox_Text_Div>
                        <div >
                            <h1>Build the Divine Abode</h1>
                        </div>
                        <div >
                            <h3>Help Fund the Expansion and Maintenance of VallabhaMaha Ganapathi Temple</h3>
                        </div>
                        <div>
                            <h3>VVGC is a registered non-profit organization
                                (CA Tax ID: 61-1449457) and your donations are always 100% tax deductible.</h3>
                        </div>
                    </HBox_Text_Div>
                    <HBox_Image_Div>
                        <div><Image src={`${divine_img}`} alt="Support Us" absolute fill quality={75} sizes={'100vw'}
                            className=" object-contain m-auto" />
                        </div>

                    </HBox_Image_Div>
                </HorizontalBox>


                <HorizontalBox>
                    <HBox_Text_Div>
                        <div>
                            <h1>Go Samrakshanam Program</h1>
                        </div>
                        <div >
                            <h3>(Sustaining & Caring for Cows)</h3>
                        </div>
                        <div>
                            <h3>At VVGC San Martin, we maintain a Goshala where indigenous cows (Gyr breeds) are raised. We have a few initiatives as part of sustaining our Goshala to provide the best care and living experiences for our growing list of cattle. Click here to learn more about the programs and how you can support them.</h3>
                        </div>
                    </HBox_Text_Div>
                    <HBox_Image_Div>
                        <div><Image src={go_dhanam_img} alt="Support Us" fill quality={75} sizes={'100vw'}
                            className="object-contain m-auto absolute" /></div>

                    </HBox_Image_Div>
                </HorizontalBox>

                <HorizontalBox>
                    <div className="md:col-span-2 col-span-1 flex flex-col h-auto w-full justify-items-center font-opensans max-w-full">
                        <div className="text-center py-5 text-base font-normal px-5 font-opensans"><h3>Donate using PayPal Giving Fund (requires PayPal account) and 100% of your donations will go to the Temple. Click below</h3></div>

                        <div className="text-center py-5 mx-auto text-orange-500">
                            <DonateLink href="https://www.paypal.com/US/fundraiser/charity/1269532"><span>Click Here to donate through PayPal</span> <div><FaExternalLinkAlt size={20} /></div> </DonateLink>
                        </div>
                    </div >
                    <div className="md:col-span-2 col-span-1 flex flex-col h-auto w-full justify-items-center font-opensans max-w-full">
                        <div className="text-center  py-5 text-base font-normal px-5 font-opensans"> <h3>If you prefer to donate without logging into PayPal or if you don't have a PayPal account, click on the Donate button below. After a small credit/debit card processing fee, the rest of your donations will go to the Temple.</h3></div>

                        <div className="text-center py-5 mx-auto text-orange-500">
                            <DonateLink href="https://www.paypal.com/donate?token=HYL-hpCzltaDvpErldKPbXdVDQQxQkJy0okO_jjIVqhutaOg-7Q3AITqcGhDiST1wyzB4HzlTgU5VeTv"><span>Donate using Debit/ Credit Cards</span> <div><FaExternalLinkAlt size={20} /></div> </DonateLink>
                        </div>

                    </div>

                </HorizontalBox>

                <section className="relative  bg-white grid grid-cols-1 max-w-full h-auto md:grid-cols-4 justify-stretch lg:w-[90%] mx-auto my-5 md:shadow-lg  md:shadow-slate-400 md:drop-shadow-lg p-5">
                    <div className="md:col-span-2 col-span-1 flex flex-col h-auto w-full justify-items-center font-opensans max-w-full">
                        <div className="text-center  py-5 text-3xl font-semibold font-cormorant">
                            <h1>VVGC San Martin Loan Program</h1>
                        </div>

                        <div className="text-center py-5 px-5">
                            <h3>If you would like to extend a loan to VVGC, you do so for a minimum of $10,000 on a 4 year term or more. VVGC will pay a 5% intereset rate at the end of the term. <StyledLink href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/bb4e1d3d-27ca-4f16-b54a-beb70d73e21a/a1414168-d09b-4818-8b5f-3163cffab505"><span>Click here</span></StyledLink> for the Temple promissory note. Please call the Temple for any qustions about this loan program.</h3>
                        </div>
                    </div>
                    <div className="md:col-span-2 col-span-1 flex flex-col h-auto w-full justify-items-center font-opensans max-w-full">
                        <div className="text-center  py-5 text-3xl font-semibold font-cormorant">
                            <h1>Stock Donations</h1>
                        </div>

                        <div className="text-center py-5 px-5">
                            <h3>You can save on your capital gains tax by directly donating your appreciated stock rather than cash. Brokerages such as Schwab provide facility for stock donations via their charities arm. Use the VVGC Tax ID 61-1449457 to direct the donation to the temple.</h3>
                        </div>
                    </div>
                </section>


            </main>
        </React.Fragment>
    )
}

