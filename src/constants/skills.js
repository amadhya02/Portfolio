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
    Backend: ['Django', 'Dropwizard', 'Express', 'Flask', 'Node.js'],
    Storage: ['Firebase', 'Hadoop', 'MySQL', 'PostgreSQL', 'Redis', 'Snowflake'],
    Tools: [
        'AWS Lambda',
        'Docker',
        'Figma',
        'GitHub',
        'GitLab',
        'Notion',
        'Postman',
    ],
};

const SKILLS = Object.fromEntries(
    Object.entries(RAW_SKILLS).map(([category, items]) => [category, [...items]])
);

export default SKILLS;