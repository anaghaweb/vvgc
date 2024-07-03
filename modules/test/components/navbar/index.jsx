import React, { Fragment } from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@modules/common/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Fragment>
     <Menubar>    
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>          
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>         
        </MenubarContent>
      </MenubarMenu>
      </Menubar>
    </Fragment>
  );
}
