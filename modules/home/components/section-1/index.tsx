import React, {Fragment} from 'react'
import { events } from '@lib/data/regularEvent'
import DailyEventCard from '@modules/events/components/event-card-4'
import FeedBackFormPageLink from '@modules/feedback-form/page'
const SectionOne = () => {
  return (
    <Fragment>
       <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-1 lg:col-span-4 h-auto md:h-[400px] my-2 md:my-0 
          flex-1 text-center">
            <DailyEventCard events={events} />            
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