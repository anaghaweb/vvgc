import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";

interface SponsorLink {
  url: string;
  name: string;
}

interface NewEventCardProps {
  heading: string;
  subtitle: string;
  date?: string[];
  time?: string;
  imageUrl?: string;
  description?: string[];
  sponsorLinks?: SponsorLink[];
  bgcolor?: string;
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  heading,
  subtitle,
  date,
  time,
  imageUrl,
  description,
  sponsorLinks,
  bgcolor = "bg-yellow-50",
}) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // Sharing URLs
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(heading)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      heading + " " + currentUrl
    )}`,
    instagram: "https://www.instagram.com/", // placeholder
  };

  return (
    <>
      <article className={`w-full md:max-w-xl md:mx-auto shadow-sm overflow-hidden border border-yellow-100 p-4 md:p-8
       ${bgcolor}
        `}>
        {/* Heading */}
        <header className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold font-noto_serif text-indigo-950 mb-2">
            {heading}
          </h1>
          <div className="bg-red-100 p-4">

            <h2 className="text-xl text-red-950 font-semibold font-cormorant italic">{subtitle}</h2>
          </div>
        </header>

        {/* Date & Time */}
        {(date || time) && (
          <div className="flex flex-wrap gap-4 text-sm text-red-800 mb-4">
            <div className="flex flex-col gap-4 place-items-start">

              {date &&
                date.map((ele) =>
                  <div key={ele} className="flex gap-2 justify-center items-center">
                    <FcCalendar /><span className="font-medium">{ele}</span>
                  </div>
                )
              }
            </div>
            {time &&
              <div className="flex gap-2 justify-center items-center">
                <FcClock /><span className="font-medium"> {time}</span>
              </div>}
          </div>
        )}

        {/* Image */}
        {imageUrl && (
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <img
              src={imageUrl}
              alt={heading}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-200 hover:scale-[1.02]"
            />
          </a>
        )}

        {/* Description */}
        {description && (
          description.map((ele) =>
            <p key={ele} className="font-noto_serif text-base sm:text-lg mb-4 italic">
              {ele}
            </p>
          )
        )}

        {/* Sponsor Links (Grid Layout) */}
        {sponsorLinks && sponsorLinks.length > 0 && (
          <div className="flex flex-col md:flex-row gap-3 mb-6">
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
      </article>
    </>
  );
};

export default NewEventCard;

