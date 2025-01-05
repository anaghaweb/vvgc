import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const External_Link = ({text,url}:{text:string,url:string}) => {
  return (
    <div className="flex justify-center w-full">
    <Link
    className={`inline-flex flex-shrink-0 justify-center items-center gap-2 max-w-fit rounded-l-full rounded-r-full font-roboto bg-blue-200 bg-opacity-75 transition-opacity hover:bg-gray-300 
      py-2 px-4 my-1 mx-auto
      text-xl text-indigo-800 hover:text-blue-900`}
    target='_blank'
    href={url}>{text} <FaExternalLinkAlt className="size-4"/></Link>
    </div>
  )
}

export default External_Link