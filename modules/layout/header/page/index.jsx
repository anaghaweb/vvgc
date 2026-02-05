"use client";

import MobileNavigationMenu from "../components/mobile-navbar/page";
import TempleAddressHeader from "../components/temple-address";
import LocalLinkWithBgColor from "@modules/common/components/LocalLinkWithBgColor";
import {  usePathname } from "next/navigation";
import clsx from "clsx";
import { nav_components_list } from "@modules/layout/header/components/desktop-navbar/navbar-data";
import DesktopNavigationMenu from "@modules/layout/header/components/desktop-navbar";

import SubscribeToVVGCNewsLetter from "@modules/subscribe";
import FeedbackByDevotees from "@modules/feedback/page";

export default function Header() {
  const pathname = usePathname();
  const verifyEmail = pathname.split("/").includes("verifyEmail");
 
  return (
    <div>
    {!verifyEmail && <header
      className={`relative flex flex-col h-40 md:h-40 bg-[#FF9933] min-w-full max-w-[90rem]`}
    >
      <nav className="z-10 max-w-[90rem] inset-0 mx-auto justify-between bg-[#FF9933] h-12 flex items-center align-baseline fixed">
        {/* Desktop Navigation Menu */}
        <div className="hidden xl:block">
        <DesktopNavigationMenu navigationLink={nav_components_list}/>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="flex flex-col xl:hidden p-2">
          <MobileNavigationMenu  />
        </div>

        {/* Subscribe Feedback and Donate menu*/}
        <div className="mr-2 flex  gap-2 tracking-tight ">
          <SubscribeToVVGCNewsLetter />
          <FeedbackByDevotees />
          <LocalLinkWithBgColor text="Donate" href="/donations" />
        </div>        
      </nav>
      {/* Temple Title */}
      <TempleAddressHeader />
    </header>
    }
    </div>
   
  );
}
