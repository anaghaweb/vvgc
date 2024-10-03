"use client";
import React, { Fragment } from "react";
import { navbarNavigation } from "@lib/data/navigation";
import { cormorant, opensans, inter, roboto, playfair } from "@lib/fonts/fonts";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@modules/common/components/ui/accordian";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@modules/common/components/ui/sheet";

import Link from "next/link";
const MobileNavMenu = ({ navbarNavigation, camid }) => {
  return (
    <Fragment>
      <ul className={`w-full sm:w-64 overflow-auto font-roboto`}>
        {navbarNavigation.map((item, index) => {
          return <li className="py-1 rounded-2xl">
            <CreateMenu item={item} key={index} depth={0} camid={camid}/>
          </li> 
        })}
      </ul>
    </Fragment>
  );
};

const CreateMenu = ({ item, depth, camid }) => {
  if (item.child) {
     return (
      <li className="rounded-xl">
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item.title">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            {item.child.map((c1, i1) => (
              <AccordionContent key={i1}>
                <CreateMenu item={c1} depth={depth + 1} camid={camid}/>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      </li>
    );
  } else {
    return (
      <Fragment>
        <SheetClose asChild>
          <Link key={item.id} href={item.url}  className={clsx(" text-base rounded-xl",{            
            'text-sm p-1': depth > 0 && !item.child,
            'text-blue-900 bg-blue-100': item.url.split("/").includes(camid)
          })}>
            {item.title}
          </Link>
        </SheetClose>
      </Fragment>
    );
  }
};

export default MobileNavMenu;
