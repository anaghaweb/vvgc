import React, {Fragment} from 'react'
import MediaCard from '../components/media-card'
import { EventTabs } from '../components/event-tabs'

const EventsPageView = ({data, regularEventData, searchParams}) => {
  return (
    <Fragment>
        {/* <MediaCard /> */}
        <EventTabs data={data} regularEventData={regularEventData} searchParams={searchParams}/>
    </Fragment>
  )
}

export default EventsPageView