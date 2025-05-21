import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HobbiesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Box textAlign={{ xs: 'center', md: 'left' }} sx={{ mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          gap: 1,
        }}
      >
        <Typography variant="h4">Hobbies</Typography>
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 1, fontStyle: 'italic' }}
      >
        How I refuel my mind and body.
      </Typography>

      <Box
        sx={{
          width: 40,
          height: 4,
          backgroundColor: 'primary.main',
          borderRadius: 2,
        }}
      />
    </Box>
  </motion.div>
);

export default HobbiesHeader;
