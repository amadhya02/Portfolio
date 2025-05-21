import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradientTitle from '../../../components/GradientTitle';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutTextBlock = () => (
  <Grid
    size={{ xs: 12, sm: 7 }}
    component={motion.div}
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {/* Name */}
    <GradientTitle variant="h2" sx={{ mb: 1 }}>
      Amadhya Anand
    </GradientTitle>

    {/* Tagline */}
    <Typography variant="body1" fontWeight={700} sx={{ mb: 2 }}>
      Driven by curiosity, refined by code
    </Typography>

    {/* Bio */}
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ mb: 2, maxWidth: '640px' }}
    >
      A young, energetic, and enthusiastic engineer seeking a challenging and
      growth-oriented career as a Software Developer, with a focus on holistic
      personal development and contributing to organizational success.
    </Typography>

    {/* Location */}
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <LocationOn fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
      <Typography variant="body2" color="text.secondary">
        Amsterdam, Netherlands
      </Typography>
    </Box>

    {/* CTA Buttons */}
    <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="contained"
          color="primary"
          href="/assets/resume.pdf"
          download="Amadhya_Anand_Resume.pdf"
          aria-label="Download Resume"
        >
          Download Resume
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="outlined"
          component={Link}
          to="/contact"
          aria-label="Hire Me"
        >
          Hire Me
        </Button>
      </motion.div>
    </Box>
  </Grid>
);

export default AboutTextBlock;
