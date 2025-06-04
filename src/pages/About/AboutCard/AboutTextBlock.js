import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradientTitle from '../../../components/GradientTitle';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const AboutTextBlock = () => (
  <Grid
    size={{ xs: 12, sm: 7 }}
    component={motion.div}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 700,
      mx: 'auto',
    }}
  >
    <motion.div variants={itemVariants}>
      <GradientTitle variant="h2" sx={{ mb: 1 }}>
        Amadhya Anand
      </GradientTitle>
    </motion.div>

    <motion.div variants={itemVariants}>
      <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
        Fueled by curiosity, shaped by code — building meaningful software
      </Typography>
    </motion.div>

    <motion.div variants={itemVariants}>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        A young, energetic, and enthusiastic engineer seeking a challenging and
        growth-oriented career as a Software Developer, with a focus on holistic
        personal development and contributing to organizational success. When
        I&apos;m not coding, you&apos;ll find me behind a drum set or exploring
        Amsterdam&apos;s canals.
      </Typography>
    </motion.div>

    <motion.div variants={itemVariants}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationOn fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="body2" color="text.secondary">
          Amsterdam, Netherlands
        </Typography>
      </Box>
    </motion.div>

    <motion.div variants={itemVariants}>
      <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Button
            variant="contained"
            color="primary"
            href="/assets/resume.pdf"
            download="Amadhya_Anand_Resume.pdf"
            aria-label="Download Amadhya Anand's resume"
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Button
            variant="outlined"
            component={Link}
            to="/contact"
            aria-label="Navigate to contact form to hire Amadhya Anand"
          >
            Hire Me
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  </Grid>
);

export default React.memo(AboutTextBlock);
