import { Card, CardContent, CardHeader, CardTitle } from "@modules/common/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";



export default function GaneshaChaturthi_2025() {
  return (
    <div className="flex justify-center md:m-6 mb-8">
      <Card className="max-w-5xl w-full shadow-sm rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-orange-700">
            <a
              href="https://res.cloudinary.com/dixkqgqsi/image/upload/v1756010438/vvgc/images/2025/august/ganesha_chaturthi.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-orange-800"
            >
              Ganesha Chaturthi 2025
            </a>
          </CardTitle>
          <p className="text-gray-600">
            Sri Vallaba Ganapathi Temple, San Martin
          </p>
            <div className={`p-4 inline-flex items-center justify-center gap-2 mx-auto 
                bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white

                `}>
                <Link
                  href="https://paybee.io/quickpay.html?handle=vvgc&ppid=31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Register and donate for Sankalpam
                </Link>
                <FaArrowCircleRight  size={28} className="animate-pulse" color="white"/>
              </div>
        </CardHeader>

        <CardContent className="space-y-6 text-gray-700">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <div className="flex-1 items-center">
              <Image
                src="https://res.cloudinary.com/dixkqgqsi/image/upload/v1756010438/vvgc/images/2025/august/ganesha_chaturthi.jpg"
                alt="ganesha_chaturthi"
                width={600}
                height={800}
                className="rounded-xl shadow-md mx-auto"
              />
            </div>

            {/* <div className="flex-1 space-y-4">
              <p>
                <strong>Create your own Ganesha Murti with clay!</strong>
              </p>

              <p>
                As a tradition, Ganesha Murthi is handmade, worshiped, and
                immersed in wells, ponds, lakes, and rivers. Murtis made with
                natural clay are preferred over plaster of Paris. Chemical colors
                are extremely harmful to our environment. Let’s go green to save
                our environment!
              </p>

              <p>
                Come and join us at the workshop! <strong>All are welcome!</strong> Children 8 and under will need parental assistance. All materials will be provided. <span className="font-semibold">Workshop is FREE!</span>
              </p>

              <p>
                Donations as cash or check are welcome to support such SEVA activities! (Checks can be made to VVGC)
              </p>

              <div className="bg-orange-50 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">Date:</span> 24th August, Sunday
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">Time:</span> 10:00 AM – 12:00 PM
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">Venue:</span> VVGC – 1355 Monterey Hwy, San Martin, CA 95046
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-orange-700">Aim of the workshop</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cultivate love for Lord Ganesha</li>
                  <li>Learn the art of murti making with clay</li>
                  <li>Do your part to save the environment</li>
                  <li>Spread the message to extended family and friends</li>
                </ul>
              </div>

              
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
