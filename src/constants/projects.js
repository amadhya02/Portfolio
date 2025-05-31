import { TECHNOLOGIES_ICONS } from './technologies';
import { COMPANIES_LOGO } from './experience';

const PROJECTS = [
  {
    title: 'ATS Website',
    year: 2023,
    liveDemoUrl: 'https://aerialtelecom.in/',
    githubUrl: null,
    tagline:
      'A polished web experience showcasing ATS’s end-to-end telecom solutions and capabilities',
    description:
      'A sleek corporate website designed and developed for Aerial Telecom Solutions (ATS), a leading player in telecom infrastructure and training services. The site showcases ATS’s offerings, legacy, and impact through a modern, responsive interface. Built with performance and clarity in mind, it features subtle animations, a clean information hierarchy, and seamless navigation for stakeholders across sectors.',
    techStack: [TECHNOLOGIES_ICONS.REACT],
    featured: false,
    partnerLogo: COMPANIES_LOGO.ATS,
    under: 'Aerial Telecom Solutions',
  },
  {
    year: 2020,
    title: 'SwyftCart E-commerce',
    liveDemoUrl: 'http://demo.swyftcart.com/',
    githubUrl: null,
    tagline:
      'A hyperlocal shopping platform connecting users to nearby stores with seamless delivery and tracking',
    under: 'SwyftCart',
    description: [
      'SwyftCart E-commerce is an e-commerce website.',
      'Users can buy products from various shops near them by adding listed products to their cart. They have an option to pay online or can choose cash on delivery option.',
      "Also, user's can track their orders and cancel them.",
    ],
    techStack: [
      TECHNOLOGIES_ICONS.TYPESCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.NODEJS,
      TECHNOLOGIES_ICONS.EXPRESS,
      TECHNOLOGIES_ICONS.FIREBASE,
      TECHNOLOGIES_ICONS.ANTD,
    ],
    featured: false,
    partnerLogo: null,
  },
  {
    year: 2020,
    title: 'SwyftCart Admin',
    liveDemoUrl: 'https://demoshop.swyftcart.com/',
    githubUrl: null,
    tagline:
      'An intuitive dashboard for sellers to manage inventory, orders, and analyze store performance',
    under: 'SwyftCart',
    description: [
      'SwyftCart admin is an application for shops to manage their orders and products.',
      'User can view their statistics, view orders, change their status, and manage their inventory.',
    ],
    techStack: [
      TECHNOLOGIES_ICONS.TYPESCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.NODEJS,
      TECHNOLOGIES_ICONS.EXPRESS,
      TECHNOLOGIES_ICONS.FIREBASE,
      TECHNOLOGIES_ICONS.ANTD,
    ],
    featured: false,
    partnerLogo: null,
  },
  {
    year: 2019,
    title: 'Suvidham',
    liveDemoUrl: 'http://suvidham.now.sh/',
    githubUrl: null,
    tagline:
      'A smart parking platform for real-time slot monitoring, payments, and user profile management',
    under: 'Punjab Engineering College',
    description: [
      'Suvidham is a smart parking web and android app.',
      'Users can create an account or sign in with Google.',
      'Users can view the parking layout to check slot occupancy and can pay parking tickets.',
      'User can edit their profile and view their payment history.',
    ],
    techStack: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.CPP,
      TECHNOLOGIES_ICONS.KOTLIN,
      TECHNOLOGIES_ICONS.MATERIAL_UI,
    ],
    featured: false,
    partnerLogo: null,
  },
  {
    year: 2019,
    title: 'Patralaya',
    liveDemoUrl: 'https://patralaya.herokuapp.com/',
    githubUrl: null,
    tagline:
      'A modern blogging platform with rich user profiles, tags, filters, and social sharing',
    under: 'Punjab Engineering College',
    description: [
      'Patralaya is a blogging website.',
      'Users can post blogs, add tags to them and categorize them. Further, users can view other user profiles, filter their feed, and share blogs on Facebook, Reddit and Twitter.',
    ],
    techStack: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.POSTGRESQL,
      TECHNOLOGIES_ICONS.MATERIAL_UI,
    ],
    featured: false,
    partnerLogo: null,
  },
  {
    year: 2019,
    title: 'Chatroom',
    liveDemoUrl: 'https://github.com/EightBitGod/TheDevCom_ProjectChatroom',
    githubUrl: null,
    tagline:
      'A real-time group chat app supporting emoji, user presence, and message timestamps',
    under: 'The Developer Community',
    description: [
      'Worked with in a team to develop chatroom application.',
      'Features supported by application are emoji, users can join room to chat, last activity of user, and timestamp of message.',
    ],
    techStack: [
      TECHNOLOGIES_ICONS.JAVASCRIPT,
      TECHNOLOGIES_ICONS.REACT,
      TECHNOLOGIES_ICONS.REDUX,
      TECHNOLOGIES_ICONS.DJANGO,
      TECHNOLOGIES_ICONS.REDIS,
    ],
    featured: false,
    partnerLogo: null,
  },
];

export default PROJECTS;
