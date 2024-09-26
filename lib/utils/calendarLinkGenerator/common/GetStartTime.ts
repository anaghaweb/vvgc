import { CalendarEvent } from "types/global";

const GetStartTime = (event:CalendarEvent):string=>{
    let start="";
    event.eventList[0].startTime ? (start = event.eventList[0].startTime) : start = "9:00 AM";  
     
    return start;
}

export default GetStartTime;