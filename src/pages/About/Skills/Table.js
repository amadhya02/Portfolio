import React, { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SKILLS from '../../../constants/skills';
import Terminal from '../../../components/terminal';

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SkillsTable({ categories }) {
  const [typingDone, setTypingDone] = useState(false);

  const { divider, headerRow, rows } = useMemo(() => {
    const maxRows = Math.max(
      ...categories.map((cat) => SKILLS[cat]?.length || 0)
    );
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
            const item = SKILLS[cat]?.[rowIndex] || '';
            return ' ' + item.padEnd(columnWidth - 1);
          })
          .join('|') +
        '|'
      );
    });

    return { divider, headerRow, rows };
  }, [categories]);

  return (
    <Terminal
      command={`list-skills${categories.length === 1 ? ' --' + categories[0] : ' --all'}`}
      uniqueKey={categories.join(',')}
      setTypingDone={setTypingDone}
    >
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate={typingDone ? 'visible' : 'hidden'}
        style={{ flex: 1, display: 'flex' }}
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
