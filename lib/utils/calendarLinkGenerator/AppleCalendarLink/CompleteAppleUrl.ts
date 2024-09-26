import type { Calendar } from "types/global";
import AppleTimeFormat from "./AppleTimeFormat";
import FormatTitle from "../common/FormatTitle";
import FoldLine from "../common/FoldLine";

function CompleteAppleUrl(newCalendarEvent: Calendar) {
  const start =  newCalendarEvent.startingDate +  "T" + AppleTimeFormat(newCalendarEvent.startTime);
  const end =   newCalendarEvent.endingDate + "T" +  AppleTimeFormat(newCalendarEvent.endTime);
  const date = new Date().toISOString();
  const UID = "c7614cff-3549-4a00-9152-d25cc1fz998e";
  const title = FormatTitle(newCalendarEvent.title);
  const details = FoldLine(newCalendarEvent.details);

  // EVENT COMPONENT
  const iCalEventContent =
  `BEGIN:VCALENDAR
VERSION:2.0
PRODID:/vvgc.org/Apple Calendar/1.0EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${title}
UID:${UID}
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
DTSTART:${start}
DTEND:${end}
DTSTAMP:${date.slice(0, date.length - 5).replace(/[-:]/g, "")}
CATEGORIES:ICalendar
GEO:37.06001;-121.59789
DESCRIPTION:${details}
LOCATION:${newCalendarEvent.location}
END:VEVENT
END:VCALENDAR`;
const trimmedEventComponent = iCalEventContent.trim();
const Link = `data:text/calendar;charset=utf-8,${encodeURIComponent(trimmedEventComponent)}`;
return Link;
}
export default CompleteAppleUrl;
