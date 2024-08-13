import React, {Fragment} from 'react'
import {weeklyEventsList} from '@lib/data/regularEventData'
import DailyEventCard from '@modules/events/components/event-card-4'
import FeedBackFormPageLink from '@modules/feedback-form/page'
import EventSummaryCard from '@modules/events/components/event-card-5'
import dayOfTheWeek from '@lib/utils/deyOfTheWeek'
import Divider from '@modules/common/components/divider'

const SectionOne = ({eventdata}) => {
  const data = eventdata.content.find((event)=> new Date(event.date).getDate() === new Date().getDate())
  const currentDay = dayOfTheWeek();
  return (
    <Fragment>
       <div className="min-h-[300px]">      
          <div className="h-auto my-4 md:my-0 flex-1 pl-2 md:pl-4">
             <div className="text-2xl md:text-3xl md:mt-2 font-semibold text-sky-950 font-cormorant">
          Today at the Temple, {currentDay}
        </div>
        <Divider />

           {data?.title && <EventSummaryCard eventdata={data}/>}              
            
           {data?.title && <p className=' md:pl-4 text-sm font-normal'>Below daily events will also be conducted if time permits</p>} 
          </div>

          {/* Daily Events */}
          <DailyEventCard events={weeklyEventsList} /> 
          
         
        </div>
        </Fragment>
  )
}

export default SectionOne