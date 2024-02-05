import HomePage from '../Components/homePage';
import * as React from 'react';

export const metadata = {
  title: "VVGC | Home",
  description: `A home for hindu devotees`,
  authors: [{
    name: "BSK",
    
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["temple", "hindu", "devotees", "home", "ganesha", "ganapathi", "shiva","vvgc"]
};

export default async function Home() {

      return<React.Fragment>
        <HomePage />
    </React.Fragment>
  
}
