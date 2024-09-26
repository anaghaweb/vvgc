import type { Calendar } from "types/global";
import OutlookTimeFormat from "./OutlookTimeFormat";
import FormatTitle from "../common/FormatTitle";

const CompleteOutlookUrl=(newCalendarEvent: Calendar)=> {  
    const start = newCalendarEvent.startingDate + "T" + OutlookTimeFormat(newCalendarEvent.startTime);
    const end = newCalendarEvent.endingDate + "T" + OutlookTimeFormat(newCalendarEvent.endTime);
    const title = FormatTitle(newCalendarEvent.title);
    let Link = "https://outlook.live.com/owa/?rru=addevent";
    Link += "&startdt=" + encodeURIComponent(start);
    Link += "&enddt=" + encodeURIComponent(end);
    Link += "&subject=" + encodeURIComponent(title);
    Link += "&location=" +  encodeURIComponent(newCalendarEvent.location);
    Link +=  "&body=" + newCalendarEvent.details;
    return Link;
  }

  export default CompleteOutlookUrl