import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import ItermHeader from './ItermHeader';

import { COLORS } from '../../constants/colors';

const Terminal = ({ command, children, uniqueKey, setTypingDone }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ display: 'flex', flex: 1 }}
      key={uniqueKey}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.custom.border}`,
          borderRadius: 2,
          boxShadow: theme.custom.shadows.softGlow,
          fontFamily: '"Source Code Pro", monospace',
          fontSize: '0.875rem',
          color: theme.palette.primary.contrastText,
          lineHeight: 1.6,
          overflowX: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ItermHeader />

        <Box component="pre" sx={{ px: 2, pt: 2 }}>
          <Box component="span" sx={{ color: COLORS.LIME }}>
            $&nbsp;
            <ReactTyped
              strings={[command]}
              typeSpeed={50}
              backSpeed={0}
              showCursor
              smartBackspace={false}
              startWhenVisible
              onComplete={() => setTypingDone(true)}
            />
          </Box>
        </Box>

        {children}
      </Box>
    </motion.div>
  );
};

export default Terminal;
