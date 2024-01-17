import HomePage from '@/components/homePage';
import * as React from 'react';


export const metadata = {
  title: 'Home',
  description: 'VVGC- Temple',
}

export default async function Home() {

      return<React.Fragment>
        <HomePage />
    </React.Fragment>
  
}
