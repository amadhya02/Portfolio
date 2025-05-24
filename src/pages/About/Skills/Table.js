import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SKILLS from '../../../constants/skills';
import Terminal from '../../../components/terminal';

export default function Table({ categories }) {
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
    <Terminal
      command={`list-skills${categories.length === 1 ? ' --' + categories[0] : ' --all'}`}
      uniqueKey={categories.toString()}
      setTypingDone={setTypingDone}
    >
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
    </Terminal>
  );
}
