import React, { Fragment } from 'react'
import LakshmiGanapathiBanner from '../components/banner'
import MediaCard from '@modules/events/components/mediaTab'
import LakshmiGanapathiWeeklyEvents from '../components/weekly-events'
import LakshmiGanapathiMapLocation from '../components/googleMapLocation'
import MahaPrasadamSanJose from "@modules/lakshmi-ganapathi-temple/components/daily-maha-prasadam";
const LakshmiGanapathiPageTemplate = () => {
  return (
    <Fragment>
        <LakshmiGanapathiBanner />
        <main className='flex flex-col mt-4 gap-4 md:max-w-screen-md mx-auto'>        
        <MediaCard />
        <MahaPrasadamSanJose />
        <LakshmiGanapathiWeeklyEvents /> 
        <LakshmiGanapathiMapLocation />
        </main>
    </Fragment>
  )
}

export default LakshmiGanapathiPageTemplate