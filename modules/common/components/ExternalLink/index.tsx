import Link from 'next/link'
import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const ExternalLink = ({href,text}:{
    href:string,
    text:string,
}) => {
  return (
    <Link
    className="flex justify-start items-center font-bold gap-1 my-2"
    href={href}
    target="_blank"
    rel="noreferrer noopener"
  >
    <p className="font-roboto text-blue-900 underline">
    {text}
    </p>
    <FaExternalLinkSquareAlt className="text-blue-950" />
  </Link>
  )
}

export default ExternalLink