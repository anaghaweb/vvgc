import React, { Fragment } from "react";
import { weeklyEventsList } from "@lib/data/regularEventData";
import DailyEventCard from "@modules/events/components/event-card-4";
import FeedBackFormPageLink from "@modules/feedback-form/page";
import EventSummaryCard from "@modules/events/components/event-card-5";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import Divider from "@modules/common/components/divider";
import MahaPrasadamSanJose from "@modules/lakshmi-ganapathi-temple/components/daily-maha-prasadam";

const SectionOne = ({ eventdata }) => {
  const data = eventdata.content.find(
    (event) => new Date(event.date).getDate() === new Date().getDate()
  );
  const currentDay = dayOfTheWeek();
  return (
    <Fragment>
      <div className="min-h-[300px]  grid grid-cols-1 lg:grid-cols-2">
        <div className="h-auto my-4 md:my-0 flex-1 p-2 lg:pl-2 md:pl-4 bg-orange-100 col-span-1 text-center">
          <div className="text-2xl md:text-3xl md:mt-2 font-semibold text-sky-950 font-cormorant">
            Today at the Temple, {currentDay}
          </div>
          <Divider />

          {data?.title && <EventSummaryCard eventdata={data} />}

          {/* {data?.title && <p className=' md:pl-4 text-sm font-normal'>Below daily events will also be conducted if time permits</p>}  */}

          {/* Daily Events */}
          <DailyEventCard events={weeklyEventsList} />
        </div>
        {/* <div className="h-auto my-4 md:my-0 flex-1 pl-2 md:pl-4 bg-green-400 col-span-1 text-center">
          <h1 className="text-xl md:text-2xl font-semibold">
            Starting From August 17th 2024
          </h1>
          <div className="text-xl md:mt-2 text-sky-950 font-cormorant">
            Nithya Maha Prasadam at VVGC, San Jose
          </div>
          <Divider />
          <h4 className="font-playfair">
            Om Sree Mathre Namaha Om Gum Ganapathaye Namaha
          </h4>
          <p>Sri Lakshmi Ganapathi Temple</p>
          <p>Vaidica Vidhya Ganapathi Center Inc, San Jose</p>
          <p>32 Rancho Drive Ste B San Jose CA 95111</p>
          <p>Nithya (Daily) Maha Prasadam /anna Dhanam / Priti Bhoj</p>

          <h6>Weekdays 4:00PM to 8:00PM</h6>
          <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served</p>
          <h6>Weekends 12:00PM to 8:00PM</h6>
          <p>Jai Jagadeesha Hare Aarati And Maha Prasadam served</p>
          <p>All Are Welcome To Participate With Family Friends And Get Blessings </p>
          <p>
          Please Support This Maha Kainkaryam
          </p>
          <p>Sponsors Welcome</p>
          <p>Weekdays $ 501.00
          </p>
          <p>Weekends $1001.00</p>
          <p>Subham Bhuyath Mangalani Bhavanthu Loka Samastha Sukino Bhavanthu </p>
          <p>For further details please ontact</p>
          <p> Pandit Siva Sankar Hemmanur 408 724 3577</p>
          <p>Pandit Ganesh Shasthry  925 209 7637</p>
          <p>San Jose Temple  Number 408 226 3600</p>
        </div> */}
        <MahaPrasadamSanJose />
      </div>
    </Fragment>
  );
};

export default SectionOne;
