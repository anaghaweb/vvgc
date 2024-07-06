import React from "react";
import { FetchData } from "@lib/utils/fetchdata";
import localJsonData from "@lib/utils/staticData";
import { cormorant } from "app/fonts";
import EventsPageView from "@modules/events/pages";
import { notFound } from "next/navigation";

// export const metadata = {
//   title: "Events",
//   description: "Temple performs all types of events",
// };

export async function generateMetadata({ searchParams }) {
  try {
   
     return {
      title: `${searchParams.evtype + " " + 'events' ?? 'Events'} | VVGC`,
      description:'vvgc events',
     
    }
  } catch (error) {
    console.log(error)
     notFound();
  }
}

export default async function Event({searchParams}) {
  const data = await FetchData();
  const regularEventData = await localJsonData();

  return (
    <>
      {/* <div
        className={`flex justify-center relative items-center w-full h-[75svh] text-3xl leading-9 text-white bg-center bg-no-repeat bg-cover m-px
                    bg-hero-event ${cormorant.variable} `}>
        <h1 className="text-[1.9rem] md:text-[4.5rem] font-[cormorant]">
          {" "}
          Special Events{" "}
        </h1>
      </div> */}

      <main className="mx-auto py-4 bg-neutral-100">
        <EventsPageView data={data} regularEventData={regularEventData} searchParams={searchParams}/>
      </main>
    </>
  );
}
