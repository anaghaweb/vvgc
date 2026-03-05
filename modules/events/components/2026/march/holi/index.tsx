import {
  MdEvent,
  MdAccessTime,
  MdLocationOn,
  MdPhone
} from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { GiPowderBag } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";

const IconTextComp = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="flex items-start gap-2 my-2">
            {children}
            </div> 
    )
}

const Imageholder = ({children, className}:{children:React.ReactNode, className?:string}) => {
    const cssutility = className || "";
    return (
    <div className= {`relative mx-auto w-full h-64 lg:h-96 ${cssutility}`}>
        {children}
    </div>
    )
}

export default function HoliEvent_2026() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 my-4 lg:my-8 bg-green-50">
        <div className="grid-cols-1 flex flex-col gap-4 p-2 h-full grow shrink-0 bg-blue-50">
            <Imageholder >  
                <Link href="https://res.cloudinary.com/dixkqgqsi/image/upload/v1772695320/vvgc/images/2026/march/holi_0307.jpg" target="blank">
                <Image fill sizes="100vw" className="object-scale-down" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1772695320/vvgc/images/2026/march/holi_0307.jpg`} alt="Holi Images"/>
                </Link>
            </Imageholder>  
              <Imageholder >  
                <Link href="https://res.cloudinary.com/dixkqgqsi/image/upload/v1772695319/vvgc/images/2026/march/holi_2_0307.jpg" target="blank">
                <Image fill sizes="100vw" className="object-scale-down" src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1772695319/vvgc/images/2026/march/holi_2_0307.jpg`} alt="Holi Images"/>
                </Link>
            </Imageholder>            
        </div>
      <div className="grid-cols-1 flex flex-col gap-4 p-2 h-full grow shrink-0 bg-red-50 backdrop-blur">
        {/* Header */}
        <div className="text-center space-y-2 ">
          <h1 className="text-xl font-bold text-purple-700">
             Get Ready to Celebrate the Festival of Colors! 
          </h1>

          <p className="text-lg font-semibold text-pink-600">
            HOLI 2026 — Festival of Color is coming to the Bay Area, and YOU'RE invited!
          </p>
        </div>

        {/* Event Details */}
        <div className="text-sm">
            <IconTextComp>
                 <MdEvent size={20} className="text-pink-500 shrink-0"  />
            <p>
              <strong>Date:</strong> Saturday, March 7th, 2026
            </p>
            </IconTextComp>
          

          <IconTextComp>
            <MdAccessTime size={20} className="text-purple-500 shrink-0"  />
            <p>
              <strong>Time:</strong> 11:00 AM – 2:00 PM
            </p>
          </IconTextComp>

          <IconTextComp>           
            <MdLocationOn size={20} className="text-red-500 shrink-0" />           
            <p>
              <strong> Venue:</strong> Vaidica Vidhya Ganapathi Center - VVGC Temple 11355 Monterey Rd, San Martin
            </p>
          </IconTextComp>

        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 text-center gap-4 py-2">
          <div className="flex flex-col items-center text-sm">
            <FaMusic className="text-purple-600 text-xl" />
            <p> LIVE DJ</p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <GiPowderBag className="text-pink-600 text-xl" />
            <p>Colors</p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <FaMusic className="text-green-600 text-xl" />
            <p>Lots of Fun</p>
          </div>
        </div>

        {/* Community */}
        <p className="text-sm text-center font-medium">
          Senior Citizens, Ladies, Gentlemen & Kids — Everybody is Welcome! Every Community & Every Religion is Welcome!
        </p>

        {/* Donation */}
        <div className="bg-yellow-100 rounded-lg p-3 text-center font-medium space-y-4">
          Suggested Donation: $5 or more per family
        </div>

        {/* Links */}
        <div className="space-y-2 text-sm">

          <p>
            <strong>Register here:</strong>{" "}
            <a
              href="https://paybee.io/@vvgc75"
              className="text-blue-600 underline"
            >
              paybee.io/@vvgc75
            </a>
          </p>

          <p>
            <strong>Donate here:</strong>{" "}
            <a
              href="https://paybee.io/@vvgc76"
              className="text-blue-600 underline"
            >
              paybee.io/@vvgc76
            </a>
          </p>

        </div>

        {/* Contacts */}
        <div className="space-y-1 text-sm">

          <p className="font-semibold">For More Info:</p>

          <div className="flex items-center gap-2">
            <MdPhone className="text-purple-600" />
            <p>Satnam Singh: (408) 726-1053</p>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-purple-600" />
            <p>Kulbeer Handa: (408) 769-0766</p>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone className="text-purple-600" />
            <p>Jasvir Singh: (408) 843-0711</p>
          </div>

        </div>

        {/* Closing */}
        <p className="text-sm text-center font-medium my-2">
          Come splash some color, dance to great music, and celebrate the joy of Holi with your community! Don't miss it!
        </p>

        {/* Tags */}
        <p className="text-xs text-gray-600 text-center my-2">
          #Holi2026 #festivalofcolorss #bayareaholi #sanmartin #holicelebration
          vvgctemple bayareaevents HappyHoli ColorFestival vvgcsanmartin holi
          vvgc dance HinduFestival2026
        </p>

      </div>
    </div>
  );
}