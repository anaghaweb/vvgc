import clsx from 'clsx'
import React, { Fragment } from 'react'
import type { Campaign } from 'types/global'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import UrlShareButton from '@modules/common/components/url-share-button'

const RightContentTemplate = ({ camid, campaign}:
  {
    camid:string
    campaign:Campaign
  }) => {
  return (
     
    <div className='flex flex-col max-w-4xl mx-auto py-4 gap-4 items-center bg-slate-100 font-roboto text-justify md:text-center'> 

           {/* Title  */}
           <h3 className='scroll-m-20 text-2xl font-semibold text-blue-950 tracking-tight font-inter'>
          {campaign.title}
           </h3>
      {/* Image */}
        <div className='relative'>
          <Image 
          width={250} height={250} 
          sizes="100vw"
          src={campaign.imageUrl}
          alt={campaign.title}
          className='object-contain mx-auto'
            />
        </div>

        {/* Sub Title */}
       { campaign.subtitle && <h5 className='scroll-m-10 text-lg font-semibold tracking-tight text-muted'>{
           campaign.subtitle
          }</h5>}
      {/* Description */}

          {campaign.description &&
            <p className='scroll-m-10 text-sm text-balance font-normal text-black tracking-normal'>
                {campaign.description}
               </p>
          }
      {
        campaign.paragraphs.map((data, index)=>(
          <p key={index} className='text-sm scroll-m-5 '>{data}</p>
        ))
      }

      {/* sponsored link */}
      <Link 
      className='scroll-m-10 text-lg inline-flex gap-2 items-center font-semibold text-blue-900'
      href={campaign.sponsor_link} target='_blank' referrerPolicy='no-referrer' 
      >
    I wish to Sponsor this campaign <ExternalLinkIcon className='w-4 h-4'/>
      </Link>
       
       <div className="inline-flex gap-2 items-center">
        Share Campaign <UrlShareButton />
       </div>
    </div>
   
  )
}

export default RightContentTemplate