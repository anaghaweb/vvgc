"use client";
import { Fragment } from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@modules/common/components/ui/accordian";
import {
  SheetClose
} from "@modules/common/components/ui/sheet";


import Link from "next/link";
const MobileNavMenu = ({ navbarNavigation }) => {
  return (
    <Fragment>
      <ul className={`w-full flex flex-col space-y-4 sm:w-64 overflow-auto font-opensans text-base`}>
        {navbarNavigation.map((item, index) => {
          return <CreateMenu item={item} key={index} depth={0} />
          
        })}
      </ul>
    </Fragment>
  );
};

const CreateMenu = ({ item, depth}) => {
  if (item.child) {
     return (
      <li className="px-2">
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item.title">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            {item.child.map((c1, i1) => (              
              <AccordionContent key={i1}>
                <CreateMenu item={c1} depth={depth + 1} key={i1} />
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
          <Link key={item.id} href={item.url}  className={clsx(" px-2 w-full text-base",{            
            'px-2': depth > 0 && !item.child,
            // 'text-purple-900 bg-purple-100': item.url.split("/").includes(camid)
          })}>

            {item.title}
          </Link>
        </SheetClose>
      </Fragment>
    );
  }
};

export default MobileNavMenu;
