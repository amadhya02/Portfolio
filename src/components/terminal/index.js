import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import ItermHeader from './ItermHeader';

import { COLORS } from '../../constants/colors';

export default function Terminal({
  command,
  children,
  uniqueKey,
  setTypingDone,
}) {
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
            sx={{ color: COLORS.LIME, display: 'inline-block' }}
          >
            ${' '}
            <ReactTyped
              strings={[command]}
              typeSpeed={60}
              showCursor={true}
              startWhenVisible={true}
              onComplete={() => setTypingDone(true)}
            />
          </Box>
        </Box>
        {children}
      </Box>
    </motion.div>
  );
}
