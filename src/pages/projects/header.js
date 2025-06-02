import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import GradientTitle from '../../components/GradientTitle';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ textAlign: 'left', mb: 6, mt: 6 }}>
        <Typography variant="h5">THE ART OF</Typography>
        <GradientTitle
          variant="h2"
          sx={{ position: 'relative', zIndex: 1, fontWeight: 200 }}
        >
          ENGINEERING
        </GradientTitle>
        <Typography
          variant="h1"
          color="text.textHeading"
          sx={{ ml: { xs: 0, sm: 12 }, mt: { xs: 0, sm: -5 } }}
        >
          PROJECTS
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Header;
