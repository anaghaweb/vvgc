import {
    Card,
    CardContent,
    CardHeader,
} from "@modules/common/components/ui/card";
  
  import GenerateCalendarLinks from "@modules/common/components/CalendarLinks";
import type { CalendarEvent } from "types/global";
import ListEachEvent from "./eachSubEvent";
  
  const MultipleEventsCard = ({ data }: { data: CalendarEvent }) => {
    return data.title ? (
      <Card
        key={data.id}
        className={`border-[1px] border-purple-300 flex flex-col w-full lg:max-w-2xl sm:w-full m-auto h-full my-2 sm:p-2 `}
      >
        <CardHeader className="text-2xl text-rose-800">
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "long",
            day: "numeric",
          })}
          <p className="pr-2 text-xl md:text-2xl font-semibold text-cyan-950">
            {data.title}
          </p>
          {data.subtitle && (
            <p className="text-base font-roboto  text-cyan-950">
              {data.subtitle}{" "}
            </p>
          )}
         
        </CardHeader>
        <CardContent>
          {data.eventList.length > 1 &&
            data.eventList?.map((element, index) => (
              <ListEachEvent event={element} key={index} />
            ))}
        </CardContent>
        {/* sponsor event Link */}
        
          <GenerateCalendarLinks event={data} />
        
      </Card>
    ) : null;
  };
  export default MultipleEventsCard;
  