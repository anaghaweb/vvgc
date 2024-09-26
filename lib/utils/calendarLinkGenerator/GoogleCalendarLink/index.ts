
import { type Calendar, type CalendarEvent } from "types/global";
import GetStartTime from "../common/GetStartTime";
import GetEndTime from "../common/GetEndTime";
import ConstructDetailsURL from "../common/ConstructDetailsUrl";
import GoogleDateFormat from "./GoogleDateFormat";
import CompleteGoogleUrl from "./CompleteGoogleUrl";

const GoogleCalendarLinkGenerator = (event: CalendarEvent): string => {
  const newCalendarEvent: Calendar = {
    title: event.title,
    details: ConstructDetailsURL(event.id),
    startTime: GetStartTime(event),
    endTime: GetEndTime(event),
    startingDate: GoogleDateFormat(event.date),
    endingDate: GoogleDateFormat(event.date),
    timeZone: "America/Los_Angeles",
    location: event.location || "VVGC San Martin Hindu Temple",
    recurringRule: null, //to be implemented
  };

  const completedGoogleCalendarLink = CompleteGoogleUrl(newCalendarEvent);
  return completedGoogleCalendarLink;
};

export default GoogleCalendarLinkGenerator;
