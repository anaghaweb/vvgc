 import { CalendarEvent } from "types/global";
  import MultipleEventsCard from "./multipleEvents";
  import SoloEventCard from "./soloEvent";
import { Fragment } from "react";
  const MainEventCard = ({ data }: { data: CalendarEvent }) => {    
    return data.title ? (
      <div>
       {
        data.eventList.length === 1 ?
        <SoloEventCard data={data} />
        :
        data.eventList.length > 1 ?
        <MultipleEventsCard data={data} />
        :
        null
       }         
      </div>
    ) : null;
  };
  export default MainEventCard;
  