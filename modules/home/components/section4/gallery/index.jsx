import { Button } from '@modules/common/components/ui/button'
import { Card } from '@modules/common/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import React, {Fragment} from 'react'
import { BiSolidNavigation } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

const GallerySection = () => {
  return (
    <Fragment>       
          <Card className="flex flex-col w-full md:w-[300px] h-[400px] shadow-lg rounded-md justify-center bg-white">
            <div className="relative w-full h-[200px] ">
              <Image
                className="absolute object-cover place-self-start"
                fill
                sizes="100dvw"
                src={`https://res.cloudinary.com/dixkqgqsi/image/upload/v1689678777/VVGC%20Images/image_12.jpg`}
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-orange-600 my-1 p-1 font-opensans md:text-lg">
                Gallery{" "}
              </div>
              <Button className="flex p-1 my-1 items-center bg-orange-400">
                <Link
                  href={
                    "https://photos.google.com/share/AF1QipPnhJjX11JcdedpRJ97_AGnHygXzxq4Gd0YsdiwYThBuxLKsobJZ3ZtnIfpVUrFkA/photo/AF1QipNR2fkwsk0gbcML9Ie4Tum9r_yHNgmbF-gVAkSj?key=elhBbTRXUkdGWklPdkRGYk5Jcy1mV0JyeXU1eFpR"
                  }
                  target="_blank"
                  className="flex flex-row gap-1 items-center justify-center pl-2 pr-2"
                >
                  <span className="px-2">See more Photos</span>{" "}
                  <BiSolidNavigation />
                </Link>{" "}
              </Button>
            </div>
          </Card>
    </Fragment>
  )
}

export default GallerySection