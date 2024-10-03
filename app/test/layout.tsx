import React, { Fragment } from 'react'
import MobileNavigationMenu from '@modules/layout/header/components/mobile-navbar/page'
import { getCampaignData } from '@lib/server-actions/actions';

const TestLayout = async ({children}:{children:React.ReactNode;
  params:{
    camid:string
  }
}) => {
  
  return (
    <Fragment>
    <div>{children}</div>
    </Fragment>
  )
}

export default TestLayout