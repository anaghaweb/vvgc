import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import React_Video_Player from "@modules/common/components/react-video-player";
import Divider from "@modules/common/components/divider";

interface SponsorLink {
  url: string;
  name: string;
}

interface imageArray {
  url: string;
  alt: string;
  id: number;
}

interface NewEventCardProps {
  heading: string;
  subtitle: string;
  date?: string[];
  time?: string;
  imageArray?: imageArray[];
  videoUrl?: string;
  description?: string[];
  sponsorLinks?: SponsorLink[];
  details?: string[];
  bgcolor?: string;
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  heading,
  subtitle,
  date,
  time,
  imageArray,
  videoUrl,
  description,
  sponsorLinks,
  details,
  bgcolor = "bg-yellow-50",
}) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";


  return (
    <>
      <article className={`w-full min-w-72 md:max-w-xl md:mx-auto shadow-sm overflow-hidden border border-yellow-200 p-4 md:p-8
       ${bgcolor}
        `}>
        {/* Heading */}
        <header className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold font-noto_serif text-indigo-950 mb-2">
            {heading}
          </h1>
          <div className="">
            <h2 className="text-base text-zinc-900 font-semibold font-sans">{subtitle}</h2>
          </div>
        </header>
        {/* Date & Time */}
        {(date || time) && (
          <div className="flex flex-wrap text-sm bg-yellow-100 text-red-800 mb-2 p-2">
            <div className="flex flex-col gap-2 place-items-start">
              {date &&
                date.map((ele) =>
                  <div key={ele} className="flex p-2 gap-2 justify-center items-center">
                    <FcCalendar className="h-4 w-4" /><span className="font-medium">{ele}</span>
                  </div>
                )
              }
            </div>
            {time &&
              <div className="flex p-2 gap-2 justify-center items-center">
                <FcClock className="h-4 w-4" /><span className="font-medium"> {time}</span>
              </div>}
          </div>
        )}

        {/* Sponsor Links (Grid Layout) */}
        {sponsorLinks && sponsorLinks.length > 0 && (
          <div className="flex flex-col gap-3 mb-6">
            {sponsorLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 underline-offset-4 hover:underline hover:bg-green-100 rounded-sm text-blue-500  hover:text-blue-800 font-medium">
                <span>{link.name}</span>
                <FaExternalLinkAlt className="inline-block ml-2 align-baseline" />
              </Link>
            ))}
          </div>
        )}
        {/* Video  */}
        {
          videoUrl && (
            <React_Video_Player vsrc={videoUrl} />
          )
        }
        {/* Image */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-2 mb-4 mx-auto">

          {imageArray &&
            imageArray.map(image =>
              <a
                key={image.id}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="min-w- max-w-60 object-contain rounded-lg transition-transform duration-200 hover:scale-[1.02]"
                />
              </a>
            )
          }
        </div>


        {/* Details */}
        {
          details && details.map((ele, index) =>{
            return <div key={ele} className="  p-2">
              <p className="font-roboto text-gray-950 text-base text-left">
                {ele}
              </p>
            </div>
          })
        }

        {/* Description */}
        {description && (
          description.map((ele) =>
            <div key={ele} className="p-4  text-center">
              <p className="font-cormorant font-semibold text-gray-950 text-xl">
                {ele}
              </p>
            </div>
          )
        )}
        <Divider />
      </article>
    </>
  );
};

export default NewEventCard;

