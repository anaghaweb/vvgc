import Divider from '@modules/common/components/divider'
import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";


const MahaPrasadamSanMartin = () => {
  return (
    <div className="h-auto flex-1 my-4 bg-pink-50 shadow-sm mx-auto p-2 md:pl-4 col-span-1 text-left track-tight text-sm lg:text-base w-full md:w-2/3">
      <div>

    <h2 className="text-2xl md:text-3xl font-serif text-indigo-950">
      Daily Maha Prasadam 
    </h2>
   
    <Divider />
    <h4 className=" text-center text-lg font-playfair font-semibold text-rose-900 p-4 ">
     || Om Sree Mathre Namaha Om Gum Ganapathaye Namaha ||
    </h4>
    
    <div className=' font-roboto mb-3 py-2'> 
    <p className="font-semibold">
    Maha Prasadam  / Anna Dhanam / Priti Bhoj
    </p>       
    <p>VVGC San Martin hindu Temple</p>
    <p>Vaidica Vidhya Ganapathi Center Inc, San Martin</p>
    <p>11355 Monterey Hwy San Martin Ca 95046</p>
    
    </div>

    <div className=' font-roboto py-2'>
    <p className='font-semibold   '>
    All Weekends And Long Weekends 
    <time className=" font-roboto"> 12.00pm Noon To 8.00pm </time>
Both Saturdays And Sundays</p>
    <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served at:</p>
    <p>Weekends <time className="text-gray-900 font-bold font-roboto"> 12:00pm</time> </p>
    <p>Weekdays <time className="text-gray-900 font-bold font-roboto"> 4:00pm</time> </p>
    <p className="text-center text-lg font-playfair font-semibold text-rose-900 p-4">All Are Welcome To Participate With Family Friends And Get Blessings </p>
    </div>

    <div className=' font-roboto py-2'>
    <p className="font-semibold   ">
    Please Support and spread the word about this Maha Kainkaryam </p>
    <p>Sponsors welcome</p>
    <p className="text-gray-900 font-roboto">Weekdays <b>USD 501.00</b></p>
    <p className="text-gray-900 font-roboto">Weekends <b>USD 1001.00</b></p>

    <div className="flex justify-center w-full">
    <Link
    className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full font-roboto  bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
      py-2 px-4 my-1 mx-auto
      text-xl text-indigo-800 hover:text-blue-900`}
    target='_blank'
    href="https://paybee.io/quickpay.html?handle=vvgc#donationConfirm">Donate <FaExternalLinkAlt className="size-4"/></Link>
    </div>
    </div>

    <div className=' font-roboto py-2 flex flex-col'>
    <p className="font-bold  ">For further details please contact</p>
    <a href="tel:4087243577"> Pandit Siva Sankar Hemmanur <span className="text-blue-800 font-semibold">4087243577</span></a>
    <a href="tel:9252097637"> Pandit Ganesh Shasthry <span className="text-blue-800 font-semibold">9252097637</span></a>
    <a href="tel:4087596183">San Martin Temple  Number <span className="text-blue-800 font-semibold">4087596183</span></a>
    <p className='text-center text-lg font-playfair font-semibold text-rose-900 p-4'>|| Subham Bhuyath Mangalani Bhavanthu Loka Samastha Sukino Bhavanthu ||</p>
    </div>
      </div>
  </div>
  )
}

export default MahaPrasadamSanMartin