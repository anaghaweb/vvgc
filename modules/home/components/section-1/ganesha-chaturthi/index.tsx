import Image from "next/image";
import GaneshaPoojaStreaming from "./streaming-links";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function GaneshaChaturthi_2025() {
  return (
    <div className={
      `flex items-center justify-center md:m-6 mb-8
         relative pt-8`
    }>
      <div
        className="absolute inset-0 bg-chains bg-no-repeat bg-contain bg-top blur-xs opacity-30"
        aria-hidden="true"
      ></div>
      
      <div className={`max-w-7xl w-full
         
        `}>
        {/* Header Section */}
        {/* <div className="text-center space-y-2 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
              Sri Ganesha Chaturthi Celebrations
            </h2>
            <p className="text-md md:text-lg text-gray-700 font-medium">
              16 days of Ganesha Chaturthi Celebrations <br />
              <span className="font-semibold">
                August 23, 2025 – September 7, 2025
              </span>
            </p>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex justify-start items-baseline md:justify-center gap-2">
              <FaCalendarAlt className="text-orange-600 w-3 h-3" />
              <span>Daily Nithya Ganapathi Homam</span>
            </div>
            <div className="flex justify-start items-baseline md:justify-center gap-2">
              <FaClock className="text-orange-600 w-3 h-3" />
              <span>Weekdays 6 PM • Weekends 4 PM</span>
            </div>
            <div className="flex justify-start items-baseline md:justify-center gap-2">
              <FaMapMarkerAlt className="text-orange-600 w-3 h-3" />
              <span>VVGC – 1355 Monterey Hwy, San Martin, CA 95046</span>
            </div>
          </div>
        </div> */}
        <div className="text-left md:text-center space-y-4">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 tracking-wide">
            Sri Ganesha Chaturthi Celebrations
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-600 font-medium">
            16 days of Ganesha Chaturthi Celebrations <br />
          </p>
          <p className="font-semibold text-gray-800">
            August 23, 2025 – September 7, 2025
          </p>



          {/* Event Details */}
          <div className="space-y-3 w-full md:max-w-fit p-2 text-sm md:text-base mx-0 md:mx-auto bg-yellow-50" >
            <div className="flex items-center gap-3 justify-start md:justify-center">
              <FaCalendarAlt className="text-orange-600 w-4 h-4 flex-shrink-0" />
              <span className="text-gray-800">Daily Nithya Ganapathi Homam</span>
            </div>
            <div className="flex items-center gap-3 justify-start md:justify-center">
              <FaClock className="text-orange-600 w-4 h-4 flex-shrink-0" />
              <span className="text-gray-800">Weekdays 6 PM • Weekends 4 PM</span>
            </div>
            <div className="flex items-center gap-3 justify-start md:justify-center">
              <FaMapMarkerAlt className="text-orange-600 w-4 h-4 flex-shrink-0" />
              <span className="text-gray-800">
                VVGC – 1355 Monterey Hwy, San Martin, CA 95046
              </span>
            </div>
          </div>
        </div>


        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div className="flex flex-col items-center xl:flex-row gap-6">
            {/* Streaming Component */}
            
            <div className="flex-1 w-full">
              {/* Divider */}
              <GaneshaPoojaStreaming />
            </div>
            
            {/* Event Poster */}
            <Link
              className="flex-1 items-center"
              target="_blank"
              href="https://res.cloudinary.com/dixkqgqsi/image/upload/v1756010438/vvgc/images/2025/august/ganesha_chaturthi.jpg"
            >
              <Image
                src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1756010438/vvgc/images/2025/august/ganesha_chaturthi.jpg"
                alt="ganesha_chaturthi"
                width={600}
                height={800}
                className="rounded-xl mx-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
