import Divider from '@modules/common/components/divider'
import Link from 'next/link'
import React,{Fragment} from 'react'
import External_Link from '@modules/common/components/external-link'

const CustomPrasadamForm = () => {
    const CustomPrasadamBookingFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfnXHyH_O2Y5qwF_OTLhTaoKqrZDmRP5_4vLGh89aQWPK1lzg/viewform';
  return (
    <Fragment>
        <section className="flex flex-col gap-4 w-full mx-auto max-w-screen-md h-auto my-5 p-5  shadow-slate-900 drop-shadow-md rounded-sm bg-white font-sans">
                    <h2 className="text-xl md:text-[1.9rem] font-serif">Order Custom Prasadam</h2>
                    <Divider/>
                    <p>Daily Maha Prasadam offered to all deities: Pongal, Jaggery Pongal, Puliyotharai (Tamarind Rice).
                        Maha prasadam will be served daily as annadhanam (Preethi Bhoj) at VVGC San Martin to everyone.
                    </p>
                    <hr/>
                    <p>Separately, Devotees can place custom order of Maha prasadam using the form below. Custom orders are available for pickup at VVGC San Martin or San Jose Temple.</p>                    
                    <hr />
                    
                   
                    <External_Link url={CustomPrasadamBookingFormURL} text='Place Order' />
                </section>
    </Fragment>
  )
}

export default CustomPrasadamForm