import React,{Fragment} from 'react'
import { getCampaignData } from '@lib/server-actions/actions';
import RightContentTemplate from '@modules/test/components/campaigns/components/right-content';
export async function generateMetadata({ params }) {
  try {
    const campaign = await getCampaignData();
    
    const {title} = campaign.find((t)=>t.id === params.camid)
    console.log("title", title)
    const description =
    campaign[campaign.length - 1].description ??
      `${title}`

    return {
      title: `${title} | VVGC`,
      description,
      // alternates: {
      //   canonical: `${params.camid.join("/")}`,
      // },
    }
  } catch (error) {
    console.log(error)
    // notFound();
  }
}

const CampaignDetailsPage = async ({params}) => {
  const campaign = await getCampaignData();
  const data = campaign.find(c=> c.id === params.camid)
  return (
    <RightContentTemplate camid={params.camid}  campaign={data}/>
  )
}

export default CampaignDetailsPage