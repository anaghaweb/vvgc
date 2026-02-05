"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@modules/common/components/ui/navigation-menu"


export default function DesktopNavigationMenu({ navigationLink }: {
    navigationLink: { id: string, title: string; href: string; description: string, submenu: { id: string, title: string; href: string; description: string, }[] | null }[]
}) {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    navigationLink.map((navitem) => {

                        if (navitem.submenu !== null) {
                            return (
                                <NavigationMenuItem key={navitem.id}>
                                    <NavigationMenuTrigger
                                    className="font-sans text-sm xl:text-base"
                                    >
                                        {navitem.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-slate-100">
                                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">

                                            {
                                                navitem.submenu.map((component) => (
                                                    <ListItem
                                                        key={component.id}
                                                        title={component.title}
                                                        href={component.href}
                                                        className="hover:bg-yellow-300"
                                                    >
                                                        {component.description}
                                                    </ListItem>
                                                ))
                                            }
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }
                        else {

                            return (
                                <NavigationMenuItem key={navitem.id} >
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Link href={navitem.href}
                                        className=" font-sans text-sm xl:text-base"
                                        >{navitem.title}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        }
                    }

                    )
                }
            </NavigationMenuList>

        </NavigationMenu>
    )

}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium text-xl">{title}</div>
                        <div className="text-muted-foreground line-clamp-3">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
