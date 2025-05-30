import CuemathLogo from '../assets/images/cuemath-logo.png';
import CnLogo from '../assets/images/cn-logo.png';
import BookingLogo from '../assets/images/booking-logo.png';
import AtsLogo from '../assets/images/ats-logo.png';
import { TECHNOLOGIES_ICONS } from './technologies';

const EXPERIENCE = [
  {
    name: 'Booking.com',
    logo: BookingLogo,
    location: 'Amsterdam, Netherlands',
    roles: [
      {
        duration: 'Jan, 2024 - Present',
        role: 'Software Engineer II',

        desc: [
          'Enabled value-based steering by providing insights into platform usage and product adoption through designing and developing a system to track how partners manage pricing.',
          'Reduced dependency on engineering for issue resolution, as measured by surveys, by creating and documenting FAQs and debugging guides.',
          'Improved system observability, resulting in faster issue detection and resolution, by building monitoring dashboards in Grafana using Terraform.',
          'Improved code maintainability and reduced redundancy by modernizing the legacy codebase and eliminating inefficiencies, through proposing and documenting enhancements to partner-facing platforms.',
          'Improved the legacy codebase, enabling faster time-to-market and increased maintainability, by increasing test coverage and refactoring code.',
        ],
        tech: {
          languages: [
            TECHNOLOGIES_ICONS.JAVA,
            TECHNOLOGIES_ICONS.PERL,
            TECHNOLOGIES_ICONS.PYTHON,
          ],
          frontend: [],
          backend: [
            TECHNOLOGIES_ICONS.DROPWIZARD,
            TECHNOLOGIES_ICONS.GRAFANA,
            TECHNOLOGIES_ICONS.HADOOP,
            TECHNOLOGIES_ICONS.KAFKA,
            TECHNOLOGIES_ICONS.MY_SQL,
            TECHNOLOGIES_ICONS.TERRAFORM,
          ],
          tools: [
            TECHNOLOGIES_ICONS.DOCKER,
            TECHNOLOGIES_ICONS.ELASTIC_SEARCH,
            TECHNOLOGIES_ICONS.GITLAB,
            TECHNOLOGIES_ICONS.JIRA,
            TECHNOLOGIES_ICONS.KUBERNETES,
            TECHNOLOGIES_ICONS.SONARQUBE,
            TECHNOLOGIES_ICONS.SWAGGER,
          ],
        },
      },
      {
        duration: 'Sep, 2022 - Dec, 2023',
        role: 'Software Engineer I',
        desc: [
          'Enhanced partner eligibility automation by replacing reliance on a static list with a cron job, improving accuracy and efficiency.',
          'Designed and developed a system for a derived product using Kafka pipelines and existing services, empowering product adoption observability under the Value-Based Steering initiative.',
        ],
        tech: {
          languages: [TECHNOLOGIES_ICONS.JAVA, TECHNOLOGIES_ICONS.PERL],
          frontend: [],
          backend: [
            TECHNOLOGIES_ICONS.DROPWIZARD,
            TECHNOLOGIES_ICONS.GRAPHQL,
            TECHNOLOGIES_ICONS.KAFKA,
            TECHNOLOGIES_ICONS.MY_SQL,
          ],
          tools: [
            TECHNOLOGIES_ICONS.DOCKER,
            TECHNOLOGIES_ICONS.GITLAB,
            TECHNOLOGIES_ICONS.JIRA,
            TECHNOLOGIES_ICONS.KUBERNETES,
          ],
        },
      },
    ],
  },
  {
    name: 'Aerial Telecom Solutions',
    logo: AtsLogo,
    location: 'Remote',
    roles: [
      {
        duration: 'Mar, 2023 - May, 2023',
        role: 'Freelance Frontend Developer',
        desc: [],
        tech: {
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
      },
    ],
  },
  {
    name: 'Cuemath',
    logo: CuemathLogo,
    location: 'Bangalore, India',
    roles: [
      {
        duration: 'Apr, 2022 - Aug, 2022',
        role: 'Senior Software Developer',

        desc: [
          'Enhanced real-time communication between students and teachers by enabling seamless audio/video calls and screen sharing through the integration of third-party SDKs.',
          'Improved data-driven decision-making by providing insights through an analytics dashboard by implementing frontend instrumentation and leveraging collected data.',
        ],
        tech: {
          languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.PYTHON],
          frontend: [
            TECHNOLOGIES_ICONS.CSS,
            TECHNOLOGIES_ICONS.LODASH,
            TECHNOLOGIES_ICONS.REACT,
            TECHNOLOGIES_ICONS.REACT_ROUTER,
            TECHNOLOGIES_ICONS.REDUX,
          ],
          backend: [
            TECHNOLOGIES_ICONS.AWS_LAMBDA,
            TECHNOLOGIES_ICONS.FLASK,
            TECHNOLOGIES_ICONS.POSTGRESQL,
            TECHNOLOGIES_ICONS.REDIS,
          ],
          tools: [
            TECHNOLOGIES_ICONS.DOCKER,
            TECHNOLOGIES_ICONS.ESLINT,
            TECHNOLOGIES_ICONS.FIGMA,
            TECHNOLOGIES_ICONS.GIT,
            TECHNOLOGIES_ICONS.KUBERNETES,
            TECHNOLOGIES_ICONS.NOTION,
            TECHNOLOGIES_ICONS.POSTMAN,
            TECHNOLOGIES_ICONS.SENTRY,
          ],
        },
      },
      {
        duration: 'July, 2020 - Mar, 2022',
        role: 'Software Developer',
        desc: [
          'Develop and maintain features for the online teaching platform for teachers and students.',
          'Working on post-processing of Audio Video Call recordings and improving the performance of the call during the class.',
          'Worked on improving the classroom experience for teachers.',
          'Worked on improving the overall demo experience of teachers and students by developing features like a presentation by a teacher.',
          'Developed SDKs for in-house analytics system.',
          "To help students, teachers, and parents get insight into student's monthly performance, developed a monthly progress report. Technologies used: React, D3.js and Flask.",
        ],
        tech: {
          languages: [
            TECHNOLOGIES_ICONS.D3,
            TECHNOLOGIES_ICONS.JAVASCRIPT,
            TECHNOLOGIES_ICONS.PYTHON,
          ],
          frontend: [
            TECHNOLOGIES_ICONS.CSS,
            TECHNOLOGIES_ICONS.LODASH,
            TECHNOLOGIES_ICONS.REACT,
            TECHNOLOGIES_ICONS.REACT_ROUTER,
            TECHNOLOGIES_ICONS.REDUX,
          ],
          backend: [
            TECHNOLOGIES_ICONS.AWS_LAMBDA,
            TECHNOLOGIES_ICONS.FLASK,
            TECHNOLOGIES_ICONS.POSTGRESQL,
            TECHNOLOGIES_ICONS.REDIS,
          ],
          tools: [
            TECHNOLOGIES_ICONS.DOCKER,
            TECHNOLOGIES_ICONS.ESLINT,
            TECHNOLOGIES_ICONS.FIGMA,
            TECHNOLOGIES_ICONS.GIT,
            TECHNOLOGIES_ICONS.NOTION,
            TECHNOLOGIES_ICONS.POSTMAN,
            TECHNOLOGIES_ICONS.SENTRY,
          ],
        },
      },
      {
        duration: 'Jan, 2019 - Jun, 2019',
        role: 'Software Developer Intern',
        desc: [
          'Worked as a full-stack developer.',
          'Developed various landing pages, services, and APIs for the Cuemath website.',
        ],
        tech: {
          languages: [TECHNOLOGIES_ICONS.JAVASCRIPT, TECHNOLOGIES_ICONS.PYTHON],
          frontend: [
            TECHNOLOGIES_ICONS.CSS,
            TECHNOLOGIES_ICONS.HTML,
            TECHNOLOGIES_ICONS.NEXTJS,
            TECHNOLOGIES_ICONS.REDUX,
          ],
          backend: [
            TECHNOLOGIES_ICONS.DJANGO,
            TECHNOLOGIES_ICONS.DOCKER,
            TECHNOLOGIES_ICONS.POSTGRESQL,
            TECHNOLOGIES_ICONS.REDIS,
          ],
          tools: [TECHNOLOGIES_ICONS.GIT, TECHNOLOGIES_ICONS.POSTMAN],
        },
      },
    ],
  },
  {
    name: 'Coding Ninjas',
    logo: CnLogo,
    location: 'New Delhi, India',
    roles: [
      {
        duration: 'May, 2018 - Sep, 2018',
        role: 'Teaching Assistant',

        desc: [
          'Mentored a group of fifteen to twenty students in completing their course and other career-related queries.',
          'Worked over different Data structures and algorithm problems.',
        ],
        tech: {
          languages: [TECHNOLOGIES_ICONS.CPP],
        },
      },
    ],
  },
];

export default EXPERIENCE;
