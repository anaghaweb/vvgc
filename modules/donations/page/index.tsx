import React, { Fragment } from "react"
import { cormorant, opensans } from 'app/fonts'
import Image from "next/image";
import Divider from "@modules/common/components/divider";
import Link from "next/link";
import { Card } from "@modules/common/components/ui/card"; 
import DivineAbode from "../components/divine-abode";
import PaymentsContainer from "../components/payments";
import PhaseTwoConstruction from "../components/phase-two";
import LoanProgram from "../components/loan-program";
import StockDonation from "../components/stock-donations";
import GodhanamInDonation from "../components/godhanam";

const DonationsPageView = () => {

    const divine_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg';

    const go_dhanam_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914207/VVGC%20San%20Martin%20Temple%20Data/temple-donation-image-1_fb8q9e.jpg';

    const godhanam_donate_img = 'https://res.cloudinary.com/dixkqgqsi/image/upload/v1694926304/VVGC%20San%20Martin%20Temple%20Data/VVGC/GoDanam_ar6vy1.jpg';

    const TPN = "https://res.cloudinary.com/dixkqgqsi/image/upload/v1717667737/VVGC%20Images/TPN_xouysf.png";
  return (

    <Fragment>
         {/* Divine Abode */}
         <DivineAbode imageUrl={divine_img} />
         <PaymentsContainer />
        <PhaseTwoConstruction />
        <LoanProgram />
        <StockDonation />
        <GodhanamInDonation imageUrl={go_dhanam_img}  />
    </Fragment>


    
    
  )
}

export default DonationsPageView