
import Image from 'next/image'
import Link from 'next/link'
import React, {Fragment} from 'react'

const PlantATree = () => {
  return (
    <Fragment>       
          <div className="h-auto flex-1 my-4 bg-sky-100 shadow-sm mx-auto p-2 md:pl-4 col-span-1 text-left track-tight text-sm lg:text-base w-full md:w-2/3">
            
            <p className="mt-12 mb-2 font-serif text-2xl md:text-3xl text-left text-cyan-950">
              Plant a tree for our future
            </p>
            <hr className="h-[2px] bg-red-800 my-2" />
           
            <Link href="/images/home/services/2.jpeg" target="_blank">
            <div className="relative w-[100%] h-[200px] md:w-[100%] md:h-[800px] p-2">
            <Image
              src="/images/home/services/2.jpeg"
              alt="Event"
              fill
              quality={75}
              sizes={"100vw"}
              className="absolute object-contain cursor-pointer"
            />            
            </div>
            </Link>
           
            </div>
          
    </Fragment>
  )
}

export default PlantATree