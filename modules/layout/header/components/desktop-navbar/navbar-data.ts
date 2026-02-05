export const nav_components_list: { id: string, title: string; href: string; description: string, submenu: { id: string, title: string; href: string; description: string, }[] | null }[] = [
    {
        id: "navcl1",
        title: "Home",
        href: "/",
        description:
            "VVGC Home Page",
        submenu: null,
    },
    {
        id: "navcl2e",
        title: "Events",
        href: "/events/?evtype=regular",
        description:
            "VVGC Events",
        submenu: [{
            id: "subev1",
            title: "Special Events",
            href: "/events/?evtype=special",
            description: "Special poojas, seasonal events, festivals, musical events, bhajans and special events performed devotees."
        },
        {
            id: "subev2",
            title: "Daily Performed Poojas",
            href: "/events/?evtype=regular",
            description: "Details daily performed poojas, abhishekas and prasadam distribution."
        }
        ]
    },

    {
        id: "navcl2",
        title: "Pooja Services",
        href: "/pooja-services",
        description: "abc",
        submenu: null
    },
    {
        id: "navcl3",
        title: "Prasadam Services",
        href: "/prasadam-services",
        description: "10",
        submenu: null
    },
    {
        id: "navcl4",
        title: "Priests",
        href: "/priests",
        description: "11",
        submenu: null
    },
    {
        id: "navcl5",
        title: "About Us",
        href: "/about-us",
        description: "12",
        submenu: null
    },
    {
        id: "navcl6",
        title: "Lakshmi Ganapathi Temple",
        href: "/san-jose-temple",
        description: "13",
        submenu: null
    },
    {
        id: "navcl7",
        title: "Goshala",
        href: "/goshala",
        description: "14",
        submenu: null
    },
]

