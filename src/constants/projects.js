import { INSTITUTE_LOGO } from './education';
import { COMPANIES_LOGO } from './experience';
import { TECHNOLOGIES_ICONS } from './technologies';
import AALogo from '../assets/images/AA-logo-white.png';

const ROLE = {
  BE: 'Backend Developer',
  FE: 'Frontend Developer',
  FS: 'Fullstack Developer',
};

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
    role: ROLE.FE,
  },
  {
    title: 'Developer Data Collector',
    year: 2025,
    liveDemoUrl: null,
    githubUrl: null,
    description: [
      'A Python-based CLI tool that aggregates and reports developer activity and code quality metrics across GitLab, Jira, and SonarQube for a specified time period.',
      'Parses merged merge requests from multiple GitLab instances, capturing detailed stats such as additions, deletions, and file changes.',
      'Detects documentation contributions by identifying updates to README.md files in committed changes.',
      'Calculates test coverage trends by analyzing the proportion of test files among all modified files per user and per project.',
      'Integrates with SonarQube to retrieve and categorize assigned code quality issues by severity and type, offering a comprehensive view of technical debt.',
      'Tracks GitLab user activity events (pushes, comments, merges, etc.) to provide behavioral insights and engagement patterns.',
      'Queries Jira to count the number of tasks and bugs taken up by the user, broken down by project and issue type.',
      'Monitors Jira Wiki contributions, tracking how many pages the user has authored or edited.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.PYTHON],
      frontend: [],
      backend: [],
      tools: [
        TECHNOLOGIES_ICONS.GITLAB,
        TECHNOLOGIES_ICONS.JIRA,
        TECHNOLOGIES_ICONS.SONARQUBE,
      ],
    },
    partnerLogo: COMPANIES_LOGO.BOOKING,
    under: 'Booking.com',
    role: ROLE.BE,
  },
  {
    title: 'Metro Atlanta Saves',
    year: 2024,
    liveDemoUrl: 'https://www.brpatl.com/',
    githubUrl: null,
    description: [
      'MetroAtlantaSaves is a financial wellness platform built to help residents in the Atlanta area set and achieve savings goals.',
      'Users can create profiles, define savings objectives, and track their progress through guided financial programs.',
      'The platform includes key pages like About Us, Blogs, Educational Resources, and a Savings Calculator to support user learning and engagement.',
      'An admin dashboard allows authorized users to manage dynamic forms, review user data, and monitor engagement metrics.',
      'The frontend is built using React and Material UI, offering a clean and responsive interface.',
      'The backend uses Express and Prisma, with PostgreSQL as the primary database.',
      'Docker is used for containerization, with deployment handled through PM2 and Nginx.',
      'The site is secured with Let’s Encrypt SSL and runs on a DigitalOcean VM.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.TYPESCRIPT],
      frontend: [
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
        TECHNOLOGIES_ICONS.CSS,
      ],
      backend: [
        TECHNOLOGIES_ICONS.NODEJS,
        TECHNOLOGIES_ICONS.EXPRESS,
        TECHNOLOGIES_ICONS.POSTGRESQL,
      ],
      tools: [
        TECHNOLOGIES_ICONS.GIT,
        TECHNOLOGIES_ICONS.DOCKER,
        TECHNOLOGIES_ICONS.NGINX,
      ],
    },
    partnerLogo: INSTITUTE_LOGO.GA_TECH,
    under: 'GA Tech.',
    role: ROLE.FS,
  },
  {
    title: 'Alcohol Tracker',
    year: 2023,
    liveDemoUrl: null,
    githubUrl: null,
    description: [
      'This health analytics platform was developed to help users track their alcohol consumption and its correlation with health conditions.',
      'Users could log their drinking habits, health issues, and duration of illness through a clean and interactive interface.',
      'The system compared user data with insights from a comprehensive research dataset on alcohol consumption and health impacts.',
      'It highlighted common patterns, symptoms, and diseases based on age groups and usage trends.',
      'The project offered visual comparisons to show users how their consumption relates to broader data, helping raise awareness of potential health risks.',
      'This was a collaborative group project focused on promoting health literacy through data-driven insights.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.D3],
      frontend: [
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [
        TECHNOLOGIES_ICONS.NODEJS,
        TECHNOLOGIES_ICONS.EXPRESS,
        TECHNOLOGIES_ICONS.MY_SQL,
      ],
      tools: [TECHNOLOGIES_ICONS.GIT, TECHNOLOGIES_ICONS.DOCKER],
    },
    partnerLogo: INSTITUTE_LOGO.GA_TECH,
    under: 'GA Tech.',
    role: ROLE.FS,
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
    role: ROLE.FE,
  },
  {
    title: 'Game Swap',
    year: 2022,
    liveDemoUrl: null,
    githubUrl: null,
    description: [
      'Game Swap is a community-driven platform designed to facilitate the exchange of video games among users, reducing waste and promoting game accessibility.',
      'Users can list their games for swapping, search through listings using various filters, and initiate a swap request for items they’re interested in.',
      'Each swap request can be accepted or declined by the receiver, and once completed, users can leave ratings for transparency and reliability.',
      'A personal dashboard allows users to manage their listings, monitor swap status, and review their full swap history for easy reference.',
    ],
    techStack: {
      languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.PYTHON],
      frontend: [
        TECHNOLOGIES_ICONS.CSS,
        TECHNOLOGIES_ICONS.MATERIAL_UI,
        TECHNOLOGIES_ICONS.REACT,
        TECHNOLOGIES_ICONS.REACT_ROUTER,
      ],
      backend: [TECHNOLOGIES_ICONS.FLASK, TECHNOLOGIES_ICONS.MY_SQL],
      tools: [TECHNOLOGIES_ICONS.GIT, TECHNOLOGIES_ICONS.DOCKER],
    },
    partnerLogo: INSTITUTE_LOGO.GA_TECH,
    under: 'GA Tech.',
    role: ROLE.FS,
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
    role: ROLE.FS,
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
    role: ROLE.FS,
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
    role: ROLE.FS,
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
    role: ROLE.FS,
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
    role: ROLE.FS,
  },
];

export default PROJECTS;
