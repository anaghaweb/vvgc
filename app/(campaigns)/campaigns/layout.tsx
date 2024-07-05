import React from 'react'
import CampaignLayout from '@modules/test/components/campaigns/components/campaign-layout'
import { getCampaignData } from '@lib/server-actions/actions';

export default async function CampaignLayoutPage({ children, params }:
  {children:React.ReactNode
    params:{
      camid:string
    }
  }) {
     const campaign = await getCampaignData()
  return (    
    <CampaignLayout 
    camid={params.camid}  
     campaign={campaign}
    >
            {children}
    </CampaignLayout>          
         
  )
}
