import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../components/MotionVariants';

const HeroText = () => {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      <Typography variant="h5" color="text.secondary" gutterBottom>
        &rsaquo; Hello, I’m
      </Typography>

      <Typography variant="h1" color="primary" gutterBottom>
        Amadhya <br /> Anand
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          🎯 Engineer by day
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          🥁 Drummer by night
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Building apps and beats with equal passion.
        </Typography>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/work"
          aria-label="View work"
        >
          View Work
        </Button>

        <Button
          variant="outlined"
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
        >
          Download Resume
        </Button>
      </Box>
    </motion.div>
  );
};

export default HeroText;
