import { TECHNOLOGIES_ICONS } from './technologies';
import { COMPANIES_LOGO } from './experience';
import { INSTITUTE_LOGO } from './education';
import AALogo from '../assets/images/AA-logo-white.png';

const PROJECTS = [
  {
    title: 'Portfolio',
    year: 2025,
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/amadhya02/Portfolio',
    description: [
      'A thoughtfully designed and custom-built developer portfolio showcasing professional experience, technical projects, education, and skills through an interactive and visually refined interface.',
      'Built from scratch using React and Framer Motion to enable smooth transitions and subtle animations that enhance user engagement without compromising performance.',
      'The design emphasizes clarity, minimalism, and responsiveness — optimized for both desktop and mobile devices — with dark mode support and consistent theming.',
      'Features include modular sections (Projects, Experience, Education, Contact), reusable components, and seamless navigation, providing a cohesive narrative of the developer’s journey.',
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
    partnerLogo: AALogo,
    under: 'Amadhya Anand',
  },
  {
    title: 'ATS Website',
    year: 2023,
    liveDemoUrl: 'https://aerialtelecom.in/',
    githubUrl: null,
    description: [
      'Designed and developed a modern, responsive corporate website for Aerial Telecom Solutions (ATS), a key player in telecom infrastructure and training services.',
      'The platform highlights ATS’s service offerings, organizational impact, and legacy with a clean and accessible user interface.',
      'Focused on performance, accessibility, and stakeholder engagement, the site includes subtle animations, a structured content flow, and an intuitive navigation system optimized for desktop and mobile devices.',
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
    githubUrl: null,
    under: 'SwyftCart',
    description: [
      'Built a full-fledged e-commerce web application that allows users to explore products from multiple nearby shops and purchase them seamlessly.',
      'Implemented key features such as cart management, online and COD payment options, order tracking, and cancellation functionality.',
      'Designed the system with user convenience in mind, ensuring responsive layouts, optimized load times, and secure user sessions.',
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
    partnerLogo: AALogo,
  },
  {
    year: 2020,
    title: 'SwyftCart Admin',
    githubUrl: null,
    under: 'SwyftCart',
    description: [
      'Developed the administrative interface for shop owners using the SwyftCart platform to manage their business operations effectively.',
      'The dashboard provides comprehensive access to product and inventory management, order tracking, analytics, and fulfillment tools.',
      'Built with a focus on simplicity and control, the interface allows real-time updates to product listings and efficient status handling of customer orders.',
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
    partnerLogo: AALogo,
  },
  {
    year: 2019,
    title: 'Suvidham',
    liveDemoUrl: 'http://suvidham.now.sh/',
    githubUrl: 'https://github.com/amadhya02/Shighram',
    under: 'Punjab Engineering College',
    description: [
      'Created a smart parking management system consisting of a responsive web interface and an Android application.',
      'Users can register or authenticate via Google, check real-time parking slot availability, make payments digitally, and view transaction history.',
      'The application streamlines urban parking challenges by providing a user-friendly interface and secure payment workflows, making it practical for campus or city-level deployments.',
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
    githubUrl: 'https://github.com/amadhya02/Patralaya',
    under: 'Punjab Engineering College',
    description: [
      'Built a feature-rich blogging platform enabling users to create, categorize, and tag posts for organized content distribution.',
      'The platform allows readers to browse blogs, filter feeds based on categories or tags, and view author profiles.',
      'Implemented social media sharing for broader reach and integrated user-friendly navigation with clean visual hierarchy.',
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
    partnerLogo: INSTITUTE_LOGO.PEC,
  },
  {
    year: 2019,
    title: 'Chatroom',
    githubUrl: 'https://github.com/EightBitGod/TheDevCom_ProjectChatroom',
    under: 'Amadhya Anand',
    description: [
      'Collaboratively developed a real-time chat application designed to support multi-user communication within rooms.',
      'Implemented features such as emoji support, user presence tracking (online/last seen), and message timestamping.',
      'Focused on team collaboration, backend efficiency, and responsive chat interface design, enabling smooth real-time interaction among users.',
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
    partnerLogo: AALogo,
  },
];

export default PROJECTS;
