import React from "react";
import Head from "next/head";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Share2,
} from "lucide-react";

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
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  heading,
  subtitle,
  date,
  time,
  imageUrl,
  description,
  sponsorLinks,
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
     

      <article className=" w-full mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4 md:p-8">
        {/* Heading */}
        <header>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {heading}
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-600 mb-4">{subtitle}</h2>
        </header>

        {/* Date & Time */}
        {(date || time) && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
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
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            {description}
          </p>
        )}

        {/* Sponsor Links (Grid Layout) */}
        {sponsorLinks && sponsorLinks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {sponsorLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 underline hover:bg-blue-700 text-blue-600 border-2 rounded-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
        

        {/* Social Sharing */}
        {/* <footer>
          <div className="flex items-center gap-3 text-gray-500">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Share:</span>
            <div className="flex gap-3">
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <span className="text-lg">🟢</span>
              </a>
              <a
                href={shareLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer> */}
      </article>
    </>
  );
};

export default NewEventCard;

