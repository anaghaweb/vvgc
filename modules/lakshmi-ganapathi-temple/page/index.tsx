import React, { Fragment } from 'react'
import LakshmiGanapathiBanner from '../components/banner'
import MediaCard from '@modules/events/components/media-card'
import LakshmiGanapathiWeeklyEvents from '../components/weekly-events'
import LakshmiGanapathiMapLocation from '../components/googleMapLocation'

const LakshmiGanapathiPageTemplate = () => {
  return (
    <Fragment>
        <LakshmiGanapathiBanner />
        <main className='flex flex-col mt-4 gap-4'>        
        <MediaCard />
        <LakshmiGanapathiWeeklyEvents /> 
        <LakshmiGanapathiMapLocation />
        </main>
    </Fragment>
  )
}

export default LakshmiGanapathiPageTemplate