import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

import { fadeLeft } from '../../components/MotionVariants';

const MotionBox = motion.create(Box);

const HeroText = () => {
  return (
    <MotionBox
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      {/* Accent Line */}
      <Box
        sx={{
          width: 40,
          height: 4,
          backgroundColor: 'primary.main',
          borderRadius: 2,
          mb: 1.5,
        }}
      />

      <Typography variant="h5" color="text.secondary" gutterBottom>
        &rsaquo; Hello, I’m
      </Typography>

      <Typography
        variant="h1"
        color="primary"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Amadhya <br /> Anand
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontStyle: 'italic' }}
      >
        Bridging intuitive design with performant code.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500 }}
          component="div"
          aria-label="Typed developer roles"
        >
          <ReactTyped
            strings={[
              '🎯 Engineer by day',
              '🥁 Drummer by night',
              '🧠 Building apps and beats with equal passion',
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={2000}
            loop
            showCursor
            cursorChar="|"
          />
        </Typography>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/projects"
          aria-label="View work"
        >
          View Work
        </Button>

        <Button
          variant="outlined"
          href="/assets/resume.pdf"
          download="Amadhya_Anand_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
        >
          Download Resume
        </Button>
      </Box>
    </MotionBox>
  );
};

export default React.memo(HeroText);
