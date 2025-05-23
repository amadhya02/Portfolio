import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Subtitle */}
      <Typography variant="h5" color="text.secondary" align="right">
        What I bring to the table
      </Typography>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" color="primary" align="right">
          SKILLS
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Header;
