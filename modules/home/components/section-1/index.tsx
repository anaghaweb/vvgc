
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


  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1743392787/VVGC%20Events/vasanthaNavaratriCelebrations.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1738286259/VVGC%20Events/Maharudra-2025.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1743493296/VVGC%20Events/ramNavami2025.jpg`,]

  try {
    data = eventdata.find(
      (event) => {
        let eventDate = new Date(event.date).getDate();
        let eventYear = new Date(event.date).getFullYear();
        let currentYear = new Date().getFullYear();
        if (eventDate === currentDate.getDate() && eventYear === currentYear)
          return (eventDate === currentDate.getDate() && eventYear === currentYear)
        else
          return null;
      }
    );
  } catch (error: any) {
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
          <div className="leading-6">

            <Divider className="my-4" />
            <h2 className="font-serif text-xl md:text-2xl text-left text-amber-900">
              Upcoming Special Event
            </h2>
            <article className="flex flex-col md:flex-row gap-2">
              <div className="relative w-full h-[300px] md:h-[500px] flex flex-col my-2 md:my-4 p-1">
                <Link className="" href={cdn_cloudinary_urls[0]} target="_blank">
                  <Image src={cdn_cloudinary_urls[0]}
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
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
         
          {/* NEXT SPECIAL EVENT CARD */}  


            <article className="flex flex-col md:flex-row gap-2">
              <div className="relative w-full h-[300px] md:h-[600px] lg:h-[650px] flex flex-col my-2 md:my-4 p-1">
                <Link className="" href={cdn_cloudinary_urls[2]} target="_blank">
                  <Image src={cdn_cloudinary_urls[2]}
                    alt="event"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-contain cursor-pointer mx-auto sm:w-full"
                    fill
                  />
                </Link>
              </div>

            </article>
          
        </Card>

        {/* <MahaPrasadamSanMartin /> */}
      </div>
    </div>
  );
};

export default SectionOne;
