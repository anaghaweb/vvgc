import Divider from '@modules/common/components/divider'
import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card } from '@modules/common/components/ui/card';

const MahaPrasadamSanMartin = () => {
  return (
    <Card className="h-auto flex-1 p-2 md:pl-4 col-span-1 text-left track-tight text-sm lg:text-base">
    <h1 className="text-2xl md:text-3xl font-roboto bg- text-left text-sky-700  ">
      Starting From September 7th 2024 
    </h1>
   
    <Divider />
    <h4 className=" text-center font-playfair font-semibold text-rose-900 my-1">
      Om Sree Mathre Namaha Om Gum Ganapathaye Namaha
    </h4>
    
    <div className=' font-roboto mb-3 py-2'> 
    <p className="font-semibold   text-blue-950">
      Weekend Maha Prasadam
    </p>       
    <p>VVGC San Martin hindu Temple</p>
    <p>Vaidica Vidhya Ganapathi Center Inc, San Martin</p>
    <p>11355 Monterey Hwy San Martin Ca 95046</p>
    
    </div>

    <div className=' font-roboto py-2'>
    <p className='font-semibold  text-blue-950 '>Weekend Maha Prasadam /Anna Dhanam / Priti Bhoj</p>
    <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served:</p>
    <h6>Saturday from 12:00 PM to 8:00 PM</h6>    
    <h6>Sunday from 12:00 PM to 8:00 PM</h6>    
    <p className="text-center font-playfair font-semibold text-rose-900 my-1">All Are Welcome To Participate With Family Friends And Get Blessings </p>
    </div>

    <div className=' font-roboto py-2'>
    <p className="font-semibold   text-blue-950">
    Please Support This Maha Kainkaryam </p>
    <p>Sponsors Welcome</p>
    {/* <p>Weekdays - $501.00
    </p> */}
    <p>Weekends - $1001.00</p>
    <Link
    className=' text-blue-700 font-semibold underline flex flex-shrink-0 gap-1 items-center '
    target='_blank'
    href="https://paybee.io/quickpay.html?handle=vvgc#donationConfirm">Donate <FaExternalLinkAlt /></Link>
    </div>

    <div className=' font-roboto py-2 flex flex-col'>
    <p className="font-bold  text-blue-950">For further details please contact</p>
    <a href="tel:4087243577"> Pandit Siva Sankar Hemmanur <span className="text-blue-800 font-semibold">4087243577</span></a>
    <a href="tel:9252097637"> Pandit Ganesh Shasthry <span className="text-blue-800 font-semibold">9252097637</span></a>
    <a href="tel:4087596183">San Martin Temple  Number <span className="text-blue-800 font-semibold">4087596183</span></a>
    <p className='text-center font-playfair font-semibold text-rose-900 my-1'>Subham Bhuyath Mangalani Bhavanthu Loka Samastha Sukino Bhavanthu </p>
    </div>
  </Card>
  )
}

export default MahaPrasadamSanMartin