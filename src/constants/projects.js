import { TECHNOLOGIES_ICONS } from './technologies';
import { COMPANIES_LOGO } from './experience';
import { INSTITUTE_LOGO } from './education';

const PROJECTS = [
  {
    title: 'ATS Website',
    year: 2023,
    liveDemoUrl: 'https://aerialtelecom.in/',
    githubUrl: null,
    description: [
      'A sleek corporate website designed and developed for Aerial Telecom Solutions (ATS), a leading player in telecom infrastructure and training services. The site showcases ATS’s offerings, legacy, and impact through a modern, responsive interface. Built with performance and clarity in mind, it features subtle animations, a clean information hierarchy, and seamless navigation for stakeholders across sectors.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.JAVASCRIPT],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.MATERIAL_UI,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [],
      tools: [TECHNOLOGIES_ICONS.FIGMA, TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: COMPANIES_LOGO.ATS,
    under: 'Aerial Telecom Solutions',
  },
  {
    year: 2020,
    title: 'SwyftCart E-commerce',
    liveDemoUrl: 'http://demo.swyftcart.com/',
    githubUrl: null,
    under: 'SwyftCart',
    description: [
      'SwyftCart E-commerce is an e-commerce website.',
      'Users can buy products from various shops near them by adding listed products to their cart. They have an option to pay online or can choose cash on delivery option.',
      "Also, user's can track their orders and cancel them.",
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.TYPESCRIPT],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.ANTD,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [
        TECHNOLOGIES_ICONS.EXPRESS,
        TECHNOLOGIES_ICONS.FIREBASE,
        TECHNOLOGIES_ICONS.NODEJS,
      ],
      tools: [TECHNOLOGIES_ICONS.FIGMA, TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: null,
  },
  {
    year: 2020,
    title: 'SwyftCart Admin',
    liveDemoUrl: 'https://demoshop.swyftcart.com/',
    githubUrl: null,
    under: 'SwyftCart',
    description: [
      'SwyftCart admin is an application for shops to manage their orders and products.',
      'User can view their statistics, view orders, change their status, and manage their inventory.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.TYPESCRIPT],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.ANTD,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [
        TECHNOLOGIES_ICONS.EXPRESS,
        TECHNOLOGIES_ICONS.FIREBASE,
        TECHNOLOGIES_ICONS.NODEJS,
      ],
      tools: [TECHNOLOGIES_ICONS.FIGMA, TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: null,
  },
  {
    year: 2019,
    title: 'Suvidham',
    liveDemoUrl: 'http://suvidham.now.sh/',
    githubUrl: null,
    under: 'Punjab Engineering College',
    description: [
      'Suvidham is a smart parking web and android app.',
      'Users can create an account or sign in with Google.',
      'Users can view the parking layout to check slot occupancy and can pay parking tickets.',
      'User can edit their profile and view their payment history.',
    ],
    techStack: {
      languages: [
        TECHNOLOGIES_ICONS.CPP,
        TECHNOLOGIES_ICONS.JAVASCRIPT,
        TECHNOLOGIES_ICONS.KOTLIN,
        TECHNOLOGIES_ICONS.PYTHON,
      ],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.MATERIAL_UI,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [TECHNOLOGIES_ICONS.DJANGO, TECHNOLOGIES_ICONS.MY_SQL],
      tools: [TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: INSTITUTE_LOGO.PEC,
  },
  {
    year: 2019,
    title: 'Patralaya',
    liveDemoUrl: 'https://patralaya.herokuapp.com/',
    githubUrl: null,
    under: 'Punjab Engineering College',
    description: [
      'Patralaya is a blogging website.',
      'Users can post blogs, add tags to them and categorize them. Further, users can view other user profiles, filter their feed, and share blogs on Facebook, Reddit and Twitter.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.PYTHON],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.MATERIAL_UI,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [TECHNOLOGIES_ICONS.DJANGO, TECHNOLOGIES_ICONS.POSTGRESQL],
      tools: [TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: null,
  },
  {
    year: 2019,
    title: 'Chatroom',
    liveDemoUrl: 'https://github.com/EightBitGod/TheDevCom_ProjectChatroom',
    githubUrl: null,
    under: 'The Developer Community',
    description: [
      'Worked with in a team to develop chatroom application.',
      'Features supported by application are emoji, users can join room to chat, last activity of user, and timestamp of message.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.PYTHON],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.MATERIAL_UI,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [TECHNOLOGIES_ICONS.DJANGO, TECHNOLOGIES_ICONS.REDIS],
      tools: [TECHNOLOGIES_ICONS.GIT],
    },
    partnerLogo: null,
  },
];

export default PROJECTS;
