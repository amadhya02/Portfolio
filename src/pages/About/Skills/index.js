import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import Header from './Header';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import ItermHeader from './ItermHeader';

const rawSkills = {
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

const skills = Object.fromEntries(
  Object.entries(rawSkills).map(([category, items]) => [category, [...items]])
);

export default function SkillsTerminalTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [typingDone, setTypingDone] = useState(false);

  const renderTable = (categories) => {
    const maxRows = Math.max(...categories.map((cat) => skills[cat].length));
    const columnWidth = 24;
    const divider =
      '+' + categories.map(() => '-'.repeat(columnWidth)).join('+') + '+';
    const headerRow =
      '|' +
      categories.map((cat) => ' ' + cat.padEnd(columnWidth - 1)).join('|') +
      '|';

    const rows = Array.from({ length: maxRows }, (_, rowIndex) => {
      return (
        '|' +
        categories
          .map((cat) => {
            const item = skills[cat][rowIndex] || '';
            return ' ' + item.padEnd(columnWidth - 1);
          })
          .join('|') +
        '|'
      );
    });

    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ display: 'flex', flex: 1 }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.custom.border}`,
            borderRadius: '12px',
            boxShadow: theme.custom.shadows.softGlow,
            fontFamily: 'Source Code Pro, monospace',
            fontSize: '0.9rem',
            color: theme.palette.primary.contrastText,
            lineHeight: 1.6,
            mb: 4,
            p: 0,
            overflowX: 'auto',
            maxWidth: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <ItermHeader />
          <Box component="pre" sx={{ px: 2, pt: 2, mb: 0 }}>
            <Box
              component="span"
              sx={{ color: '#00ff00', display: 'inline-block' }}
            >
              ${' '}
              <ReactTyped
                strings={[
                  `list-skills${categories.length === 1 ? ' --' + categories[0] : ' --all'}`,
                ]}
                typeSpeed={60}
                showCursor={true}
                onComplete={() => setTypingDone(true)}
              />
            </Box>
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: typingDone ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              visibility: typingDone ? 'visible' : 'hidden',
              flex: 1,
              display: 'flex',
            }}
          >
            <Box component="pre" sx={{ px: 2, pt: 0, pb: 2, flex: 1 }}>
              {[divider, headerRow, divider, ...rows, divider]
                .map((line) => line + '\n')
                .join('')}
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    );
  };

  return (
    <Box sx={{ px: { xs: 3, sm: 6 }, py: 6 }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {isMobile ? (
          <Grid
            container
            spacing={4}
            alignItems="stretch"
            justifyContent="center"
          >
            {Object.keys(skills).map((cat, i) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={cat}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                {renderTable([cat])}
              </Grid>
            ))}
          </Grid>
        ) : (
          renderTable(Object.keys(skills))
        )}
      </Box>
    </Box>
  );
}
