import React, { Fragment } from "react";
import Divider from "@modules/common/components/divider";
import { LakshmiGanapathiWeeklyEventsDataList as weeklyEvents } from "@lib/data/sanjose_weekly_events";
import { Card, CardTitle } from "@modules/common/components/ui/card";

const LakshmiGanapathiWeeklyEvents = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl text-cyan-950 font-serif mt-4">
        Weekly Events:
      </h1>
      <Divider />
      <div className="p-2 py-2 bg-blue-100 rounded-md max-w-fit mx-auto my-2 md:my-6">
        <h5 className="text-base font-sans">
          Please bring the following items for Abhishekam:
        </h5>
        <Divider />
        <h5 className="text-base font-sans my-1">
          Milk, Yogurt(Buttermilk), Saffron, Orange Juice, Flowers, Fruits &
          Sweets/Prasadam
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeklyEvents.map((event, index) => {
          return event.events.length > 0 ? (
            <Card
              key={index}
              className={`max-w-full md:min-w-[1/2] bg-amber-200`}
            >
              {event.events && (
                <CardTitle className="px-4 pt-4 pb-2 font-cormorant font-semibold text-2xl">
                  {event.day}
                </CardTitle>
              )}
              <div className="flex flex-col p-4 text-sm md:text-base">
                {event.events.map((e, i) => {
                  return (
                    <div key={i} className="flex gap-2 mb-2">
                      <p className="text-blue-950 font-semibold">{e.time}:</p>
                      <p>{e.title}</p>
                      <hr className="border-orange-300" />
                    </div>
                  );
                })}
              </div>
            </Card>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default LakshmiGanapathiWeeklyEvents;
