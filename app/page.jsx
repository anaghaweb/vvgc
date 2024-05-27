import HomePage from '../Components/homePage';
import * as React from 'react';

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

      return <React.Fragment>
        <HomePage />
    </React.Fragment>
  
}
