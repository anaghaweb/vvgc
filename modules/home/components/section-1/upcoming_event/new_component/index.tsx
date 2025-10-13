import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface SponsorLink {
  url: string;
  name: string;
}

interface NewEventCardProps {
  heading: string;
  subtitle: string;
  date?: string;
  time?: string;
  imageUrl?: string;
  description?: string;
  sponsorLinks?: SponsorLink[];
  bgcolor?:string;
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  heading,
  subtitle,
  date,
  time,
  imageUrl,
  description,
  sponsorLinks,
  bgcolor="bg-yellow-50",
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
      <article className={`w-full md:max-w-md md:mx-auto shadow-sm overflow-hidden border border-yellow-100 p-4 md:p-8
       ${bgcolor}
        `}>
        {/* Heading */}
        <header>
          <h1 className="text-2xl sm:text-3xl font-semibold font-noto_serif text-indigo-950 mb-2">
            {heading}
          </h1>
          <h2 className="text-lg sm:text-xl  font-noto_sans mb-4">{subtitle}</h2>
        </header>

        {/* Date & Time */}
        {(date || time) && (
          <div className="flex flex-wrap gap-4 text-sm text-red-800 mb-4">
            {date && <span className="font-medium">📅 {date}</span>}
            {time && <span className="font-medium">⏰ {time}</span>}
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
          <p className="font-noto_serif text-base sm:text-lg mb-4 italic">
            {description}
          </p>
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
                 {link.name}               
                <FaExternalLinkAlt className="inline-block ml-2 align-baseline"/>
              </Link>
            ))}
          </div>
        )}        
      </article>
    </>
  );
};

export default NewEventCard;

