import React,{Fragment} from 'react'
import { getCampaignData } from '@lib/server-actions/actions';
import RightContentTemplate from '@modules/test/components/campaigns/components/right-content';
import type { Campaign } from 'types/global';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }:{
  params:{
    camid:string
  }
}) {
  try {
    const campaign:Campaign[] = await getCampaignData(); 
    if(!campaign)  {
      notFound()
    }
    const result = campaign?.find((t)=>t.id === params.camid)
    const title = result?.title;
    
    console.log("title", title)
    const description =
    campaign[campaign.length - 1].description ??
      `${title}`

    return {
      title: `${title} | VVGC`,
      description,
     
    }
  } catch (error) {
    console.log(error)
     notFound();
  }
}

const CampaignDetailsPage = async ({params}:{
  params:{camid:string}
}) => {
  const campaign = await getCampaignData();
  if(!campaign){
    return notFound()
  }
  const data = campaign.find(c=> c.id === params.camid)
  if(!data){
    return notFound()
  }
  return (
     <RightContentTemplate camid={params.camid}  campaign={data}/>   
  )
}

export default CampaignDetailsPage