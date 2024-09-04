import React,{Fragment} from 'react'
import SectionOne from '../components/section-1'
import SectionTwo from '../components/section-2'
import SectionThree from '../components/section-3'
import SectionFour from '../components/Section-4'
import SectionFive from '../components/section-5'
import { cormorant, playfair } from "app/fonts";
import PlantATree from '@modules/campaigns/components/plant-a-tree'

const HomePageView = ({data}) => {
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