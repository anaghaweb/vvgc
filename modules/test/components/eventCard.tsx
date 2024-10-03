import {
  Card,
  CardContent,
  CardHeader,
} from "@modules/common/components/ui/card";

import GenerateCalendarLinks from "@modules/common/components/CalendarLinks";
import type { CalendarEvent } from "types/global";
import ListEachEvent from "./eachEvent";
import ExternalLink from "@modules/common/components/ExternalLink";
import LazyImageLoader from "@modules/common/components/LazyImageLoader";

const MainEventCard = ({ data }: { data: CalendarEvent }) => {
  const singleEvent = data.eventList[0];
  return data.title ? (
    <Card
      key={data.id}
      className={`bg-blue-50 flex flex-col w-full lg:max-w-2xl sm:w-full m-auto h-auto my-2 sm:p-2 `}
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
        {data.eventList.length === 1
          ? !singleEvent.details &&
            singleEvent.startTime && (
              <p className="text-base font-roboto font-bold text-cyan-950">
                Timings: {singleEvent?.startTime}{" "}
                {singleEvent?.endTime && ` to ${singleEvent?.endTime}`}
              </p>
            )
          : null}
      </CardHeader>
      <CardContent>
        {data.eventList.length === 1 && (
          <div>
            <div className="flex flex-col md:flex-row gap-2">
              {singleEvent.startTime && (
                <p className="text-base font-roboto font-bold text-cyan-950">
                  {singleEvent.startTime}
                </p>
              )}
              {singleEvent.details && (
                <p className="text-base text-pretty font-roboto text-cyan-950">
                  {singleEvent.details}
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {singleEvent.sponsorLink && (
                <ExternalLink
                  href={singleEvent.sponsorLink}
                  text="sponsor link"
                />
              )}
              {singleEvent.registerLink && (
                <ExternalLink
                  href={singleEvent.registerLink}
                  text="register link"
                />
              )}
            </div>
            {singleEvent.imageUrl && (
              <LazyImageLoader
                imageUrl={singleEvent.imageUrl}
                maxHeight="500px"
              />
            )}
          </div>
        )}

        {data.eventList.length > 1 &&
          data.eventList?.map((element, index) => (
            <ListEachEvent event={element} key={index} />
          ))}
      </CardContent>
      {/* sponsor event Link */}
      <div className="flex flex-col lg:flex-row bg-green-100 items-center justify-center lg:justify-evenly pt-4">
        <GenerateCalendarLinks event={data} />
      </div>
    </Card>
  ) : null;
};
export default MainEventCard;
