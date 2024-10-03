import React, {Fragment} from 'react'
import TestPage from '@modules/test/page'
import { getCampaignData } from '@lib/server-actions/actions';


const Test = async ({params, searchParams}:{
  params:{
    camid:string
  }
  searchParams:{
    evtype: "regular" | "special" | "weekly" | 'festival'
  }
}

) => {
  const campaign = await getCampaignData()
  return (
    <Fragment>
        <TestPage 
        // camid={params.camid} 
         campaign={campaign}
         searchParams={searchParams}
        />
  
    </Fragment>
  )
}

export default Test