"use client"
import { Button } from "@modules/common/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@modules/common/components/ui/dropdown-menu"
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { PiAppleLogoDuotone } from 'react-icons/pi'
import { TfiMicrosoftAlt } from 'react-icons/tfi'
import { FcCalendar } from "react-icons/fc";


export function DropdownMenuIcons({google,apple, outlook}
  :
  {
    google:string,apple:string, outlook:string
  }
) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>        
        <Button variant="destructive">          
          <FcCalendar size={32} />
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white ">
        <DropdownMenuItem>
          <Link href={apple}  target="_blank" className="hover:bg-green-200 w-full px-1 flex gap-2 items-center">
          <PiAppleLogoDuotone className="text-sky-800"/>
          calendar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border-b "/>
        <DropdownMenuItem>
         <Link href={google}  target="_blank" className="hover:bg-green-200 w-full px-1 flex gap-2 items-center">
          <FcGoogle />
          calendar
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border-b "/>
        <DropdownMenuItem>
          <Link href={outlook}  target="_blank" className="hover:bg-green-200 w-full px-1 flex gap-2 items-center">
          <TfiMicrosoftAlt className="text-sky-500"/>
          calendar
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
