import React from 'react'

export default function AboutUsPage() {
    const vvgcCommitteeURL = process.env.VVGC_COMMITTEE_GDOC;
    
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center h-[70vh]">
    <section className="block max-w-full relative p-5 overflow-x-auto overflow-y-hidden ">
            <div className="text-3xl font-semibold text-center underline text-red-900">Our Mission</div>
        
            <div className="p-3 flex justify-center items-center text-center text-2xl">The Mission of Vaidica Vidhya Ganapathi Center (VVGC), a Sanatana Dharma Temple, is to provide a place for worship, educational and cultural services to the bay area community.</div>
    </section>
</div>
  )
}
