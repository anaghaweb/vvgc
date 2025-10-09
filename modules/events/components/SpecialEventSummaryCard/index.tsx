import Link from "next/link";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import type { CalendarEvent } from "types/global";

export default function SpecialEventSummaryCard({ eventdata }: {
  eventdata: CalendarEvent
}) {

  return (
    <div className={`flex flex-col w-full sm:w-full m-auto sm:p-2 md:pl-4 text-sm md:text-base`}>
      <p className="text-2xl lg:text-3xl text-indigo-800 font-noto_sans_display font-semibold">
        {eventdata.title}
      </p>
      <p className="text-zinc-800 text-base">
        {" "}
        {eventdata.subtitle && eventdata.subtitle}
      </p>
      {eventdata.eventList.length > 1 &&
        (<p className="text-zinc-800">
          {" "}
          <span className="font-semibold font-noto_serif">{eventdata.eventList[0].startTime && eventdata.eventList[0].startTime}</span>   {eventdata.eventList[0].details && eventdata.eventList[0].details}
        </p>)}
      <Link
        href={`/events/${eventdata.id}`}
        className="text-blue-800 text-small inline-flex items-center"
      >
        {" "} click here for more details <TriangleRightIcon className="w-8 h-8" />
      </Link>
    </div>
  );
}
