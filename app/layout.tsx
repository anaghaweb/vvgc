import "./globals.css";
import Header from "@modules/layout/header/page";
import Footer from "@modules/layout/footer/page";
import Script from 'next/script'
import {
  roboto,
  opensans,
  inter,
  roboto_mono,
  playfair,
  cormorant,
  noto_sans, noto_sans_display, noto_serif, noto_serif_display
} from "@lib/fonts/fonts";
import React from "react";

import { TooltipProvider } from "@modules/common/components/ui/tooltip";
import { Toaster } from 'sonner';

import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const opengraphURL = `${process.env.BASE_URL}/images/og/hsbanner.jpg`;
  const twitterURL = `${process.env.BASE_URL}/images/og/hsbanner.jpg`;
  return {
    title: 'VVGC Hindu Temple, San Martin',
    description: 'A home for hindu devotees',
    metadataBase: new URL(`${process.env.BASE_URL}`),
    openGraph: {
      title: 'VVGC Hindu Temple, San Martin',
      description: 'A home for hindu devotees',
      images: [{
        url: opengraphURL,
        width: 1200,
        height: 630,
        alt: `About Us Image`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'VVGC Hindu Temple, San Martin',
      description: 'A home for hindu devotees',
      images: [twitterURL],
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en" >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon/icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
          <Script
          src={`https://askable.gentic.in/versions/v0.1.4/askable-ws.js?v=0.1.4`}
          data-site-id="vvcc-org"
          data-widget-type="ws"
          data-api-base-url={'https://askable.gentic.in'}
          strategy="afterInteractive"
        />

      </head>

      <body className={`max-w-[90rem] mx-auto font-sans box-border m-0
            ${inter.variable} ${roboto_mono.variable} 
          ${noto_sans.variable} ${noto_sans_display.variable} 
          ${noto_serif.variable} ${noto_serif_display.variable}
          ${roboto.variable} ${opensans.variable} ${playfair.variable}
          ${cormorant.variable}`
      }>
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </TooltipProvider>
      

      </body>

    </html>
  );
}
