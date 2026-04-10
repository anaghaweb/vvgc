export const navbarNavigation = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Events",
    id: 2,
    url:"/events/?evtype=regular",
    child: [
      {
        title: "Special Events",
        url: "/events/?evtype=special",
        id: 3,
      },
      {
        title: "Regular Events",
        url: "/events/?evtype=regular",
        id: 4,
      },
    ],
  },
  
  {
    title: "Pooja Services",
    url: "/pooja-services",
    id: 9,
  },
  {
    title: "Prasadam Services",
    url: "/prasadam-services",
    id: 10,
  },
  {
    title: "Priests",
    url: "/priests",
    id: 11,
  },
  {
    title: "About Us",
    url: "/about-us",
    id: 12,
  },
  {
    title: "Lakshmi Ganapathi Temple",
    url: "/san-jose-temple",
    id: 13,
  },
  {
    title: "Goshala",
    url: "/goshala",
    id: 14,
  },
  
];
