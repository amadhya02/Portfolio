import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import ItermHeader from './ItermHeader';
import SKILLS from "../../../constants/skills";

export default function Table({ categories }) {
  const theme = useTheme();
  const [typingDone, setTypingDone] = useState(false);
  const maxRows = Math.max(...categories.map((cat) => SKILLS[cat].length));
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
          const item = SKILLS[cat][rowIndex] || '';
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
      key={categories.toString()}
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
              startWhenVisible={true}
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
}
