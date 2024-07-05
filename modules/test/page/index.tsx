import React,{Fragment} from 'react'
import type { Campaign } from 'types/global';
import CampaignCarousel from '@modules/test/components/campaigns/components/carousel';

const TestPage = ({camid, campaign}:{
  camid:string;
  campaign:Campaign[]
}) => {
  return (
    <div className="h-[75vh] flex justify-start items-center">
      <CampaignCarousel camid={camid} campaign={campaign} />
    </div >
  )
}

export default TestPage