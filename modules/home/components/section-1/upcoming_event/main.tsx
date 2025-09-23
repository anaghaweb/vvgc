
import React, { useState, FC } from "react";
import { X, ZoomIn, Star } from "lucide-react";

// -----------------------------
// Lotus Icon
// -----------------------------
interface LotusIconProps {
    className?: string;
}
const LotusIcon: FC<LotusIconProps> = ({
    className = "w-6 h-6 text-yellow-700",
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={className}
    >
        <path d="M12 2c-1.5 3-3 5-6 6 3 .5 5 2 6 4 1-2 3-3.5 6-4-3-1-4.5-3-6-6zm0 9c-1.5-1.5-3.5-2.5-6-3 1 2 1.5 4 1 6 .5-.5 2-1 5-1s4.5.5 5 1c-.5-2 .0-4 1-6-2.5.5-4.5 1.5-6 3zm-6 3c1.5 1.5 3.5 2.5 6 3-1-2-1.5-4-1-6-.5.5-2 1-5 1zm6 3c2.5-.5 4.5-1.5 6-3-3 0-4.5-.5-5-1 .5 2 0 4-1 6z" />
    </svg>
);

// -----------------------------
// Event Header
// -----------------------------
interface EventHeaderProps {
    title: string;
}
const EventHeader: FC<EventHeaderProps> = ({ title }) => (
    <>
        <div className="flex items-center justify-center gap-2 relative z-5">
            <LotusIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-700" />
            <h2 className="text-2xl md:text-3xl text-center font-extrabold text-red-900 tracking-wide">
                {title}
            </h2>
            <LotusIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-700" />
        </div>

        <div className="flex justify-center my-3">
            <span className="w-20 md:w-28 border-t-4 border-yellow-600 rounded-full"></span>
            <Star className="w-5 h-5 mx-2 text-orange-700" />
            <span className="w-20 md:w-28 border-t-4 border-yellow-600 rounded-full"></span>
        </div>
    </>
);

// -----------------------------
// Event Image
// -----------------------------
interface EventImageProps {
    src: string;
    href: string;
}
const EventImage: FC<EventImageProps> = ({ src, href }) => (
    <div className="relative w-full my-4 flex justify-center">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full max-w-[500px] rounded-lg overflow-hidden"
        >
            {/* Image */}
            <img
                src={src}
                alt="Bhagwati Jagran Event"
                className="w-full rounded-lg shadow-lg border-2 border-yellow-700 transform group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay with zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 p-3 rounded-full shadow-lg">
                    <ZoomIn className="w-7 h-7 text-red-800" />
                </span>
            </div>
        </a>
    </div>
);


// -----------------------------
// Main Component
// -----------------------------
const Next_Event: FC = () => { 

    const cdn_cloudinary_urls: string[] = [
        `https://res.cloudinary.com/dixkqgqsi/image/upload/v1758251531/vvgc/images/2025/september/lalitha_abhishekam.jpg`,
        `https://res.cloudinary.com/dixkqgqsi/image/upload/v1758608189/vvgc/images/2025/september/dandiya_2025.jpg`,
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6  shadow-xs 
      bg-gradient-to-b from-amber-100 via-orange-50 to-amber-50 border-2 border-yellow-600 relative overflow-hidden">

            {/* Header */}
            <EventHeader title="Dandiya and Garbha Dance with live music" />
             <EventHeader title="Lalitha Abhishekam and Parayanam" />

            {/* Event Image */}
            <EventImage
                src={cdn_cloudinary_urls[0]}
                href={cdn_cloudinary_urls[0]}
            />
             <EventImage
                src={cdn_cloudinary_urls[1]}
                href={cdn_cloudinary_urls[1]}
            />

            {/* Footer Note */}
            <p className="text-center text-base md:text-lg text-red-800 font-semibold mt-2">
                Join us for an evening of devotion, bhajans, and divine blessings.
            </p>
        </div>
    );
};

export default Next_Event;
