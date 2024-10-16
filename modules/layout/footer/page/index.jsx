"use client";

import { Separator } from "@modules/common/components/ui/separator";
import { usePathname } from "next/navigation";
import TempleTimings from "../components/temple-timings";
import SanJose from "../components/locations/san-jose";
import SanMartin from "../components/locations/san-martin";
import Copyright from "../components/copyright";
import SocialMediaLinks from "../components/social-media";

export default function Footer() {
  const pathname = usePathname();
  const campaign = pathname.split("/").includes("campaigns");
  const verifyEmail = pathname.split("/").includes("verifyEmail");
  return (
    
      <footer className="w-full max-w-full grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-5  bg-sky-950 max-h-full h-auto items-center justify-center px-4 py-4">
        <TempleTimings />
        <Separator className=" bg-slate-600 col-span-full my-2" />

        {/* Locations */}
        <div className="text-stone-300 flex flex-col col-span-full text-base font-bold">
          Our Locations
        </div>
        <SanMartin />
        <SanJose />
        
        <Separator className=" bg-slate-600 col-span-full " />

      {/* Copy Right and Social Media Links */}

        <section className="col-span-full gap-6">
        <Copyright />
          <div className="flex flex-col justify-start items-center md:flex-row md:justify-between">
            <SocialMediaLinks />
          </div>
        </section>

      </footer>
    
  );
}
