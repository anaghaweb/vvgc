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
import Image_Grid from "@modules/common/components/image_grid";
import VishwaShanthiHomamEvent from "@modules/events/components/vishwaShantiHomam";
import SangamamHikeEvent from "@modules/events/components/sangamam_2025";

const SectionOne = ({ eventdata }: { eventdata: CalendarEvent[] }) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;


  try {
    data = eventdata.find((event) => {
      let eventDate = new Date(event.date).getDate();
      let eventMonth = new Date(event.date).getMonth();
      let eventYear = new Date(event.date).getFullYear();
      let currentYear = new Date().getFullYear();
      
      if (eventDate === currentDate.getDate() && eventYear === currentYear && eventMonth === currentDate.getMonth()) 
        {
          
        return eventDate === currentDate.getDate() && eventYear === currentYear ;
      }
      else return null;
    });
    
  } catch (error: any) {
    console.log(error.name);
  }
  return (
    <div className=" bg-gradient-to-r from-white via-slate-50-50 to-yellow-50 p-2">
      <div className={`min-h-[300px] grid grid-cols-1 lg:grid-cols-2
         
        `}>
        <div className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-full p-2">
          <h2 className="font-serif text-xl md:text-3xl text-left text-cyan-950">
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
            <article className="flex flex-col gap-2 w-full">
              <VishwaShanthiHomamEvent />              
            </article>
          </div>
        </div>
       
        {/* <Vijay_Satsang_Mela/> */}
        
      </div>
      <Divider />
      <SangamamHikeEvent />
      <Divider />
      <Image_Grid />
      <Divider />
    </div>
  );
};

export default SectionOne;
