import React, {Fragment} from 'react'
import TestPage from '@modules/test/page'
import { getCampaignData } from '@lib/server-actions/actions';

const Test = async ({params}:{
  params:{
    camid:string
  }
}

) => {
  const campaign = await getCampaignData()
  return (
    <Fragment>
        <TestPage 
        // camid={params.camid} 
         campaign={campaign}
        />

    </Fragment>
  )
}

export default Test