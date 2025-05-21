import React from 'react';
import {Box, Typography, Grid, IconButton, Tooltip, Button} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import MyselfImg from '../../assets/images/myself.jpg';
import ProfileOverlayImg from '../../assets/images/profile-overlay.png';
import theme from '../../theme';
import GradientTitle from '../../components/GradientTitle';
import {Link} from "react-router-dom";

const SOCIAL = [
  {
    id: 'email',
    title: 'Email',
    icon: <Email />,
    link: 'mailto:amadhya.anand@gmail.com',
  },
  {
    id: 'github',
    title: 'Github',
    icon: <GitHub />,
    link: 'https://github.com/amadhya02',
  },
  {
    id: 'linkendin',
    title: 'LinkedIn',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
  },
];

const AboutHeroSection = () => {
    const getExpYears = () => {
        const date1 = new Date(2020, 7, 13);
        const date2 = new Date();
        const year1 = date1.getFullYear();
        const year2 = date2.getFullYear();
        const month1 = date1.getMonth();
        const month2 = date2.getMonth();
        const internship = 6;

        return year2 - year1 + Math.floor((month2 - month1 + internship + 1) / 12);
    };

  return (
    <Grid
      item
      component="section"
      id="about"
      sx={{
        position: 'relative',
        minHeight: '92vh',
        px: { xs: 3, sm: 6 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <Typography
        variant="h1"
        color="text.textHeading"
        sx={{ mb: 4 }}
        align="right"
      >
        ABOUT ME
      </Typography>
      <Grid container spacing={6} alignItems="center">
        {/* Left Column: Image */}
        <Grid item size={{ xs: 12, sm: 5, md: 4 }}>
          <Box sx={{ position: 'relative' }}>
            {/* Main Image */}
            <Box
              component="img"
              src={MyselfImg}
              alt="Amadhya Anand"
              sx={{
                width: '30vw',
                maxWidth: '280px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                position: 'relative',
                zIndex: 2,
              }}
            />

            <Grid
              item
              sx={{
                position: 'absolute',
                top: 44,
                left: { xs: 'calc(0% - 60px)' },
                zIndex: 3,
              }}
            >
              {SOCIAL.map(({ id, title, icon, link }) => (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '12px',
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                  key={id}
                >
                  <Tooltip title={title}>
                    <IconButton
                      href={link}
                      target="_blank"
                      color="inherit"
                      aria-label={id}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                </Box>
              ))}
            </Grid>

            {/* Overlay Image */}
            <Box
              component="img"
              src={ProfileOverlayImg}
              alt="Amadhya working"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                transform: 'translate(-30%, 25%)',
                width: '18vw',
                maxWidth: '240px',
                borderRadius: 2,
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 3,
              }}
            />

            {/* Experience Tag */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: '60%',
                transform: 'translateX(-50%)',
                backgroundColor: 'background.paper',
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                px: 2,
                py: 1,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 4,
              }}
            >
              <Typography variant="h5" fontWeight={700}>
                  {getExpYears()}+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Successful Years
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Text */}
        <Grid item size={{ xs: 12, sm: 7, md: 8 }}>
          <GradientTitle variant="h2" sx={{ mb: 1 }}>
            Amadhya Anand
          </GradientTitle>

          <Typography
            variant="body1"
            color="text.primary"
            fontWeight={700}
            sx={{ mb: 2 }}
          >
            Driven by curiosity, refined by code
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, maxWidth: '640px' }}
          >
            A young, energetic, and enthusiastic engineer seeking a challenging
            and growth-oriented career as a Software Developer, with a focus on
            holistic personal development and contributing to organizational
            success.
          </Typography>

            <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    color="primary"
                    href="/assets/resume.pdf"
                    download="Amadhya_Anand_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download resume"
                >
                    Download Resume
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/contact"
                    aria-label="Hire Me"
                >
                    Hire Me
                </Button>
            </Box>
        </Grid>
      </Grid>

      {/* Bottom Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
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
          aria-label="Scroll to education section"
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </motion.div>
    </Grid>
  );
};

export default AboutHeroSection;
