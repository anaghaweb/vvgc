import clsx from "clsx";
import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons";

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
        className={clsx((`relative px-2 py-1 hover:cursor-pointer
           text-slate-950 
           md:text-sm lg:text-base font-normal tracking-tight`),{
           
           })}
        ref={myref}
        key={item.id}
      >
        <div className={clsx((`flex flex-shrink-0 items-center justify-between gap-1 
        font-roboto font-normal text-slate-950 tracking-tight`),{
         
          'hover:border-b-2 hover:border-blue-950 text-blue-950':menuStatus,
        })}>
          <a href={item.url}
           className={clsx((`active:text-blue-800 active:font-semibold`),{
            
            })}
          >{item.title}</a>
          {item.child &&
            (depth === 0 ? <TriangleDownIcon /> : <TriangleRightIcon />)}
        </div>

        <ul
          className={clsx(
            (`z-10 absolute shadow-lg bg-inherit rounded-md ring-1 ring-pink-700
              transition-[height] duration-300 ease-in-out min-w-40 font-roboto`),
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
      <a key={item.id} href={item.url}>
        <li className={clsx((`whitespace-nowrap px-2 py-1 font-roboto font-normal 
        hover:bg-blue-950 hover:text-white
        text-slate-950 tracking-tight`),{
          
        })}>
          {item.title}
        </li>
      </a>
    );
  }
};

export default CreateMenu;
