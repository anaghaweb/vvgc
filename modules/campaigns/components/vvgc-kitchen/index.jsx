import { Card, CardContent } from '@modules/common/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React, {Fragment} from 'react'
import { FcExternal } from 'react-icons/fc';
import {LiaExternalLinkSquareAltSolid} from "react-icons/lia";
const KitchenVVGC = () => {
  return (
    <Fragment>       
          <Card className="h-auto w-full sm:p-2 text-red-950">
            <CardContent className="">
            <p className="mt-12 mb-2 font-bold text-3xl text-center font-[cormorant]">
              Kitchen at VVGC San Martin
            </p>
            <hr className="h-[2px] bg-blue-800 my-2" />
            <p className="py-2 text-blue-950 font-roboto lg:text-xl text-center">
            We are seeking loan to complete our Kitchen at VVGC temple. 
            Estimated completetion cost is around USD 250,000$. 
            Please note that we have obtained the necessary permits from relavent authorities to build a kitchen at out temple.
            We would like to start this project at the earliest. Kindly help us to raise this loan amount. 
            We are ready to pay interest of up to 10%.
            </p>
            <div className="font-playfair text-2xl inline-flex justify-center w-full items-center gap-2 text-orange-500  underline">

            <Link href="https://paybee.io/@vvgc@7" target="_blank" >
            Click Here to donate
            </Link>
            <LiaExternalLinkSquareAltSolid/>
            </div>
           <div className="relative w-[100%] min-h-[300] h-[200px] md:h-[300px] lg:h-[500px] p-2">
            <Link href="/images/campaigns/kitchen.jpeg" target="_blank">
            <Image
              src="/images/campaigns/kitchen.jpeg"
              alt="Event"
              fill
              quality={75}
              sizes={"100vw"}
              className="absolute object-contain cursor-pointer"
            />
            </Link>
            </div>
            
            </CardContent>
            </Card>
          
    </Fragment>
  )
}

export default KitchenVVGC