import "./globals.css";
import Header from "@modules/layout/header/page";
import Footer from "@modules/layout/footer/page";
import {
  roboto,
  opensans,
  inter,
  roboto_mono,
  playfair,
  cormorant,
} from "../lib/fonts/fonts";
import React from "react";

import { TooltipProvider } from "@modules/common/components/ui/tooltip";
import { Toaster } from 'sonner';
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    camid: string;
  };
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} 
    ${roboto.variable} ${opensans.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body className={`max-w-full font-sans box-border m-0`}>
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
