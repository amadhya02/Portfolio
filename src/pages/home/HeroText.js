import ArrowForward from '@mui/icons-material/ArrowForward';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const MotionBox = motion.create(Box);

const HeroText = () => (
  <MotionBox
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, ease: 'easeOut' }}
    sx={{ position: 'relative', zIndex: 2, maxWidth: 690 }}
  >
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.75,
        mb: 2.5,
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.12)',
        borderRadius: 999,
        bgcolor: 'rgba(10,15,20,0.45)',
      }}
    >
      <Box
        sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#5CD69B' }}
      />
      <Typography variant="body2" color="text.secondary">
        Open to thoughtful collaborations
      </Typography>
    </Box>

    <Typography
      variant="body2"
      sx={{
        color: 'primary.main',
        fontWeight: 700,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        mb: 1.5,
      }}
    >
      Full-stack engineer
    </Typography>

    <Typography variant="h1" sx={{ maxWidth: 680 }}>
      Engineering products people{' '}
      <Box component="span" sx={{ color: 'primary.main' }}>
        trust.
      </Box>
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{
        mt: 2.5,
        maxWidth: 580,
        fontSize: { xs: '0.95rem', sm: '1.05rem' },
      }}
    >
      I&apos;m Amadhya Anand, an Amsterdam-based full-stack engineer who turns
      ambiguous product problems into fast, dependable systems and thoughtful
      user experiences.
    </Typography>

    <Box
      sx={{
        mt: 3.25,
        display: 'flex',
        gap: 1.25,
        flexWrap: 'wrap',
        '@media (max-width:420px)': {
          flexDirection: 'column',
          '& .MuiButton-root': { width: '100%' },
        },
      }}
    >
      <Button
        variant="contained"
        component={Link}
        to="/projects"
        endIcon={<ArrowForward />}
      >
        Explore selected work
      </Button>
      <Button
        variant="outlined"
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View résumé
      </Button>
    </Box>

    <Box
      sx={{
        mt: 3.25,
        pt: 2.5,
        borderTop: '1px solid',
        borderColor: 'rgba(255,255,255,0.09)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
        color: 'text.secondary',
      }}
    >
      <LocationOnOutlined
        sx={{ mt: 0.25, flexShrink: 0, fontSize: 18, color: 'primary.main' }}
      />
      <Typography variant="body2" sx={{ overflowWrap: 'anywhere' }}>
        Software Engineer II at Booking.com · Amsterdam
      </Typography>
    </Box>
  </MotionBox>
);

export default React.memo(HeroText);
