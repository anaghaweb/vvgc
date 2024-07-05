import React, {Fragment} from 'react'
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
import { Button } from '@modules/common/components/ui/button';
import Divider from '@modules/common/components/divider';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { navbarNavigation } from "@lib/data/navigation";
import MobileNavMenu from '../components/navbar-content';
  
const MobileNavigationMenu = () => {
  return (
    <Fragment>    
        <Sheet >
          <SheetTrigger asChild >
            <Button variant="outline" className="bg-[#FF9933] hover:bg-orange-500">
            < HamburgerMenuIcon className="w-6 h-6"/>
            </Button>            
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Welcome to VVGC</SheetTitle>
              {/* <SheetDescription className="font-sans">
               Welcome to VVGC
              </SheetDescription> */}
            </SheetHeader>
            <Divider />
          <MobileNavMenu navbarNavigation={navbarNavigation} />
            {/* <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
            
    </Fragment>
  )
}

export default MobileNavigationMenu