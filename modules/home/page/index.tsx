import React,{Fragment} from 'react'
import SectionOne from '@modules/home/components/section-1'
import SectionTwo from '@modules/home/components/section-2'
import SectionThree from '@modules/home/components/section3'
import SectionFour from '@modules/home/components/section4'
import SectionFive from '@modules/home/components/section5'
import { cormorant, playfair } from "@lib/fonts/fonts";
import { CalendarEvent } from 'types/global'

const HomePageView = ({data}:{
  data:CalendarEvent[]
}) => {
  return (
    <Fragment>
      <main className={`${cormorant.variable} ${playfair.variable} 
      flex flex-col max-w-screen overflow-hidden 
      h-auto from-gray-100 via-blue-100 to-slate-100`}>
        
        {/* Today's event & Daily Maha Prasadam info */}
        <SectionOne eventdata={data}/>

        {/* Special and Sponsored events */}
        <SectionTwo data={data} />   

          {/* Campaigns */}
          <SectionThree />

        {/* Gallery, History & Paybee link Cards */}
        <SectionFour /> 
       
        {/* Google Maps */}
        <SectionFive />
        
        </main>
    </Fragment>
  )
}

export default HomePageView