import Link from "next/link";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import type { CalendarEvent } from "types/global";


export default function SpecialEventSummaryCard({ eventdata }:{
  eventdata:CalendarEvent
}) {
  
  return (
    <div className={` flex flex-col w-full sm:w-full m-auto sm:p-2 md:pl-4`}>
      <p className="text-lg font-semibold">{eventdata.title}</p>
      <p className="text-zinc-800 font-normal">
        {" "}
        {eventdata.subtitle && eventdata.subtitle}
      </p>
      <Link
        href={`/events/?evtype=special`}
        className="text-blue-800 text-small inline-flex items-center"
      >
        click here for more details <TriangleRightIcon className="w-8 h-8" />
      </Link>
    </div>
  );
}
