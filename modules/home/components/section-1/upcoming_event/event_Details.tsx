import React, { FC } from "react";
import { Star } from "lucide-react";

interface SpecialEventCardProps {
  title: string;
  performers: string;
  dates: string;
  time: string;
  location: string;
  description: string;
}

const SpecialEventCard: FC<SpecialEventCardProps> = ({
  title,
  performers,
  dates,
  time,
  location,
  description,
}) => (
  <div >
    {/* Header */}
    <div className="flex items-center gap-2 mb-3">
      <Star className="w-5 h-5 text-yellow-600" />
      <h3 className="text-xl md:text-2xl font-extrabold text-red-900">
        {title}
      </h3>
      <Star className="w-5 h-5 text-yellow-600" />
    </div>

    {/* Performers */}
    <p className="font-semibold text-orange-700 mb-2">{performers}</p>

    {/* Date & Time */}
    <p className="text-gray-700 mb-1">📅 {dates}</p>
    <p className="text-gray-700 mb-2">⏰ {time}</p>

    {/* Location */}
    <p className="text-gray-700 mb-3">📍 {location}</p>

    {/* Description */}
    <p className="text-gray-800 text-sm md:text-base lg:max-w-2xl">{description}</p>
  </div>
);

export default SpecialEventCard;
