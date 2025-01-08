
import { type Calendar, type CalendarEvent } from "types/global";
import GetStartTime from "../common/GetStartTime";
import GetEndTime from "../common/GetEndTime";
import ConstructDetailsURL from "../common/ConstructDetailsUrl";
import OutlookDateFormat from "./OutlookDateFormat";
import CompleteOutlookUrl from "./CompleteOutlookUrl";

const OutlookCalendarLinkGenerator = (event: CalendarEvent): string => {
  const newCalendarEvent: Calendar = {
    title: event.title,
    details: ConstructDetailsURL(event.id),
    startTime: GetStartTime(event),
    endTime: GetEndTime(event),
    startingDate: OutlookDateFormat(event.date),
    endingDate: OutlookDateFormat(event.date),
    timeZone: "America/Los_Angeles",
    location: event.location || "VVGC San Martin Temple",
    recurringRule: null, //to be implemented
  };
  const completedOutlookCalendarLink = CompleteOutlookUrl(newCalendarEvent);
  
  return completedOutlookCalendarLink;
};

export default OutlookCalendarLinkGenerator;