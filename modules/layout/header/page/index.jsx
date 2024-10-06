"use client";

import MobileNavigationMenu from "../components/mobile-navbar/page";
import TempleAddressHeader from "../components/temple-address";
import DesktopNavigationMenu from "../components/main-navbar";
import LocalLinkWithBgColor from "@modules/common/components/LocalLinkWithBgColor";
import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import SubscribeToVVGCNewsLetter from "@modules/subscribe";
import FeedbackByDevotees from "@modules/feedback/page";

export default function Header() {
  const pathname = usePathname();
  const campaigns = pathname.split("/").includes("campaigns");
  const { camid } = useParams();
  console.log("camid", camid);
  return (
    <header
      className={clsx(
        `relative flex flex-col w-full h-40 md:h-40 bg-[#FF9933] min-w-full`,
        {
          // 'fixed':campaigns,
          // 'relative':!campaigns
        }
      )}
    >
      <nav className="z-10 justify-between xl:justify-center w-full bg-[#FF9933] h-12 flex items-center align-baseline fixed">
        <DesktopNavigationMenu />

        <div className="flex flex-col xl:hidden p-2">
          <MobileNavigationMenu camid={camid} />
        </div>

        {/* Support us button leads to Donations page */}
        <div className="mr-2 flex items-center gap-2 tracking-tight">
          <SubscribeToVVGCNewsLetter />
          <FeedbackByDevotees />
         
        {/* <Link href="/subscribe" target="_break" className="text-cyan-950 text-[12px] sm:text-base font-roboto 
        text-sm md:text-base ">Subscribe </Link>  */}

        {/* <Link href="/feedback" target="_break" className="text-cyan-950 text-[12px] sm:text-base font-roboto 
        text-sm md:text-base ">Feedback </Link>  */}

        <LocalLinkWithBgColor text="Donate" href="/donations" />
        </div>

        {/* {hamburger menu icon open and close } */}
      </nav>

      {/* Temple Title */}
      <TempleAddressHeader />
    </header>
  );
}
