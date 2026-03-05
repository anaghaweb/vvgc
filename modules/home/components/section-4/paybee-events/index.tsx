import { Button } from '@modules/common/components/ui/button';
import { Card } from '@modules/common/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import React, {Fragment} from 'react'
import { BiSolidNavigation } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

const PaybeeEventsLink = () => {
  return (
    <Fragment>
        <Card className="flex flex-col w-full md:w-[300px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] ">
              <Image
                className="absolute object-cover place-self-start"
                fill
                sizes="100dvw"
                src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914196/VVGC%20San%20Martin%20Temple%20Data/Gallery/68936063_2274984382569962_8933000778419798016_n_uqrzsf.jpg`}
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">
                Sponsor other Events{" "}
              </div>
              <Button className="flex p-1 my-1 items-center bg-orange-400">
                <Link
                  href={
                    "https://paybee.io/quickpay.html?handle=vvgc#campaignList"
                  }
                  target="_blank"
                  className="flex flex-row gap-1 items-center justify-center pl-2 pr-2"
                >
                  <span className="px-2">Know more</span> <FaExternalLinkAlt />
                </Link>{" "}
              </Button>
            </div>
          </Card>

    </Fragment>
  )
}

export default PaybeeEventsLink