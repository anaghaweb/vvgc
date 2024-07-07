import React, { cache } from "react";
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

import clsx from "clsx";
import dayOfTheWeek from "@lib/utils/deyOfTheWeek";
import Divider from "@modules/common/components/divider";
import { TriangleRightIcon } from "@radix-ui/react-icons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  fallback: "serif",
});

export default function EventSummaryCard({ eventdata }) {
  const data = eventdata;
  const currentDay = dayOfTheWeek();
  return (
    <div className={` flex flex-col w-full sm:w-full m-auto sm:p-2 md:pl-4`}>       
     
      
        <p className="text-lg font-semibold">
        {data.title}
        </p>
      <p className="text-zinc-800 font-normal">
          {" "}
          {data.subtitle && data.subtitle}
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
