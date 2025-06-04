import { TECHNOLOGIES_ICONS } from './technologies';
import AtsLogo from '../assets/images/ats-logo.png';
import BookingLogo from '../assets/images/booking-logo.png';
import CnLogo from '../assets/images/cn-logo.png';
import CuemathLogo from '../assets/images/cuemath-logo.png';

export const COMPANIES_LOGO = {
  BOOKING: BookingLogo,
  CUEMATH: CuemathLogo,
  CN: CnLogo,
  ATS: AtsLogo,
};

const EXPERIENCE = [
  {
    name: 'Booking.com',
    logo: COMPANIES_LOGO.BOOKING,
    location: 'Amsterdam, Netherlands',
    roles: [
      {
        duration: 'Jan, 2024 - Present',
        role: 'Software Engineer II',
        desc: [
          'Improved code coverage and developer efficiency by developing a unit test generation using Cody, an AI-powered assistant',
          'Developed a script to consolidate developer activity metrics from GitLab, Jira, SonarQube, and internal wikis—tracking code changes, unit tests, documentation, and repository contributions to provide actionable insights',
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
          'Improved reliability and maintainability by migrating a partner-facing promotions endpoint from a legacy Perl codebase to a modern Java stack',
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
    logo: COMPANIES_LOGO.ATS,
    location: 'Remote',
    roles: [
      {
        duration: 'Mar, 2023 - Present',
        role: 'Freelance Frontend Developer',
        desc: [
          "Built a business website from scratch to showcase services, team profiles, and contact information, enhancing the company's online presence and credibility",
        ],
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
    logo: COMPANIES_LOGO.CUEMATH,
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
          'Enhanced teaching and learning experience by developing and maintaining core features for the online classroom platform used by teachers and students',
          'Improved classroom review by optimizing post-processing of audio/video call recordings and addressing performance issues during live classes',
          'Elevated the classroom experience for teachers by implementing UX-focused enhancements and stability improvements',
          'Enhanced demo sessions for teachers and students by building interactive features, including support for teacher-led presentations',
          'Enabled scalable event tracking and insights by developing SDKs for the in-house analytics system',
          'Provided actionable insights into student performance by building a monthly progress report, helping students, teachers, and parents monitor academic trends',
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
          'Improved user engagement and lead conversion by designing and developing responsive landing pages for Cuemath’s website',
          'Enabled promotional and event features by developing APIs for coupon code generation, upcoming events, and other functionalities',
          'Improved data management and reduced manual effort by building a Flask-based service to handle assessment-related operations',
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
    logo: COMPANIES_LOGO.CN,
    location: 'New Delhi, India',
    roles: [
      {
        duration: 'May, 2018 - Sep, 2018',
        role: 'Teaching Assistant',
        desc: [
          'Enabled 15–20 students to successfully complete their coursework, as reflected in their improved academic outcomes, by providing regular mentorship sessions, personalized guidance, and resources on academic and professional development.',
          'Enhanced problem-solving skills and algorithmic thinking, demonstrated by improved coding performance and faster problem-solving in mock interviews, through consistent practice on diverse data structure and algorithm challenges.',
        ],
        tech: {
          languages: [TECHNOLOGIES_ICONS.CPP],
        },
      },
    ],
  },
];

export default EXPERIENCE;
