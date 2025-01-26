import React, { Fragment } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@modules/common/components/ui/sheet";
import { Button } from "@modules/common/components/ui/button";
import Divider from "@modules/common/components/divider";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { navbarNavigation } from "@lib/data/navigation";
import MobileNavMenu from "../components/navbar-content";
import OM_SVG from "@lib/icons/om";

const MobileNavigationMenu = () => {
  return (
    <Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#FF9933] hover:bg-orange-500"
          >
            <HamburgerMenuIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex flex-shrink-0 items-baseline justify-center gap-4 font-cormorant">
              <OM_SVG w={12} h={12} color="grey" /> Welcome to VVGC{" "}
              <OM_SVG w={12} h={12} color="grey" />
            </SheetTitle>
            {/* <SheetDescription className="font-sans">
               Welcome to VVGC
              </SheetDescription> */}
          </SheetHeader>
          <Divider className="my-4"/>
          <MobileNavMenu navbarNavigation={navbarNavigation} />
          {/* <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default MobileNavigationMenu;
