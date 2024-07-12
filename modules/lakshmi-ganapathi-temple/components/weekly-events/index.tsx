import React, { Fragment } from "react";
import Divider from "@modules/common/components/divider";
import { LakshmiGanapathiWeeklyEventsDataList as weeklyEvents } from "@lib/data/sanjose_weekly_events";
import { Card, CardTitle } from "@modules/common/components/ui/card";

const LakshmiGanapathiWeeklyEvents = () => {
  return (
    <Fragment>
      <div className="px-2">
        <h1 className="text-2xl md:text-4xl font-cormorant font-semibold">
          Weekly Events:
        </h1>
        <Divider />
        <div className="p-2 py-2 bg-blue-100 rounded-md max-w-fit mx-auto my-2 md:my-6"> 
            <h5 className="text-sm font-roboto">
            Please bring the following items for Abhishekam:
            </h5>
            <Divider />
        <h5 className="text-sm font-roboto my-1">
          
          Milk, Yogurt(Buttermilk), Saffron, Orange Juice, Flowers, Fruits &
          Sweets/Prasadam
        </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeklyEvents.map((event, index) => {
            return event.events.length > 0 ? (
              <Card key={index} className="max-w-full md:min-w-[1/2] bg-amber-300 ">
               {event.events && <CardTitle className="px-4 pt-4 pb-2 font-cormorant font-semibold text-2xl" >{event.day}</CardTitle>}
                <div className="flex flex-col p-4  text-sm md:text-base">
                  {event.events.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="mb-2"
                      >
                        <p >{e.time}:</p>
                        <Divider className="border-orange-300 height-[1px]"/>
                        <p>{e.title}</p>
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
    </Fragment>
  );
};

export default LakshmiGanapathiWeeklyEvents;
