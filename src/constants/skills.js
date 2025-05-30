const RAW_SKILLS = {
  Languages: ['C++', 'Java', 'JavaScript', 'Perl', 'Python', 'TypeScript'],
  Frontend: [
    'CSS',
    'D3.js',
    'HTML',
    'Material UI',
    'Next.js',
    'React',
    'Redux',
  ],
  Backend: [
    'Cron',
    'Django',
    'Dropwizard',
    'Express',
    'Flask',
    'Kafka',
    'Node.js',
  ],
  Storage: ['Firebase', 'Hadoop', 'MySQL', 'PostgreSQL', 'Redis', 'Snowflake'],
  Tools: [
    'AWS Lambda',
    'Docker',
    'Elasticsearch',
    'Figma',
    'GitHub',
    'GitLab',
    'Grafana',
    'Notion',
    'Postman',
    'Terraform',
  ],
};

const SKILLS = Object.fromEntries(
  Object.entries(RAW_SKILLS).map(([category, items]) => [category, [...items]])
);

export default SKILLS;
