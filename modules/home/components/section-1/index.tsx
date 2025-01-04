
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";

import { CalendarEvent } from "types/global";
import { Card } from "@modules/common/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MargazhiParayanam from "./margazhiParayanam";

const SectionOne = ({ eventdata }:{
  eventdata:CalendarEvent[]
}) => {
  
  const currentDay = getDayOfTheWeek();
  const currentDate = getCurrentDate();
  const data = eventdata.find(
    (event) => {
      let eventDate =  new Date(event.date).getDate();
      let eventYear = new Date(event.date).getFullYear();
      let currentYear = new Date().getFullYear();
      
      return (eventDate === currentDate.getDate() && eventYear === currentYear)
    }
  );
  return (
    <div className=" rounded-sm p-2">     
      <div className="min-h-[300px]  grid grid-cols-1 lg:grid-cols-2 ">
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
          <p className="  text-2xl md:text-3xl text-sky-700 font-roboto">
            Today at the Temple, {currentDay}
          </p>
          <Divider />
          {
          data?.title ? 
          <SpecialEventSummaryCard eventdata={data} /> 
          :          
          <DailyEventSummaryCard events={weeklyEventsDataList} />
          }
          <article >
          <p className="font-playfair">
            <time dateTime="15:00" className='font-bold font-sans text-indigo-900'>3:00 PM: </time>
            Sri Venkateswara Abhisheka Sri Vishnu Sahasra Nama Chanting Aarati And Manthra Pushpa
          </p>
          <p className="font-playfair">
          <time dateTime="17:00" className='font-bold font-sans text-indigo-900'>5:00 PM: </time>
            Sani Dev/Sani Bhagwan Sthapana Murthy Prana Prathishtapan Ceremony Abhisheka Aarati Sani Chalisa Aarati
          </p>

          <Link className="" href={`/images/events/20250101.jpeg`} target="_blank">
          <div className="relative w-full h-[300px] md:h-[400px] flex flex-col my-2 md:my-4 p-1">
          
          <Image src="/images/events/20250101.jpeg"
          alt="event" 
             sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
          className="object-contain cursor-pointer mx-auto sm:w-full"
          fill
          />
          </div>
          </Link>
          </article>
        </Card>
        <MargazhiParayanam />        
      </div>
      
    </div>
  );
};

export default SectionOne;
