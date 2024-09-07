import React, {Fragment} from 'react'
import MediaTabs from '../components/mediaTab'
import { EventTabs } from '../components/event-tabs'

const EventsPageView = ({data, dailyEventData, searchParams}) => {
  return (
    <Fragment>
        <MediaTabs />
        <EventTabs data={data} dailyEventData={dailyEventData} searchParams={searchParams}/>
    </Fragment>
  )
}

export default EventsPageView