import { Card, CardContent } from '@modules/common/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React, {Fragment} from 'react'

const PlantATree = () => {
  return (
    <Fragment>       
          <Card className="h-auto w-full sm:p-2 text-green-950">
            <CardContent className="">
            <p className="mt-12 mb-2 font-bold text-3xl text-center  font-[cormorant]">
              Plant a tree for our future
            </p>
            <hr className="h-[2px] bg-red-800 my-2" />
           <div className="relative w-[100%] h-[200px] md:w-[100%] md:h-[800px] p-2">
            <Link href="/images/home/services/2.jpeg" target="_blank">
            <Image
              src="/images/home/services/2.jpeg"
              alt="Event"
              fill
              quality={75}
              sizes={"100vw"}
              className="absolute object-contain cursor-pointer"
            />
            </Link>
            </div>
            </CardContent>
            </Card>
          
    </Fragment>
  )
}

export default PlantATree