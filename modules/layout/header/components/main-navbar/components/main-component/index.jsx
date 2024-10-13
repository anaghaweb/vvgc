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
    window.addEventListener("mouseup", removeMenu);
    
    return function cleanupListener() {
      window.removeEventListener("mouseup", removeMenu);
      
    };
  }, [myref]);

  return (
    <div className={`hidden xl:block flex-1 bg-[#FF9933]`}>
      <ul className="z-10 flex items-center  justify-center gap-2 h-10 w-full">
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
