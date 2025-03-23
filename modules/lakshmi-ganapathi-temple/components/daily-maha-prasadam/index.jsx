import Divider from '@modules/common/components/divider'
import React from 'react'
import Link from 'next/link'
import External_Link from '@modules/common/components/external-link'
const MahaPrasadamSanJose = () => {
  return (
    <div className="h-auto my-4 md:my-0 flex-1 p-4 col-span-1 bg-teal-50">
    <h1 className="text-2xl md:text-3xl md:mt-2 font-serif  text-cyan-950">
      Daily Maha Prasadam 
    </h1>
   
    <Divider />
    <h4 className=" font-cormorant text-center font-semibold text-xl text-red-950 p-4">
     || Om Sree Mathre Namaha Om Gum Ganapathaye Namaha ||
    </h4>
    <div className="font-semibold  ">
      Nithya Maha Prasadam At:
    </div>
    <div className=' font-sans mb-3 mt-1'>
    <p>Sri Lakshmi Ganapathi Temple</p>
    <p>Vaidica Vidhya Ganapathi Center Inc, San Jose</p>
    <p>32 Rancho Drive Ste B San Jose CA 95111</p>
    
    </div>
    <p className='font-semibold   mb-2'>Nithya (Daily) Maha Prasadam /anna Dhanam / Priti Bhoj</p>

    <div className=' font-sans mb-3 mt-1'>
    <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served</p>
    <h6> <span className='font-semibold'>Weekdays</span>  - 6:00 PM to 8:00 PM</h6>    
    <h6> <span className='font-semibold'>Weekends</span> - 6:00 PM to 8:00 PM</h6>
    
    <p>All Are Welcome To Participate With Family Friends And Get Blessings </p>
    </div>

    <div className=' font-sans mb-3 mt-1'>
    <div className="font-semibold  ">
    Please Support This Maha Kainkaryam

    </div>
    <p>Sponsors Welcome</p>
    <p>Weekdays - $501.00
    </p>
    <p>Weekends - $1001.00</p>
    
    </div>
    <External_Link url='https://paybee.io/quickpay.html?handle=vvgc#donationConfirm' text='Donate'/>
    <div className=' font-sans mb-3 mt-1 flex flex-col'>
    <div className="font-semibold ">For further details please contact</div>
    <p> Pandit Siva Sankar Hemmanur <a href="tel:4087243577" className='font-semibold text-blue-600'>4087243577</a></p>
    <p> Pandit Ganesh Shasthry <a href="tel:9252097637" className='font-semibold text-blue-600'>9252097637</a></p>
    <p> San Jose Temple  Number <a href="tel:4082263600" className='font-semibold text-blue-600'>4082263600</a></p>
    <p className='font-cormorant text-center font-semibold text-xl text-red-950 p-4'> || Subham Bhuyath Mangalani Bhavanthu Loka Samastha Sukino Bhavanthu ||</p>
    </div>
  </div>
  )
}

export default MahaPrasadamSanJose