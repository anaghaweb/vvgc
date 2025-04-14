
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";

import { CalendarEvent } from "types/global";
import { Card } from "@modules/common/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MahaPrasadamSanMartin from "@modules/campaigns/components/maha-prasadam/maha-prasadam";
import { FaExternalLinkAlt } from "react-icons/fa";

const SectionOne = ({ eventdata }: {
  eventdata: CalendarEvent[]
}) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;


  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1743392787/VVGC%20Events/vasanthaNavaratriCelebrations.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1738286259/VVGC%20Events/Maharudra-2025.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1744426815/VVGC%20Events/hanumaanJayanthi250415.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1744599039/vijayaSatsangMela.jpg`,
  ]
  const paypal_emailid = "Vijayashri.usa@gmail.com";
  const paypal_link = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${paypal_emailid}&currency_code=USD&item_name=Donation`
  try {

    data = eventdata.find(
      (event) => {
        let eventDate = new Date(event.date).getDate();
        let eventYear = new Date(event.date).getFullYear();
        let currentYear = new Date().getFullYear();
        if (eventDate === currentDate.getDate() && eventYear === currentYear)
          return (eventDate === currentDate.getDate() && eventYear === currentYear)
        else
          return null;
      }
    );
  } catch (error: any) {
    console.log(error.name)
  }
  return (
    <div className=" rounded-sm p-2">
      <div className="min-h-[300px] grid grid-cols-1 lg:grid-cols-2 ">
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
          <h2 className="font-serif text-2xl md:text-3xl text-left text-cyan-950">
            Today at the Temple, {currentDay}
          </h2>
          <Divider />
          {
            data?.title ?
              <SpecialEventSummaryCard eventdata={data} />
              :
              <DailyEventSummaryCard events={weeklyEventsDataList} />
          }
          {/* NEXT SPECIAL EVENT CARD */}
          <div className="leading-6">

            <Divider className="my-4" />
            <h2 className="font-serif text-xl md:text-2xl text-left text-amber-900">
              Upcoming Special Event
            </h2>
            <article className="flex flex-col md:flex-row gap-2">
              <div className="relative w-full h-[300px] md:h-[500px] flex flex-col my-2 md:my-4 p-1">
                <Link className="" href={cdn_cloudinary_urls[2]} target="_blank">
                  <Image src={cdn_cloudinary_urls[2]}
                    alt="event"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-contain cursor-pointer mx-auto sm:w-full"
                    fill
                  />
                </Link>
              </div>

            </article>
          </div>
        </Card>
        <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">

          {/* NEXT SPECIAL EVENT CARD */}


          <article className="flex flex-col md:flex-row gap-2">

            <div className="h-auto flex-1 p-2 md:pl-4 text-left track-tight text-sm lg:text-base w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-serif text-indigo-950">
                Vijayashro Satsanga Mela 2025
              </h2>
              <p>
                A very happy Tamil new year to you all!

              </p>
              <p>

                On the auspicious occasion of the Tamil new year , we are very happy to announce
              </p>
              <p className="font-semibold text-blue-950 font-playfair text-xl"> Vijayashri Fine Arts USA’s Satsanga Mela 2025</p>
              <p >
                Inviting all Gurus , Shishyas , Rasikas , Bhaktas & Vijayashrians for an immersive spiritual retreat with Guru Smt Vishaka Hariji
              </p>
              <p className="font-semibold ">
                Registration is mandatory and  please use the following link to register by May 26 2025
              </p>
              <div className="flex justify-center w-full">
                <Link
                  className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full font-roboto  bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                    py-2 px-4 my-1 mx-auto
                    text-xl text-indigo-800 hover:text-blue-900`}
                  target='_blank'
                  href="https://forms.gle/t627hTvAQFQ18MBy7">Register <FaExternalLinkAlt className="size-4" /></Link>
              </div>
              <p>Please circulate the flyer and registration link to all who may be interested. 🙏All are welcome</p>
              <p>
                We are a volunteer driven organization and donations are appreciated and welcome!
              </p>
              <p>
                Suggested donations of 51$ for a single registrant and 101$ for a family can be transferred to:
              </p>
              <div className="flex justify-center w-full">
                <Link
                  className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full font-roboto  bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                    py-2 px-4 my-1 mx-auto
                    text-xl text-indigo-800 hover:text-blue-900`}
                  target='_blank'
                  href="https://www.venmo.com/u/VijayashriUSA">Venmo <FaExternalLinkAlt className="size-4" /></Link>
              </div>
              <div className="flex justify-center w-full">
                <Link
                  className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full font-roboto  bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
                    py-2 px-4 my-1 mx-auto
                    text-xl text-indigo-800 hover:text-blue-900`}
                  target='_blank'
                  href={paypal_link}>Paypal: ${paypal_emailid}<FaExternalLinkAlt className="size-4" /></Link>
              </div>

            </div>

            <div className="relative w-full h-[300px] md:h-[600px] lg:h-[650px] flex flex-col my-2 md:my-4 p-1">
              <Link className="" href={cdn_cloudinary_urls[3]} target="_blank">
                <Image src={cdn_cloudinary_urls[3]}
                  alt="event"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                  className="object-contain cursor-pointer mx-auto sm:w-full"
                  fill
                />
              </Link>
            </div>

          </article>

        </Card>

        {/* <MahaPrasadamSanMartin /> */}
      </div>
    </div>
  );
};

export default SectionOne;
