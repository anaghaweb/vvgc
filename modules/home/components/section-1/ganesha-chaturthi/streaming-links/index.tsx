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

      <div className="pt-6 space-y-2 text-sm md:text-base">
        <h4 className="font-semibold text-orange-700">Special Events</h4>
        <ul className="list-disc list-inside space-y-1">
          <li className="list-none">
            <strong>August 27, 2025:</strong> Swarna Ganesha Alankaram
          </li>
          <li>
            <strong>10 AM: </strong> Sri Vallabha Maha Ganapathi Abhisheka
          </li>
          <li>
            Sri Siddhi Vinayaka vratha pooja aarati and mantra pushpa
          </li>
          <li >
            <strong>All Day</strong>  - Utsava Murthy Abhisheka by devotees
          </li>
          <li>
            <strong>6 PM: </strong> Sri Vallabha Maha Ganapathi homam and
          </li>
          <li>
            Sri Vishnu sahasra nama chanting aarati and mantra pushpa
          </li>
          <li>
            <strong>9 PM: </strong> Sukh karta dikh harta aarati and Sri Jai Jagadeshahare aarati for balaji ekantha seva and temple closes
          </li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li className="list-none">
            <strong>September 7, 2025:</strong> Ganesha Visarjan (Immersion)
          </li>

          <li >
            <strong>4 PM: </strong>Sahasra Modaka Homam
          </li>
          <li >
            <strong>6 PM: </strong>Ganesh Visarjan ceremony in our San Martin Temple
          </li>



        </ul>
      </div>

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
        <div className="pt-6 text-sm md:text-base text-gray-700 space-y-2">
          <h4 className="font-semibold text-orange-700">Sponsorships</h4>
          <ul className="space-y-1">
            <li>🥇 Gold Sponsor – $500</li>
            <li>🍚 Sponsor Annadhanam/Mahaprasadam – $2500</li>
            <li>🌸 Sponsor Flowers – $1001</li>
            <li>🪔 Sponsor Pooja Materials – $501</li>
            <li>🔥 Sponsor Nithya Ganapathy Homam – $101</li>
            <li>
              🍲 Sponsor Nithya Ganapathy Homam with Modakam (54) + Appam (54) – $151
            </li>
            <li>🙏 Sponsor Ganesha Abhishekam – $151</li>
            <li>🥈 Silver Sponsor – $151</li>
            <li>🥉 Bronze Sponsor – $51</li>
          </ul>

        </div>
        <a
          href="https://paybee.io/@vvgc@31"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 bg-transparent w-fit items-center gap-3 text-blue-700 hover:underline text-sm md:text-lg"
        >
          <FaDonate className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
          Donate & Register for Sankalpam
        </a>
        {/* Tax Info */}
        <p className="text-xs md:text-sm text-gray-500 pt-4">
          All contributions are 100% tax deductible. <br />
          <strong>CA Tax ID: 61-1449457</strong>
        </p>
      </div>
    </div>
  );
}
