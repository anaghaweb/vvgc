
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";

import { CalendarEvent } from "types/global";
import { Card } from "@modules/common/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MahaPrasadamSanMartin from "@modules/campaigns/components/maha-prasadam/maha-prasadam";

const SectionOne = ({ eventdata }: {
  eventdata: CalendarEvent[]
}) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;

  try{
    data = eventdata.find(
      (event) => {
        let eventDate = new Date(event.date).getDate();
        let eventYear = new Date(event.date).getFullYear();
        let currentYear = new Date().getFullYear();  
        if(eventDate === currentDate.getDate() && eventYear === currentYear)
          return (eventDate === currentDate.getDate() && eventYear === currentYear)
        else 
          return null;
      }
    );
  }catch(error:any){
    console.log(error.name)
  }
  return (
    <div className=" rounded-sm p-2">
      <div className="min-h-[300px] grid grid-cols-1 lg:grid-cols-2 ">
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
          <h2 className="font-serif text-2xl md:text-3xl text-left text-cyan-950">
            Today at the Temple, {currentDay}
          </h2>
          <Divider />
          {
            data?.title ?
              <SpecialEventSummaryCard eventdata={data} />
              :
              <DailyEventSummaryCard events={weeklyEventsDataList} />
          }
          {/* NEXT SPECIAL EVENT CARD */}
          <div className="leading-6 tracking-tighter">
          <Divider className="my-4"/>
            
            <h3 className="font-sans font-semibold md:max-w-screen-md my-2 text-lg text-left text-blue-950">
              Sri Vallabha Maha Ganapathi Temple, VVGC San Martin Hindu Temple along with ICE Foundation and Ari Vallabha Maha Ganapathi Temple Presents:
            </h3>
            <p className="font-sans md:max-w-screen-md my-2 text-base text-left text-gray-950">
            <span className="font-serif text-xl  text-orange-950"> Vasantha Panchami Saraswathi Pooja  
            </span>
            <span className="text-xl"> & </span>
              <span className="font-serif text-xl  text-orange-950"> Aksharabhyasam Ceremony</span> from <span className="font-semibold"> 11:00 AM </span> to <span className="font-semibold"> 2:00 PM </span> followed by <span className="font-semibold"> Mahaprasadam & Priti Bhoj </span>
            </p>
            <p className="font-serif md:max-w-screen-md my-2 text-base text-center">
              All are welcome to participate with family, friends, children and Get Blessings.
            </p>

            <article className="flex flex-col md:flex-row gap-2">
              <div className="relative w-full h-[300px] md:h-[500px] flex flex-col my-2 md:my-4 p-1">
                <Link className="" href={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1738200389/VVGC%20Events/20250202.jpg`} target="_blank">
                  <Image src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1738200389/VVGC%20Events/20250202.jpg"
                    alt="event"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-contain cursor-pointer mx-auto sm:w-full"
                    fill
                  />
                </Link>
              </div>
            </article>
          </div>
        </Card>
       
        <MahaPrasadamSanMartin  />
      </div>
    </div>
  );
};

export default SectionOne;
