export const CAREER_SUMMARIES = [
  'Built an event-driven AWS pipeline that cut a 500K-row process from 10 hours to 26 minutes.',
  'Designed and shipped the company’s public web presence from the ground up.',
  'Worked across the live classroom experience, analytics, and real-time communication.',
  'Mentored students through data structures, algorithms, and interview preparation.',
];

export const TECH_CATEGORY_LABELS = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
};

export const CAREER_EDITORIAL = {
  'Booking.com': {
    context:
      'Partner-facing systems sit at the intersection of large data volumes, legacy platforms, and teams that need to move independently.',
    impacts: [
      {
        title: '10 hours → 26 minutes',
        body: 'Re-architected a 500K-row CSV workflow as an observable, event-driven AWS pipeline.',
      },
      {
        title: 'Onboarding in minutes',
        body: 'Created a YAML-driven platform and schema-rendered interface that teams could adopt independently.',
      },
      {
        title: 'Signals teams could act on',
        body: 'Connected delivery, quality, and adoption data across GitLab, Jira, SonarQube, and internal systems.',
      },
    ],
    project: {
      label: 'Explore the CSV processing case study',
      title: 'CSV Processing System',
    },
  },
  'Aerial Telecom Solutions': {
    context:
      'The company needed a credible digital home that could explain a technical service offering clearly and feel established from day one.',
    impacts: [
      {
        title: 'A digital presence from zero',
        body: 'Designed and built a responsive public website that clarified the company’s services, team, and credibility.',
      },
    ],
    project: {
      label: 'Explore the ATS website case study',
      title: 'ATS Website',
    },
  },
  Cuemath: {
    context:
      'A live classroom product has to make complex media, learning data, and real-time interaction feel effortless for teachers and students.',
    impacts: [
      {
        title: 'A stronger live classroom',
        body: 'Integrated calls, screen sharing, and stability improvements into the core student–teacher experience.',
      },
      {
        title: 'Learning made measurable',
        body: 'Built analytics instrumentation, dashboards, and progress reports for teachers, students, and parents.',
      },
      {
        title: 'From interface to infrastructure',
        body: 'Worked across React experiences, Python services, data pipelines, and classroom media processing.',
      },
    ],
  },
  'Coding Ninjas': {
    context:
      'Early-career developers often need more than correct answers—they need repeatable ways to reason through unfamiliar problems.',
    impacts: [
      {
        title: 'Mentorship at human scale',
        body: 'Guided 15–20 students through coursework with regular sessions and individual feedback.',
      },
      {
        title: 'Better problem-solving habits',
        body: 'Used data structures, algorithms, and mock interviews to strengthen technical confidence.',
      },
    ],
  },
};

export const getCompanyPeriod = (company) => {
  const years = company.roles.flatMap(
    ({ duration }) => duration.match(/\d{4}/g) || []
  );
  const start = Math.min(...years.map(Number));
  const end = company.roles.some(({ duration }) => duration.includes('Present'))
    ? 'Now'
    : Math.max(...years.map(Number));

  return `${start} — ${end}`;
};
