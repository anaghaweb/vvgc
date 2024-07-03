"use client";
import React, { Fragment } from "react";
import { navbarNavigation } from "@lib/data/navigation";
import { cormorant, opensans, inter, roboto, playfair } from "app/fonts";
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
const MobileNavMenu = ({ navbarNavigation }) => {
  return (
    <Fragment>
      <ul className={`w-full sm:w-64 overflow-auto`}>
        {navbarNavigation.map((item, index) => {
          return <li className="py-1">
            <CreateMenu item={item} key={index} />
          </li> 
        })}
      </ul>
    </Fragment>
  );
};

const CreateMenu = ({ item }) => {
  if (item.child) {
     return (
      <li>
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item.title">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            {item.child.map((c1, i1) => (
              <AccordionContent key={i1}>
                <CreateMenu item={c1} />
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
          <Link href={item.url}  className={clsx("text-base")}>
            {item.title}
          </Link>
        </SheetClose>
      </Fragment>
    );
  }
};

export default MobileNavMenu;
