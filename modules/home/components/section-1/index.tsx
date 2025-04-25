
import { weeklyEventsDataList } from "@lib/data/weeklyEventData";
import DailyEventSummaryCard from "@modules/events/components/dailyEventSummaryCard";
import SpecialEventSummaryCard from "@modules/events/components/SpecialEventSummaryCard";
import { getDayOfTheWeek, getCurrentDate } from "@lib/utils/formatDate";
import Divider from "@modules/common/components/divider";

import { CalendarEvent } from "types/global";
import { Card } from "@modules/common/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Vijayashri_Satsanga_Mela from "@modules/campaigns/components/vijayashri-satsanga-mela";
import MahaRudraYagnaVideo from "@modules/campaigns/components/maharudra-yagnam";

const SectionOne = ({ eventdata }: {
  eventdata: CalendarEvent[]
}) => {
  let currentDay = getDayOfTheWeek();
  let currentDate = getCurrentDate();
  let data;


  const cdn_cloudinary_urls = [
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1743392787/VVGC%20Events/vasanthaNavaratriCelebrations.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1738286259/VVGC%20Events/Maharudra-2025.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1745029610/VVGC%20Events/bhaktiMarga20250525.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1744599039/vijayaSatsangMela.jpg`,
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1745566188/VVGC%20Events/srimadBhagawatKathaSaar20250510.jpg`
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
        <div className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
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
              Maha Rudra Yagnam
            </h2>
            <article className="flex flex-col gap-2">
              <p className="text-center font-semibold font-serif">Watch video below..</p>
            <MahaRudraYagnaVideo />
            <Divider />
              <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] flex flex-col my-2 md:my-4 lg:my-auto p-1">
                <Link className="" href={cdn_cloudinary_urls[4]} target="_blank">
                  <Image src={cdn_cloudinary_urls[4]}
                    alt="event"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-contain cursor-pointer mx-auto sm:w-full"
                    fill
                  />
                </Link>
              </div>

            </article>
            
           
          </div>
        </div>
        {/* <Card className="h-auto flex-1 flex-col lg:pl-2 md:pl-4 col-span-1 p-2 ">
        </Card> */}
          {/* NEXT SPECIAL EVENT CARD */}
          {/* <article className="flex flex-col gap-2"></article> */}

          <Vijayashri_Satsanga_Mela cdn_cloudinary_urls={cdn_cloudinary_urls}/>
          {/* VIJAYASHREE SATSANGA MELA */}
          

        {/* <MahaPrasadamSanMartin /> */}
      </div>
    </div>
  );
};

export default SectionOne;
