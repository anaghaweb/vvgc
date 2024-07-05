export const navbarNavigation = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Events",
    id: 2,
    url:"#",
    child: [
      {
        title: "Special Events",
        url: "/events",
        id: 3,
      },
      {
        title: "Daily Events",
        url: "/events",
        id: 4,
      },
      {
        title: "Festivals",
        id: 5,
        url:"#",
        child: [
          {
            title: "Varamaha Lakshmi Vratha",
            url: "/events",
            id: 6,
          },
          {
            title: "Special Events",
            url: "/events",
            id: 7,
          },
        ],
      },
    ],
  },
  {
    title: "Our Services",
    id: 8,
    url:"#",
    child: [
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
    ],
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
  {
    title: "test",
    url: "/test",
    id: 15,
  },
  {
    title: "Campaigns",
    id: 16,
    url:"/campaigns/cam_001",
    child: [
      {
        title: "Campaign1",
        url: "/campaigns/cam_001",
        id: 17,
      },
      {
        title: "Campaign2",
        url: "/campaigns/cam_002",
        id: 18,
      },
      {
        title: "Campaign3",
        url: "/campaigns/cam_003",
        id: 19,
      },
      {
        title: "Campaign4",
        url: "/campaigns/cam_004",
        id: 20,
      },
    ],
  },
];
