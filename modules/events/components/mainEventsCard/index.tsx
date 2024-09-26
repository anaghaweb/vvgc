 import { CalendarEvent } from "types/global";
  import MultipleEventsCard from "./multipleEvents";
  import SoloEventCard from "./soloEvent";
import { Fragment } from "react";
  const MainEventCard = ({ data, count }: { data: CalendarEvent, count?:number }) => {    
    return data.title ? (
      <Fragment>
       {
        data.eventList.length === 1 ?
        <SoloEventCard data={data} />
        :
        data.eventList.length > 1 ?
        <MultipleEventsCard data={data} />
        :
        null
       }         
      </Fragment>
    ) : null;
  };
  export default MainEventCard;
  