import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Chairman Message",
        path: "/#",
        newTab: false,
      },
      {
        id: 22,
        title: "Mission",
        path: "/#",
        newTab: false,
      },
      {
        id: 23,
        title: "Vision",
        path: "/#",
        newTab: false,
      },
      {
        id: 24,
        title: "Governing Body",
        path: "/#",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Administration",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Principal",
        path: "/#",
        newTab: false,
      },
      {
        id: 32,
        title: "Organization Chart",
        path: "/#",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Curriculum",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "POs & COs",
        path: "/#",
        newTab: false,
      },
      {
        id: 42,
        title: "Student centric learning Methods ",
        path: "/#",
        newTab: false,
      },
    ],
  },

  {
    id: 5,
    title: "Faculty",
    path: "/#",
    newTab: false,
  },
  {
    id: 6,
    title: "Facilities",
    path: "#",
    newTab: false,
  },
  {
    id: 7,
    title: "Extentions Activities",
    path: "/#",
    newTab: false,
  },

  {
    id: 8,
    title: "Placements",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "Careers",
        path: "/#",
        newTab: false,
      },
      {
        id: 82,
        title: "Activities & Photos",
        path: "/#",
        newTab: false,
      },
    ],
  },
  {
    id: 9,
    title: "RTI",
    path: "/#",
    newTab: false,
  },
  {
    id: 10,
    title: "NAAC",
    newTab: false,
    submenu: [
      {
        id: 101,
        title: "Undertaking",
        path: "/#",
        newTab: false,
      },
      {
        id: 102,
        title: "SSR",
        newTab: false,
        submenu: [
          {
            id: 1021,
            title: "CRITERIA - 1",
            path: "/#",
            newTab: false,
          },

          {
            id: 1022,
            title: "CRITERIA - 2",
            path: "/#",
            newTab: false,
          },
          {
            id: 1023,
            title: "CRITERIA - 3",
            path: "/#",
            newTab: false,
          },
          {
            id: 1024,
            title: "CRITERIA - 4",
            path: "/#",
            newTab: false,
          },
          {
            id: 1025,
            title: "CRITERIA - 5",
            path: "/#",
            newTab: false,
          },
          {
            id: 1026,
            title: "CRITERIA - 6",
            path: "/#",
            newTab: false,
          },
          {
            id: 1027,
            title: "CRITERIA - 7",
            path: "/#",
            newTab: false,
          },
        ],
      },
      {
        id: 103,
        title: "DVV",
        newTab: false,
        submenu: [
          {
            id: 1031,
            title: "CRITERIA - 1",
            path: "/#",
            newTab: false,
          },

          {
            id: 1032,
            title: "CRITERIA - 2",
            path: "/#",
            newTab: false,
          },
          {
            id: 1033,
            title: "CRITERIA - 3",
            path: "/#",
            newTab: false,
          },
          {
            id: 1034,
            title: "CRITERIA - 4",
            path: "/#",
            newTab: false,
          },
          {
            id: 1035,
            title: "CRITERIA - 5",
            path: "/#",
            newTab: false,
          },
          {
            id: 1036,
            title: "CRITERIA - 6",
            path: "/#",
            newTab: false,
          },
          {
            id: 1037,
            title: "CRITERIA - 7",
            path: "/#",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Contact Us",
    path: "/#",
    newTab: false,
  },
  {
    id: 12,
    title: "Feedback",
    newTab: false,
    submenu: [
      {
        id: 121,
        title: "Grievance",
        path: "/#",
        newTab: false,
      },
      {
        id: 122,
        title: "Student Feedback",
        path: "/#",
        newTab: false,
      },
      {
        id: 123,
        title: "Employer Feedback",
        path: "/#",
        newTab: false,
      },
      {
        id: 124,
        title: "Action Taken Report ",
        path: "/#",
        newTab: false,
      },
      {
        id: 122,
        title: "Alumini Feedback",
        path: "/#",
        newTab: false,
      },
      {
        id: 122,
        title: "Feedback of Student on Faculty",
        path: "/#",
        newTab: false,
      },
      {
        id: 122,
        title: "Feedback of Student on Collage",
        path: "/#",
        newTab: false,
      },
    ],
  },
];
export default menuData;
