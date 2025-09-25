import React, { FC } from "react";
import { ZoomIn } from "lucide-react";
import SpecialEventCard from "./event_Details";

// -----------------------------
// Event Image
// -----------------------------
interface EventImageProps {
  src: string;
  href: string;
  title: string;
  date: string;
  time: string;
}
const EventCard: FC<EventImageProps> = ({ src, href, title, date, time }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block rounded-lg overflow-hidden shadow-lg border-2 border-yellow-700"
  >
    <img
      src={src}
      alt={title}
      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
    />
    <div className="p-4 bg-white font-noto_serif">
      <h3 className="text-lg font-bold text-red-900">{title}</h3>
      <p className="text-sm text-gray-700">{date}</p>
      <p className="text-sm text-gray-700">{time}</p>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="bg-white/90 p-3 rounded-full shadow-lg">
        <ZoomIn className="w-7 h-7 text-red-800" />
      </span>
    </div>
  </a>
);

// -----------------------------
// Main Component
// -----------------------------
const Next_event_Grid: FC = () => {
  const events = [
    {
      title: "Lalitha Abhishekam and Parayanam",
      date: "Sept 26 - 27, 2025",
      time: "8:00 PM - 11:00 PM",
      image: "https://res.cloudinary.com/dixkqgqsi/image/upload/v1758251531/vvgc/images/2025/september/lalitha_abhishekam.jpg",
      href: "https://res.cloudinary.com/dixkqgqsi/image/upload/v1758251531/vvgc/images/2025/september/lalitha_abhishekam.jpg",
    },
    {
      title: "Dandiya and Garbha Dance with live music",
      date: "Every Friday",
      time: "6:00 PM - 9:00 PM",
      image: "https://res.cloudinary.com/dixkqgqsi/image/upload/v1758608189/vvgc/images/2025/september/dandiya_2025.jpg",
      href: "https://res.cloudinary.com/dixkqgqsi/image/upload/v1758608189/vvgc/images/2025/september/dandiya_2025.jpg",
    },

  ];

  return (
    <div className={`w-full max-w-4xl mx-auto md:p-6 font-inter
        rounded-lg border-2 border-yellow-600 bg-gradient-to-b from-amber-100 via-orange-50 to-amber-50 p-4 shadow-md    
    `}>
      <SpecialEventCard
        title="SPECIAL LIVE MUSIC EVENT!"
        performers="SARGAM SANGEET GROUP featuring PALAK & ASHISH VYAS"
        dates="September 26th & 27th"
        time="8:00 PM - 11:00 PM"
        location="VVGC San Martin Hindu Temple, 11355 Monterey Hwy, San Martin, CA 95046"
        description={[`Join us for live musical celebrations that will make your Navratri experience truly magical. These talented artists will fill the air with beautiful sounds that celebrate the Divine Mother and bring our community together in joy and devotion.`,

          `Bring your family and friends for an evening of Dandiya, Garbha, divine music, and community celebration.`,
        ]}
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            src={event.image}
            href={event.href}
            title={event.title}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>


    </div>
  );
};

export default Next_event_Grid;
