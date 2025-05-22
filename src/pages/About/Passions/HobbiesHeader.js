import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HobbiesHeading = () => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Subtitle */}
      <Typography variant="h5" color="text.secondary">
        Beyond the Code
      </Typography>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" color="primary">
          SIDE QUESTS
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HobbiesHeading;
