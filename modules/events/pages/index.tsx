import React, {Fragment} from 'react'
import MediaTabs from '../components/mediaTab'
import { EventTabs } from '../components/event-tabs'
import type { CalendarEvent, EventTypes, WeeklyEvents } from 'types/global'

const EventsPageView = ({data, weeklyEventsData, searchParams}:{
  data:CalendarEvent[],
  searchParams: EventTypes,
  weeklyEventsData: WeeklyEvents[]
}) => {
  return (
    <Fragment>
        <MediaTabs />
        <EventTabs data={data} weeklyEventsData={weeklyEventsData} searchParams={searchParams}/>
    </Fragment>
  )
}

export default EventsPageView