import DailyEventCard from "@modules/events/components/dailyEventCard";
import { WeeklyEvents } from "types/global";


export default function DailyEventTab({ weeklyEventsData }:{
  weeklyEventsData: WeeklyEvents[]
}) {
  return (
    <div className={`lg:w-[900px] mx-auto`}>
      
      {weeklyEventsData.map((data, index) => {
        return (
      <DailyEventCard data={data} key={index} />
        );
      })}
    </div>
  );
}
