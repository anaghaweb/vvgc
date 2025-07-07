import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";
import { CalendarEvent } from "types/global";
import Image from "next/image";
import Link from "next/link";
import Vijay_Satsang_Mela from "@modules/events/components/satsang_mela_2025";
import YoutubeVideoPLayer from "@modules/video-player";
import MahaRudraYagnaVideo from "@modules/campaigns/components/maharudra-yagnam";

const SectionOne = ({ eventdata }: { eventdata: CalendarEvent[] }) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;
  const cdn_cloudinary_urls = [
    'https://res.cloudinary.com/dixkqgqsi/image/upload/v1751856122/vvgc/images/2025/July/07/hanuman_chalisa_chanting.jpg',
  ];

  try {
    data = eventdata.find((event) => {
      let eventDate = new Date(event.date).getDate();
      let eventYear = new Date(event.date).getFullYear();
      let currentYear = new Date().getFullYear();
      if (eventDate === currentDate.getDate() && eventYear === currentYear)
        return eventDate === currentDate.getDate() && eventYear === currentYear;
      else return null;
    });
  } catch (error: any) {
    console.log(error.name);
  }
  return (
    <div className="p-2">
      <div className="min-h-[300px] grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
          <h2 className="font-serif text-2xl md:text-3xl text-left text-cyan-950">
            Today at the Temple, {currentDay}
          </h2>
          <Divider />
          {data?.title ? (
            <SpecialEventSummaryCard eventdata={data} />
          ) : (
            <DailyEventSummaryCard events={weeklyEventsDataList} />
          )}
          {/* NEXT SPECIAL EVENT CARD */}
          <div className="leading-6">
            <Divider className="my-4" />
            <h2 className="font-serif text-xl md:text-2xl text-left text-amber-900">
              Upcoming Event:
            </h2>
            {/* <YoutubeVideoPLayer /> */}
            <article className="flex flex-col gap-2">
              
              <Divider />
              <div className="w-full overflow-hidden shadow h-auto my-4">
                <Link
                  className=""
                  href={cdn_cloudinary_urls[0]}
                  target="_blank"
                >
                  <img
                    src={cdn_cloudinary_urls[0]}
                    alt="event"
                    
                    className="w-full object-cover"
                    
                  />
                </Link>
              </div>
            </article>
          </div>
        </div>
        {/* <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
        </Card> */}
        {/* NEXT SPECIAL EVENT CARD */}
        {/* <article className="flex flex-col gap-2"></article> */}
        <MahaRudraYagnaVideo />
      </div>
    </div>
  );
};

export default SectionOne;
