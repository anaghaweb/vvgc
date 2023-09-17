import React from "react";
import { cormorant } from "../fonts";
import { DonateLink } from "../events/eventstyles";
import { SiGofundme } from "react-icons/si";
import { Grid_Container, Gofundme_Wrapper, Container, Inner_div } from "./prieststyles";
import { HBox_Text_Div, H1_Wrapper } from "../GlobalStyles/globalstyles";
import Image from "next/image";
import Link from "next/link";



export const metadata = {
    title: 'Priest',
    description: 'VVGC- Temple',
}

const goFundMeURL = 'https://www.gofundme.com/f/vvgc-priests-guru-dakshana?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer';

const placeholderImg = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914205/VVGC%20San%20Martin%20Temple%20Data/Priests/Hindu_priest_rfqtoy.jpg';

export default function Priest() {


    return (
        <React.Fragment>

            <section className={`h-[70vh] w-full bg-hero-priests bg-center bg-no-repeat bg-cover flex justify-center items-center text-6xl text-white font-[300] bg-opacity-70 ${cormorant.variable}`}>
                <div className="w-[280px] h-auto font-cormorant"><h1>Our Priests</h1></div>
            </section>
            <main className={cormorant.variable}>


                <Gofundme_Wrapper>
                    <h2>Their selfless service forms the foundation of our temple's spiritual offerings, and their presence enriches our lives in countless ways. We would like to express our deep appreciation for the priests and acknowledge the invaluable role they play in maintaining the sanctity and vibrancy of our Temple.
                    </h2>
                    <h3>
                        If you would like to give Guru Dakshana to our priests, you can do so using GoFundMe.
                    </h3>
                    <div>
                        <DonateLink href={goFundMeURL}><span>Click here</span> <SiGofundme size={25} /></DonateLink>
                    </div>
                </Gofundme_Wrapper>

                <Container>
                    <Grid_Container>
                        <Inner_div>
                            <div className="relative w-[100%] h-[200px]"><Link href={placeholderImg}>
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></Link></div>


                            <HBox_Text_Div>

                                <h1>Pandit Ganesh Shasthry</h1>
                                <h3>9252097637</h3>
                                <h3></h3>

                            </HBox_Text_Div>
                        </Inner_div>


                        <Inner_div>
                            <div className="relative w-[100%] h-[200px]"><Link href={placeholderImg}>
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></Link></div>
                            <div>
                                <HBox_Text_Div>

                                    <h1>Pandit Sivasankar Hemmanur</h1>
                                    <h3>408-724-3577</h3>
                                    <h3></h3>

                                </HBox_Text_Div>
                            </div>
                        </Inner_div>

                        <Inner_div>
                            <div className="relative w-[100%] h-[200px]"><Link href={placeholderImg}>
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></Link></div>

                            <HBox_Text_Div>

                                <h1>Pandit Bhaskaran Ganeshan Janardhan
                                </h1>
                                <h3>669-350-5788</h3>
                                <h3></h3>

                            </HBox_Text_Div>

                        </Inner_div>

                        <Inner_div>
                            <div className="relative w-[100%] h-[200px]"><Link href={placeholderImg}>
                                <Image src={placeholderImg} fill sizes={'100vw'} alt="placeholder" className="absolute cursor-pointer" /></Link></div>
                            <HBox_Text_Div>

                                <h1>Pandit Krishnamurthy
                                </h1>
                                <h3>860-262-2478</h3>
                                <h3></h3>

                            </HBox_Text_Div>
                        </Inner_div>
                    </Grid_Container>
                </Container>
            </main>



        </React.Fragment>
    );
}


