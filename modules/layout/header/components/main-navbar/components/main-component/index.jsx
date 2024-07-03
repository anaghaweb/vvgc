"use client";
import React, { useRef, useState, useEffect } from "react";

import CreateMenu from "../create-menu";

const MainNavMenu = ({navbarNavigation}) => {
  const myref = useRef();
  const [menuStatus, setMenuStatus] = useState([]);

  useEffect(() => {
    function removeMenu(event) {
      if (myref.current && !myref.current.contains(event.target)) {
        setMenuStatus([]);
      }
    }
    // function handleEscape(event) {
    //   if (event.key === "Escape") {
    //     setMenuStatus([]);
    //   }
    // }
    window.addEventListener("mouseup", removeMenu);
    // window.addEventListener("keydown", handleEscape);
    return function cleanupListener() {
      window.removeEventListener("mouseup", removeMenu);
      // window.removeEventListener("keydown", handleEscape);
    };
  }, [myref]);

  return (
    <div className={`hidden lg:block flex-1`}>
      <ul className="z-10 flex items-center justify-center gap-2 h-10 bg-[#FF9933] w-full">
        {navbarNavigation.map((item) => (
          <CreateMenu
            item={item}
            depth={0}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            myref={myref}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};



export default MainNavMenu;
