import React, { Fragment } from 'react'
import MobileNavigationMenu from '@modules/layout/header/components/mobile-navbar/page'
import { getCampaignData } from '@lib/server-actions/actions';
import { GoogleContext } from '@modules/test/components/googleContext';
import { AllEventsData } from '@lib/server-actions/mainEvents';
const TestLayout = async ({ children }: { children: React.ReactNode }) => {
const data = await AllEventsData();
  return (
    <Fragment>
      <GoogleContext data={data}>
      <div>{children}</div>
      </GoogleContext>
    </Fragment>
  )
}

export default TestLayout