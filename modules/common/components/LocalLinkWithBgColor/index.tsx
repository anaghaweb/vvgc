
import Link from 'next/link'
import React from 'react'

const LocalLinkWithBgColor = ({href,text}:{href:string, text:string}) => {
  return (
    <Link href={`${href}`}>
    <div
    className={`flex flex-shrink-0 justify-center items-center bg-cyan-800
      py-1 px-4 h-8 min-w-fit max-w-fit text-white font-roboto font-normal text-sm 
       rounded-3xl tracking-tight hover:ring-2 hover:ring-slate-300 hover:shadow-md`
      }
    >
      {text}
    </div>
  </Link>
  )
}

export default LocalLinkWithBgColor