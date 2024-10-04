import Link from 'next/link'
import React from 'react'

const LocalLinkWithBgColor = ({href,text, color="green"}:{href:string,color?:string, text:string}) => {
  return (
    <Link href={`${href}`}>
    <span
    className={`
      flex flex-shrink-0 justify-center items-center
        py-1 px-2 h-8 min-w-fit max-w-fit
      text-white text-lg font-semibold font-cormorant
      bg-${color}-700
      hover:ring-2 ring-2 hover:ring-slate-300 hover:shadow-md
      `}
    >
      {text}
    </span>
  </Link>
  )
}

export default LocalLinkWithBgColor