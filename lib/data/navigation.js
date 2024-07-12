export const navbarNavigation = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Events",
    id: 2,
    url:"/events/?evtype=special",
    child: [
      {
        title: "Special Events",
        url: "/events/?evtype=special",
        id: 3,
      },
      {
        title: "Daily Events",
        url: "/events/?evtype=regular",
        id: 4,
      },
      {
        title: "Festivals",
        id: 5,
        url:"/events/?evtype=special",
        child: [
          {
            title: "Varamaha Lakshmi Vratha",
            url: "/events/?evtype=special",
            id: 6,
          },
          {
            title: "Rig / Yajur Upakarma",
            url: "/events/?evtype=special",
            id: 7,
          },
        ],
      },
    ],
  },
  {
    title: "Our Services",
    id: 8,
    url:"/pooja-services",
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
        title: "Phase II Kitchen Construction",
        url: "/campaigns/cam_001",
        id: 17,
      },
      {
        title: "Donate to VVGC",
        url: "/campaigns/cam_002",
        id: 18,
      },
      {
        title: "Fundraising for VVGC Goshala",
        url: "/campaigns/cam_003",
        id: 19,
      },
      {
        title: "Bhagwati Jagran - VVGC San Martin, CA",
        url: "/campaigns/cam_004",
        id: 20,
      },
      {
        title: "Annadhanam / Prasadam Sponsorship",
        url: "/campaigns/cam_005",
        id: 21,
      },
      {
        title: "Pournami Vratha Pooja - Registration",
        url: "/campaigns/cam_006",
        id: 22,
      },
      {
        title: "VVGC Custom Prasadam",
        url: "/campaigns/cam_007",
        id: 23,
      },
      {
        title: "Sponsor the weekly events at VVGC - San Martin.",
        url: "/campaigns/cam_008",
        id: 24,
      },
      {
        title: "Pournami Vratha Aarathi, Mantra Pushpa",
        url: "/campaigns/cam_009",
        id: 25,
      },
      {
        title: "Sankata Hara Chathurthi",
        url: "/campaigns/cam_010",
        id: 26,
      },
      {
        title: "VVGC San Jose Weekly Events",
        url: "/campaigns/cam_011",
        id: 27,
      },
      {
        title: "Ekadasa Vara Sri Rudra Abhisheka & Chanting",
        url: "/campaigns/cam_012",
        id: 28,
      },
      {
        title: "VVGC E- Hundi",
        url: "/campaigns/cam_013",
        id: 29,
      },
      {
        title: "Donate for Fresh Temple Snacks",
        url: "/campaigns/cam_014",
        id: 30,
      },
    ],
  },
];
