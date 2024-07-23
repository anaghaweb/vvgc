
import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

const LocalizedCampaignLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {


  return (
    <Link href={`/campaigns/${href}`} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedCampaignLink
