import { type Calendar, type CalendarEvent } from "types/global";
import GetStartTime from "../common/GetStartTime";
import GetEndTime from "../common/GetEndTime";
import ConstructDetailsURL from "../common/ConstructDetailsUrl";
import AppleDateFormat from "./AppleDateFormat";
import CompleteAppleUrl from "./CompleteAppleUrl";

const AppleCalendarLinkGenerator = (event: CalendarEvent): string => {
  const newCalendarEvent: Calendar = {
    title: event.title,
    details: ConstructDetailsURL(event.id),
    startTime: GetStartTime(event),
    endTime: GetEndTime(event),
    startingDate: AppleDateFormat(event.date),
    endingDate: AppleDateFormat(event.date),
    timeZone: "America/Los_Angeles",
    location: event.location || "VVGC%20San%20Martin%20Hindu%20Temple%204087596183%2011355%20Monterey%20Hwy%20San%20Martin%20CA%2095046",
    recurringRule: null, //to be implemented
  };
  const completedAppleCalendarLink = CompleteAppleUrl(newCalendarEvent);
  
  return completedAppleCalendarLink;
};
export default AppleCalendarLinkGenerator;
