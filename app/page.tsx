import * as React from 'react';
import HeroCard from '@modules/home/components/Hero-section';
import HomePageView from '@modules/home/page';
import { AllEventsData } from "@lib/server-actions/mainEvents";
import { CalendarEvent } from "types/global";
import getHomePageEventsData from '@lib/server-actions/homePageEvents';
import type { Metadata } from 'next';

const opengraphURL = `${process.env.BASE_URL}/`;
const twitterURL = `${process.env.BASE_URL}/`;
export const metadata: Metadata = {
  title: "VVGC | Home",
  description: `A home for hindu devotees`,
  authors: [{
    name: "BSK",
  }],
  keywords: ["temple", "hindu", "devotees", "home", "ganesha", "ganapathi", "shiva", "vvgc", "temples in california", "ganapathi temples in california"],
  metadataBase: new URL(`${process.env.BASE_URL}`),
  openGraph: {
    title: "VVGC Hindu Temple, San Martin",
    description: "11355 Monterey Rd, San Martin, CA 95046",
    images: [{
      url: opengraphURL,
      width: 1200,
      height: 630,
      alt: `vvgc home page image`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VVGC | Home",
    description: "A home for hindu devotees",
    images: [twitterURL],

  }
};

// export async function generateMetadata(): Promise<Metadata> {
//   const opengraphURL = `${process.env.BASE_URL}/`;
//   const twitterURL = `${process.env.BASE_URL}/`;
//   return {
//     title: "VVGC | Home",
//     description: `A home for hindu devotees`,
//     authors: [{
//       name: "BSK",
//     }],
//     keywords: ["temple", "hindu", "devotees", "home", "ganesha", "ganapathi", "shiva", "vvgc", "temples in california", "ganapathi temples in california"],
//     metadataBase: new URL(`${process.env.BASE_URL}/`),
//     openGraph: {
//       title: "VVGC Hindu Temple, San Martin",
//       description: "11355 Monterey Rd, San Martin, CA 95046",
//       images: [{
//         url: opengraphURL,
//         width: 1200,
//         height: 630,
//         alt: `vvgc home page image`,
//       }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: "VVGC Hindu Temple, San Martin",
//       description: "11355 Monterey Rd, San Martin, CA 95046",
//       images: twitterURL,
//     }
//   }
// }

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function Home() {
  const data: CalendarEvent[] = await AllEventsData();
  const homePageData = await getHomePageEventsData();
  return (
  <React.Fragment>
    <HeroCard page="home" text='A Home For Spiritual Devotees' />
    <HomePageView data={data} homePageData={homePageData} />
  </React.Fragment>)
}
