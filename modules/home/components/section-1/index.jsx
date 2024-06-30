import React, {Fragment} from 'react'
import { events } from '@lib/data/regularEvent'
import DailyEventCard from '@modules/events/components/event-card-4'
import FeedBackFormPageLink from '@modules/feedback-form/page'
import EventSummaryCard from '@modules/events/components/event-card-5'

const SectionOne = ({eventdata}) => {
  const data = eventdata.content.find((event)=> new Date(event.date).getDate() === new Date().getDate())
  return (
    <Fragment>
       <div className="grid grid-cols-1 lg:grid-cols-6 min-h-[400px]">
          <div className="col-span-1 lg:col-span-4 h-auto my-2 md:my-0 
          flex-1">
           {data.title ? <EventSummaryCard eventdata={data}/>              
            :
            <DailyEventCard events={events} />   }         
          </div>

          {/* FEEDBACK */}
          <div className="col-span-1 lg:col-span-2 h-auto md:h-[400px] flex-1  text-center">
           <FeedBackFormPageLink />
          </div>
        </div>
        </Fragment>
  )
}

export default SectionOne