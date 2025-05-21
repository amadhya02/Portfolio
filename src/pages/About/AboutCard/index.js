import React from 'react';
import { Grid, Typography, IconButton, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AboutTextBlock from './AboutTextBlock';
import ProfileImageBlock from './ProfileImageBlock';
import theme from '../../../theme';

const Index = () => {
  return (
    <Grid
      component="section"
      id="about"
      sx={{
        position: 'relative',
        minHeight: '96vh',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        px: { xs: 3, sm: 6 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h1"
          color="text.textHeading"
          sx={{ mb: 4 }}
          align="right"
        >
          ABOUT ME
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 8, md: 6 }} alignItems="center">
        <ProfileImageBlock />
        <AboutTextBlock />
      </Grid>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { sm: 'block', xs: 'hidden' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' }, // ✅ Hide on mobile
          }}
        >
          <IconButton
            color="primary"
            href="#education"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </Box>
      </motion.div>
    </Grid>
  );
};

export default Index;
