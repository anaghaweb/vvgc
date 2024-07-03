"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { navbarNavigation } from "@lib/data/navigation";
import { cormorant, opensans, inter, roboto, playfair } from "app/fonts";
import clsx from "clsx";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
const MainNavMenu = () => {
  const myref = useRef();
  const [menuStatus, setMenuStatus] = useState([]);

  useEffect(() => {
    function removeMenu(event) {
      if (myref.current && !myref.current.contains(event.target)) {
        setMenuStatus([]);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuStatus([]);
      }
    }
    window.addEventListener("mousedown", removeMenu);
    window.addEventListener("keydown", handleEscape);
    return function cleanupListener() {
      window.removeEventListener("mousedown", removeMenu);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [myref]);

  return (
    <div className={`hidden lg:block`}>
      <ul className="flex items-center justify-center gap-2 h-10 bg-[#FF9933] font-sans">
        {navbarNavigation.map((item) => (
          <CreateMenu
            item={item}
            depth={0}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            myref={myref}
          />
        ))}
      </ul>
    </div>
  );
};

const CreateMenu = ({ item, depth, menuStatus, setMenuStatus, myref }) => {
  const handleMouseEnter = (item, depth) => {
    if (depth == 0) {
      setMenuStatus([]);
    }
    if (item.child) {
      setMenuStatus((prev) => [...prev, item.id]);
    }
  };

  console.log(menuStatus);
  if (item.child) {
    return (
      <li
        onMouseEnter={(e) => handleMouseEnter(item, depth)}
        className="relative px-2 py-1 hover:cursor-pointer hover:bg-orange-500 font-sans"
        ref={myref}
        key={item.id}
      >
        <div className="inline-flex items-center justify-between gap-1">
          {item.title}
          {item.child &&
            (depth === 0 ? <TriangleDownIcon /> : <TriangleRightIcon />)}
        </div>

        <ul
          className={clsx(
            "absolute transition-[height] duration-300 ease-in-out bg-[#FF9933] rounded-sm min-w-40 font-sans",
            {
              "top-10 left-0": depth === 0,
              "left-0 top-0 ml-[calc(100%)]": depth > 0,
              "block opacity-100":
                menuStatus && menuStatus?.find((v) => v === item.id),
              "hidden opacity-0": !menuStatus?.includes(item.id),
            }
          )}
        >
          {item.child.map((childItem) => (
            <CreateMenu
              item={childItem}
              depth={depth + 1}
              menuStatus={menuStatus}
              setMenuStatus={setMenuStatus}
              myref={myref}
            />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li
        key={item.id}
        className="relative whitespace-nowrap px-2 py-1 hover:bg-orange-500 font-sans"
      >
        <Link href={item.url} className={clsx("text-base")}>
          {item.title}
        </Link>
      </li>
    );
  }
};

export default MainNavMenu;
