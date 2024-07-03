
import Link from "next/link";
import { Button } from "@modules/common/components/ui/button";
import MobileNavigationMenu from "../components/mobile-navbar/page";
import TempleAddressHeader from "../components/temple-address";
import DesktopNavigationMenu from "../components/main-navbar";

export default function Header() {
  
  return (
    <header
      className={`relative flex flex-col w-full h-44 md:h-40 bg-[#FF9933] min-w-full`}
    >
      <nav className="justify-between lg:justify-center w-full h-14 flex items-center">
       
          <DesktopNavigationMenu/>

          <div
          // onClick={smallScreenNavigation}
          className="flex flex-col lg:hidden p-3"
        >
          <MobileNavigationMenu />
        </div>

        {/* Support us button leads to Donations page */}

        <Button
          type="button"          
          variant="outlined"
          className="md:my-1 mr-[1rem] min-w-max py-1 px-2 h-9 w-[100px]
        shadow-lg bg-emerald-600 rounded-md 
        hover:bg-green-700 
        hover:text-white 
        text-white
         font-cormorant text-lg"        
        >
         <Link href="/donations">Donate</Link> 
        </Button>

        {/* {hamburger menu icon open and close } */}
      
      </nav>

      {/* Temple Title */}
      <TempleAddressHeader />
    </header>
  );
}
