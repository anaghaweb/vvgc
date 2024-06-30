import React, {Fragment} from 'react'
import MediaCard from '../components/media-card'
import { EventTabs } from '../components/event-tabs'

const EventsPageView = ({data, regularEventData}) => {
  return (
    <Fragment>
        <MediaCard />
        <EventTabs data={data} regularEventData={regularEventData}/>
    </Fragment>
  )
}

export default EventsPageView