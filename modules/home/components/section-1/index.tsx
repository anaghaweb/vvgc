import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";
import { CalendarEvent } from "types/global";
import Image_Grid from "@modules/common/components/image_grid";
import Upcoming_Event from "./upcoming_event";
import Dasara_2025 from "./dasara-2025";
import Image_Tiles from "@modules/common/components/image_tiles";


const SectionOne = ({ eventdata }: { eventdata: CalendarEvent[] }) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;

const urlset = [ 
    
  'https://res.cloudinary.com/dixkqgqsi/image/upload/v1751856122/vvgc/images/2025/July/07/hanuman_chalisa_chanting.jpg',
  `https://res.cloudinary.com/dixkqgqsi/image/upload/v1749753566/vvgc/images/2025/june/23/ekadasha_vara_sri_rudrabhisheka.jpg`,
];

const urlset_dasara = [
  `https://res.cloudinary.com/dixkqgqsi/image/upload/v1758093475/vvgc/images/2025/september/navaratri_2025.jpg`,
`https://res.cloudinary.com/dixkqgqsi/image/upload/v1757855271/vvgc/images/2025/september/dasara2025.jpg`,
];

  try {
    data = eventdata.find((event) => {
      let eventDate = new Date(event.date).getDate();
      let eventMonth = new Date(event.date).getMonth();
      let eventYear = new Date(event.date).getFullYear();
      let currentYear = new Date().getFullYear();

      if (eventDate === currentDate.getDate() && eventYear === currentYear && eventMonth === currentDate.getMonth()) {

        return eventDate === currentDate.getDate() && eventYear === currentYear;
      }
      else return null;
    });

  } catch (error: any) {
    console.log(error.name);
  }
  return (
    <div className=" bg-gradient-to-r from-white via-slate-50-50 to-yellow-50 p-2">
      <div className={`min-h-[300px] grid grid-cols-1 lg:grid-cols-2`}>
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
            {/* <article className="flex flex-col gap-2 w-full">
              <GaneshaWorkshop/>
              
            </article> */}
            <article className="flex flex-col gap-2 w-full">
              <Upcoming_Event />
            </article>
            {/* <article className="flex flex-col gap-2 w-full">
              <Dasara_2025 />
            </article> */}
           
          </div>
        </div>


      </div>
      <Divider />
       <Dasara_2025 />
        <Divider />
      <Image_Tiles urlset={urlset_dasara}/>
      
      <Divider />
      <Image_Tiles urlset={urlset}/>
      <Divider />
    </div>
  );
};

export default SectionOne;
