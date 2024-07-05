import clsx from "clsx";
import {
  TriangleDownIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect } from "react";

const CreateMenu = ({ item, depth, menuStatus, setMenuStatus, myref }) => {
    const handleMouseEnter = (item, depth) => {
      if (depth == 0) {
        setMenuStatus([]);
      }
      if (item.child) {
        setMenuStatus((prev) => [...prev, item.id]);
      }
    };
   

    if (item.child) {
      return (
        <li
          onMouseEnter={(e) => handleMouseEnter(item, depth)}
          
          className="relative px-2 py-1 hover:cursor-pointer hover:bg-orange-500 font-roboto 
           md:text-sm lg:text-base  font-light"
          ref={myref}
          key={item.id}
        >
          <div className="inline-flex items-center justify-between gap-1">
           <a href={item.url}>{item.title}</a> 
            {item.child &&
              (depth === 0 ? <TriangleDownIcon /> : <TriangleRightIcon />)}
          </div>
  
          <ul
            className={clsx(
              "z-10 absolute shadow-lg border-orange-500 rounded-md border-[0.1rem] transition-[height] duration-300 ease-in-out bg-[#FF9933]  min-w-40 font-roboto",
              {
                "top-10 left-0": depth === 0,
                "left-0 top-2 ml-[calc(100%)]": depth > 0,
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
                key={childItem.id}
              />
            ))}
          </ul>
        </li>
      );
    } else {
      return (
        <a key={item.id} href={item.url} >
        <li         
          className="whitespace-nowrap px-2 py-1 hover:bg-orange-500  lg:text-base  font-roboto font-light"
        >     
            {item.title}
        </li>
        </a>
      );
    }
  };

  export default CreateMenu