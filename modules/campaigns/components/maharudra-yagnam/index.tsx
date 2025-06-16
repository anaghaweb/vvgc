import { Card } from '@modules/common/components/ui/card';
import React from 'react'
import { CardContent } from '@modules/common/components/ui/card';
import Build_Kitchen from '@modules/campaigns/components/vvgc-kitchen/build-kitchen'

const MahaRudraYagnaVideo = () => {
  const url="https://res.cloudinary.com/dixkqgqsi/video/upload/v1745828806/VVGC%20Events/rom_web.mp4";
  return (
    <div className="h-auto lg:border-l-2 flex-1 my-4 md:my-0 mx-auto p-2 md:pl-4 col-span-1 text-left track-tight text-sm lg:text-base gap-4">
      
      <div>

      <h2 className="text-2xl md:text-3xl font-serif text-indigo-950 text-center">
        🪔 Temple Update and Urgent Appeal 🪔
        </h2>
        <video  
      controls
      className='mx-auto sm:w-80 md:w-96 lg:w-[400px] my-4'      
      >
      <source src={url} type="video/mp4"/>  
     An Urgent Appeal
    </video>
      <div className="h-auto flex-1 flex flex-col gap-4 p-2 md:pl-4  track-tight text-sm lg:text-base w-full font-sans font-medium">
        <p>
        We're  very grateful to our supporters, donors, and community for making our temple a reality. Since its inception in 2012, we've invested over $10 million in developing our 13-acre prime property, featuring religious and commercial zoning.
        </p>
        <p>
        However, we now face an urgent obligation to a lender who has supported us since day one. We've received a notice to pay off a debt of approximately $1 million. Given their long-standing partnership, we feel a strong commitment to fulfill this obligation.
        </p>
    <p>
    We're humbly reaching out to our community for emergency fundraising support. Every contribution counts, and we welcome donations or loans with interest options. Your support will help us clear this debt and ensure the temple's continued growth and service.
    </p>
    <p >
    Thank you for considering this appeal. 🙏
    </p>
      </div>
      </div>
      <Build_Kitchen />
     
    </div>
  )
}

export default MahaRudraYagnaVideo