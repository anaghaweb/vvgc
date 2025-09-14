import { Card } from "@modules/common/components/ui/card";
import { SiZoom } from "react-icons/si";
import { FaFacebook, FaYoutube, FaDonate } from "react-icons/fa";

/**
 * GaneshaPoojaStreaming Component
 *
 * Displays all event info for Ganesha Chaturthi:
 * - Streaming platform links
 * - Special event highlights
 * - Sponsorship details
 * - Donation & tax information
 * 
 * Optimized for mobile view (smaller text, left-aligned).
 */
export default function GaneshaPoojaStreaming() {
  return (
    <div
      className={`
        relative max-w-3xl w-full mx-auto md:p-10 
        rounded-xl overflow-hidden p-2 
        bg-ganesha bg-origin-content bg-center bg-cover bg-no-repeat
      `}
    >
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-ganesha bg-cover bg-center blur-md opacity-30"
        aria-hidden="true"
      ></div>

      

      {/* Foreground content */}
      <div className="relative space-y-6 text-gray-800 ">
        {/* Streaming Links */}
        <div className="">
          <h3 className="text-base mt-4 md:text-xl font-semibold text-orange-700">
            Live Streaming
          </h3>
          <div className="flex flex-col gap-3">
            {/* Zoom */}
            <a
              href="https://zoom.us/j/6233634720?pwd=OEY3K3U2ZEdNZTlaSTJVc1VZQkU0dz09#success"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-700 hover:underline text-sm md:text-lg"
            >
              <SiZoom className="w-12 h-12" />
              (ID: 6233634720 Passcode: 040415)
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/vvgctemple/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-600 hover:underline text-sm md:text-lg"
            >
              <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
              Watch on Facebook
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/live/CqYZkx-mdgE?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-red-600 hover:underline text-sm md:text-lg"
            >
              <FaYoutube className="w-6 h-6 md:w-8 md:h-8" />
              Watch on YouTube
            </a>

            {/* Donate */}

          </div>
        </div>

        {/* Special Event Highlights */}


        {/* Sponsorship */}
      
 
        {/* Tax Info */}
        <p className="text-xs md:text-sm text-gray-500 pt-4">
          All contributions are 100% tax deductible. <br />
          <strong>CA Tax ID: 61-1449457</strong>
        </p>
      </div>
    </div>
  );
}
