import React, { Fragment } from "react"
import { cormorant, opensans } from '@lib/fonts/fonts'
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
    const specialfundraisingimageUrl = `https://res.cloudinary.com/dixkqgqsi/image/upload/v1770963558/vvgc/images/2026/recurring/vvgc_special_fund_raising_flyer_webp.webp`;
   
  return (

    <Fragment>
         {/* Divine Abode */}
         <div className="md:max-w-screen-lg mx-auto">
         <DivineAbode imageUrl={divine_img} />
         <Divider className="border-rose-200" />
         <PaymentsContainer />
         <Divider className="border-rose-200" />
        <PhaseTwoConstruction imageurl={specialfundraisingimageUrl}/>
        <Divider className="border-rose-200" />
        <LoanProgram />
        <Divider className="border-rose-200" />
        <StockDonation />
        <Divider className="border-rose-200" />
        <GodhanamInDonation imageUrl={go_dhanam_img}  />
        <Divider className="border-rose-200" />
        <div className="h-20"></div>
         </div>
    </Fragment>


    
    
  )
}

export default DonationsPageView