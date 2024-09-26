import type { Calendar } from "types/global";
import GoogleTimeFormat from "./GoogleTimeFormat";

function CompleteGoogleUrl(newCalendarEvent: Calendar) {  
    const start = newCalendarEvent.startingDate + "T" + GoogleTimeFormat(newCalendarEvent.startTime);
    const end = newCalendarEvent.endingDate + "T" + GoogleTimeFormat(newCalendarEvent.endTime);    
    let Link = "https://www.google.com/calendar/render?action=TEMPLATE";
    Link += "&text=" + encodeURIComponent(newCalendarEvent.title);
    Link += "&details=" + newCalendarEvent.details;
    Link += "&dates=" + start + "/" + end;
    Link += newCalendarEvent.recurringRule
      ? "&recur=" + newCalendarEvent.recurringRule
      : "";
    Link += "&location=" + newCalendarEvent.location;
    Link += "&ctz=" + newCalendarEvent.timeZone;
    return Link;
  }

  export default CompleteGoogleUrl;