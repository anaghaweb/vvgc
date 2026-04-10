import {
    Card,
    CardContent,
    CardHeader,
  } from "@modules/common/components/ui/card";
  
  import GenerateCalendarLinks from "@modules/common/components/CalendarLinks";
  import type { CalendarEvent } from "types/global";
  import ExternalLink from "@modules/common/components/ExternalLink";
  import LazyImageLoader from "@modules/common/components/LazyImageLoader";
  import Share from "../../share-Url";
  
  const SoloEventCard = ({ data }: { data: CalendarEvent }) => {
    const singleEvent = data.eventList[0];
    return data.title && data.eventList.length === 1 ? (
      <Card
        key={data.id}
        className={`border-[1px] border-purple-300 flex flex-col w-full lg:max-w-2xl sm:w-full 
         bg-gradient-to-r from-green-50 via-slate-50 to-blue-50
         text-gray-900 text-left
          m-auto  my-2 sm:p-2`}
      >
        <CardHeader className="text-2xl text-rose-800 ">
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "long",
            day: "numeric",
          })}
          <p className="pr-2 text-xl md:text-2xl font-semibold text-cyan-950">
            {data.title}
          </p>
          {data.subtitle && (
            <p className="text-sm font-roboto text-cyan-950">
              {data.subtitle}{" "}
            </p>
          )}
          { !singleEvent.details &&
              singleEvent.startTime && (
                <p className="text-sm font-roboto font-bold text-cyan-950">
                  Timings: {singleEvent?.startTime}{" "}
                  {singleEvent?.endTime && ` to ${singleEvent?.endTime}`}
                </p>
              )
            }
        </CardHeader> 
        <CardContent>         
           
              <div className="grid grid-cols-12 gap-2">
                {singleEvent.startTime && singleEvent.details && (
                  <div className="col-span-full md:col-span-2 text-sm md:text-end font-roboto font-bold text-cyan-950 ">
                    <p>
                      {singleEvent.startTime}
                      </p>
                  </div>
                )}
                {singleEvent.details && (
                  <div className="col-span-full md:col-span-10 text-sm text-pretty font-roboto text-cyan-950">
                    {singleEvent.details}
                  </div>
                )}
              </div>
              <div className="col-span-full flex flex-col md:flex-row gap-4 items-center justify-center">
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
                  maxHeight="300px"
                />
              )}
           
         
        </CardContent>
        {/* sponsor event Link */}
        <div className="flex flex-col md:flex-row w-full">
          <Share id={data.id}/>
          <GenerateCalendarLinks event={data} />
        </div>        
      </Card>
    ) : null;
  };
  export default SoloEventCard;
  