import React, { Fragment } from 'react'

import MobileNavigationMenu from '@modules/layout/header/components/mobile-navbar/page'

const TestLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Fragment>
    <div>{children}</div>
    </Fragment>
  )
}

export default TestLayout