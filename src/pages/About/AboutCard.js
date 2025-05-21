import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  KeyboardArrowDown,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import MyselfImg from '../../assets/images/myself.jpg';
import ProfileOverlayImg from '../../assets/images/profile-overlay.png';
import theme from '../../theme';
import GradientTitle from '../../components/GradientTitle';
import { Link } from 'react-router-dom';

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
    id: 'linkedin',
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

      <Grid container spacing={6} alignItems="center">
        {/* LEFT SECTION */}
        <Grid item xs={12} sm={5} md={4}>
          <Box sx={{ position: 'relative' }}>
            {/* Main Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={MyselfImg}
              alt="Amadhya Anand"
              style={{
                width: '30vw',
                maxWidth: '280px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                zIndex: 2,
              }}
            />

            {/* Social Icons */}
            <Box
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              sx={{
                position: 'absolute',
                top: 44,
                left: -60,
                zIndex: 3,
              }}
            >
              {SOCIAL.map(({ id, title, icon, link }) => (
                <motion.div
                  key={id}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '12px',
                      width: 45,
                      height: 45,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
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
                </motion.div>
              ))}
            </Box>

            {/* Overlay Image */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={ProfileOverlayImg}
              alt="Amadhya working"
              style={{
                translate: '-30% 25%',
                width: '18vw',
                maxWidth: '240px',
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 3,
              }}
            />

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: -40,
                left: '60%',
                translate: '-50%',
                transform: 'translateX(-50%)',
                backgroundColor: theme.palette.background.paper,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                padding: '8px 16px',
                borderRadius: '8px',
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
            </motion.div>
          </Box>
        </Grid>

        {/* RIGHT SECTION */}
        <Grid item xs={12} sm={7} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              A young, energetic, and enthusiastic engineer seeking a
              challenging and growth-oriented career as a Software Developer,
              with a focus on holistic personal development and contributing to
              organizational success.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn
                fontSize="small"
                sx={{ mr: 1, color: 'primary.main' }}
              />
              <Typography variant="body2" color="text.secondary">
                Amsterdam, Netherlands
              </Typography>
            </Box>

            <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="/assets/resume.pdf"
                  download="Amadhya_Anand_Resume.pdf"
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="outlined" component={Link} to="/contact">
                  Hire Me
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Bottom Arrow */}
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
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </motion.div>
    </Grid>
  );
};

export default AboutHeroSection;
