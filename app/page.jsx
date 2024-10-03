import * as React from 'react';
import HeroCard from '@modules/home/components/Hero-section';
import HomePageView from '@modules/home/page';
import { FetchData } from '@lib/utils/fetchdata';
export const metadata = {
  title: "VVGC | Home",
  description: `A home for hindu devotees`,
  authors: [{
    name: "BSK",   
  }], 
  keywords: ["temple", "hindu", "devotees", "home", "ganesha", "ganapathi", "shiva","vvgc", "temples in california", "ganapathi temples in california"]
};

export const viewport = {
  width:'device-width',
  initialScale:1,
}

export default async function Home() {
  const data = await FetchData();
      return <React.Fragment>
        <HeroCard/>
        <HomePageView data={data}/>        
    </React.Fragment>
  
}
