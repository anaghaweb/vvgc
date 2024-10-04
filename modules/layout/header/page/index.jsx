"use client";

import MobileNavigationMenu from "../components/mobile-navbar/page";
import TempleAddressHeader from "../components/temple-address";
import DesktopNavigationMenu from "../components/main-navbar";
import LocalLinkWithBgColor from "@modules/common/components/LocalLinkWithBgColor";
import { useParams, usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { Separator } from "@modules/common/components/ui/separator";
import { MenubarSeparator } from "@modules/common/components/ui/menubar";

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
      <nav className="justify-between lg:justify-center w-full h-14 flex items-center">
        <DesktopNavigationMenu />

        <div className="flex flex-col lg:hidden p-3">
          <MobileNavigationMenu camid={camid} />
        </div>

        {/* Support us button leads to Donations page */}
        <div className="mr-2 flex items-center gap-1 md:gap-2">
        {/* <Link href="/subscribe" target="_break" className="text-gray-800 text-[12px] sm:text-base font-cormorant font-bold text-base underline">Subscribe </Link> 
        <div className="text-gray-800 font-thin">|</div>
        <Link href="/feedback" target="_break" className="text-gray-800 text-[12px] sm:text-base font-cormorant font-bold text-base underline">Feedback </Link> 
        <div className="text-gray-800 font-thin">|</div> */}
        <LocalLinkWithBgColor  text="donate" href="/donations" />
        </div>

        {/* {hamburger menu icon open and close } */}
      </nav>

      {/* Temple Title */}
      <TempleAddressHeader />
    </header>
  );
}
