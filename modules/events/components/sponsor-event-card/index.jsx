import React from "react";
import Image from "next/image";
import CalenderLinks from "@lib/utils/calendarlinks";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@modules/common/components/ui/card";

import clsx from 'clsx';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  fallback: "serif",
});

export default function SponsorEvent({ data, index }) {
  return (
    !!data.title ? (
      <Card
        key={data.id}
        className={`bg-blue-100 flex flex-col w-full sm:w-full m-auto h-auto my-2 sm:p-2`}
      >
        <CardHeader className=" text-2xl  text-rose-800">
          {new Date(data.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "long",
            day: "numeric",
          })}
        </CardHeader>
        <p className=" pl-7 text-xl md:text-2xl font-semibold text-cyan-950">
          {data.title}
        </p>
        {data.subtitle && (
          <p className="pl-7 pb-1 font-roboto font-bold text-cyan-950">
            {data.subtitle}
          </p>
        )}
        <hr className=" my-2 " />
        {data.imageurl && (
          <div className="relative w-[100%] h-[200px] md:w-[100%] md:h-[500px]">
            <Link href={data.imageurl} target="_blank">
              <Image
                src={`${data.imageurl}`}
                alt="Event"
                fill
                quality={75}
                sizes={"100vw"}
                className="absolute object-contain cursor-pointer"
              />
            </Link>
          </div>
        )}

        {data.imageurl && <hr className=" my-2 " />}

        <CardContent className="grid grid-cols-10 gap-x-1 gap-y-3 my-5">
          {data.startTime && data.endTime && data.description ? (
            <>
              <div className="col-span-2 border-r-[1px] text-blue-900 text-[13px] md:text-base font-roboto flex items-center justify-center px-[4px]">
                {data.startTime}
              </div>
              <div className="col-span-8 text-[13px] md:text-base ">
                {data.description}
              </div>
            </>
          ) : data.startTime && !data.endTime && data.description ? (
            <>
              <div
                className="col-span-2 border-r-[1px] text-blue-900 text-[13px]
           md:text-base font-sans flex items-center justify-center px-[4px]"
              >
                {data.startTime}:
              </div>
              <div className="col-span-8 text-[13px] md:text-base">
                {data.description}
              </div>
            </>
          ) : !data.startTime && !data.endTime && data.description ? (
            <div className="col-span-10 text-xl text-blue-950">
              {data.description}
              <br />
            </div>
          ) : (
            !data.description && ""
          )}

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (num, index) =>
              data[`time_${num}`] ? (
                <>
                  <div
                    key={data?.date + num}
                    className="col-span-2 border-r-[1px] text-blue-900 text-[13px] md:text-base font-roboto flex items-center justify-center px-[4px]"
                  >
                    {data[`time_${num}`]}:
                  </div>
                  <div
                    key={index + num}
                    className="col-span-8 px-1 text-[13px] md:text-base w-full"
                  >
                    {data[`event_${num}`]}
                  </div>
                </>
              ) : data[`event_${num}`] ? (
                <>
                  {data[`time_${num}`] && (
                    <div
                      key={data?.date + num}
                      className="col-span-2 border-r-[1px] text-[13px] md:text-base text-blue-900 flex items-center justify-center font-inter px-1"
                    >
                      {"-"}
                    </div>
                  )}
                  <div
                    key={index + num}
                    className="col-span-full font-inter text-[13px] md:text-base text-center"
                  >
                    {data[`event_${num}`]}
                  </div>
                </>
              ) : (
                ""
              )
          )}

          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus accusantium ipsum beatae atque, animi cum ipsam et distinctio nemo vitae sapiente vel libero eos velit eaque veniam recusandae debitis. */}
        </CardContent>
        {/* sponsor event Link */}

        <CardFooter className="flex flex-col p-2 rounded w-full border-slate-400 border-solid shadow-inner bg-gray-100 md:bg-transparent md:border-none ">
          {data.sponsorLink && (
            <Link
              className="flex justify-start items-center gap-2 "
              href={data.sponsorLink}
              target="_blank"
            >
              <h6 className=" text-base md:text-xl text-indigo-950  ">
                {data.link_keyword}
              </h6>
              <FaExternalLinkAlt className="text-lime-700" />
            </Link>
          )}

          {data.registerLink && (
            <Link
              className="flex justify-start items-center gap-2 "
              href={data.registerLink}
              target="_blank"
            >
              <h6 className=" text-base md:text-xl text-indigo-950  ">
                {data.link_keyword_1}
              </h6>
              <FaExternalLinkAlt className="text-lime-700" />
            </Link>
          )}

          <div className="flex md:flex-row  p-2">
            <span className="justify-center md:text-xl md:text-left text-blue-950 pr-2">
              Add to Calendar:{" "}
            </span>
            <div className="grid grid-cols-3 items-center gap-x-3">
              <CalenderLinks
                eventdata={{
                  startdate: data.date,
                  enddate: data.date,
                  startTime: data.startTime ? data.startTime : "12:00AM",
                  endTime: data.endTime ? data.endTime : "11:59PM",
                  summary:
                    data.title === ""
                      ? `Events on ${data.date}`
                      : data.title,
                  description: data.description,
                }}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    ) : (
      ""
    )
  );
}
