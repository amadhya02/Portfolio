import React from 'react';
// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

// MUI Icon
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import AboutTextBlock from './AboutTextBlock';
import ProfileImageBlock from './ProfileImageBlock';
import theme from '../../../theme';
import SectionContainer from '../../../components/SectionContainer';

const AboutSection = () => {
  return (
    <SectionContainer
      id="about"
      sx={{
        position: 'relative',
        minHeight: '96vh',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      {/* Section Title */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h1"
          color="text.textHeading"
          sx={{ mb: 6 }}
          align="right"
        >
          ABOUT ME
        </Typography>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={{ xs: 8, md: 6 }} alignItems="center">
        <ProfileImageBlock />
        <AboutTextBlock />
      </Grid>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        sx={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <ScrollLink
          to="education"
          smooth={true}
          duration={600}
          offset={-64}
          aria-label="Scroll to education section"
        >
          <IconButton
            color="primary"
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
        </ScrollLink>
      </Box>
    </SectionContainer>
  );
};

export default React.memo(AboutSection);
