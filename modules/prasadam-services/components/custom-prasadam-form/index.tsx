import Divider from '@modules/common/components/divider'
import Link from 'next/link'
import React,{Fragment} from 'react'

const CustomPrasadamForm = () => {
    const CustomPrasadamBookingFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform';
  return (
    <Fragment>
        <section className="flex flex-col w-[full] mx-auto max-w-screen-lg h-auto my-5 p-5 gap-2 items-center text-center  shadow-slate-900 drop-shadow-md rounded-sm bg-white">
                    <p className="text-xl md:text-[1.9rem] font-[cormorant]">Order Custom Prasadam</p>
                    <Divider/>
                    <p>Daily Maha Prasadam offered to all deities: Pongal, Jaggery Pongal, Puliyotharai (Tamarind Rice).
                        Maha prasadam will be served daily as annadhanam (Preethi Bhoj) at VVGC San Martin to everyone.
                    </p>
                    <hr/>
                    <p>Separately, Devotees can place custom order of Maha prasadam using the form below. Custom orders are available for pickup at VVGC San Martin or San Jose Temple.</p>                    
                    <hr />
                    <Link className="p-3 text-xl bg-blue-100 w-full" href={CustomPrasadamBookingFormURL} target="_blank">
                   
                        <span className="text-xl text-blue-900 cursor-pointer">Click here to book your custom prasadam Order</span>
                    
                    </Link>
                </section>
    </Fragment>
  )
}

export default CustomPrasadamForm