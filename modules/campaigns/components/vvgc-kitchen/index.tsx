import External_Link from '@modules/common/components/external-link';
import { Card, CardContent } from '@modules/common/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FcExternal } from 'react-icons/fc';
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Build_Kitchen from '@modules/campaigns/components/vvgc-kitchen/build-kitchen';

const KitchenVVGC = () => {
  return (
    <Fragment>
      <Card className="h-auto w-full md:w-2/3 mx-auto sm:p-2">
        <CardContent className="">
          <p className="mt-12 mb-2 font-serif text-2xl md:text-3xl text-left text-cyan-950">
            Kitchen at VVGC San Martin
          </p>
          <hr className="h-[2px] bg-gray-900 my-2" />
          <div className="flex flex-col gap-4 font-roboto lg:text-xl text-left text-gray-900">
            <p>
              We are seeking loan to complete our Kitchen at VVGC temple.
            </p>
            <p >
              Estimated completion cost is around <span className="font-bold">250,000$</span>.
            </p>
            <p >
              Please note that we have obtained the necessary permits from relavent authorities to build a kitchen at out temple.
            </p>
            <p >
              We would like to start this project at the earliest. Kindly help us to raise this loan amount.
              
            </p>
            <p className='font-semibold text-cyan-950'>
                We are ready to pay interest of up to 10%.
              </p>
          </div>

          <External_Link url="https://paybee.io/@vvgc@7" text='Donate' />

          <Link href="/images/campaigns/kitchen.jpeg" target="_blank">
            <div className="relative w-[100%] min-h-[300] h-[200px] md:h-[300px] lg:h-[500px] p-2">
              <Image
                src="/images/campaigns/kitchen.jpeg"
                alt="Event"
                fill
                quality={75}
                sizes={"100vw"}
                className="absolute object-contain cursor-pointer"
              />
            </div>
          </Link>
          <Build_Kitchen />

        </CardContent>
      </Card>

    </Fragment>
  )
}

export default KitchenVVGC