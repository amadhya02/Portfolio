import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';

const Header = () => {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 66]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.96, 0.64]
  );
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const cueOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.34],
    [1, 1, 0]
  );

  return (
    <Box
      ref={heroRef}
      component="header"
      sx={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        isolation: 'isolate',
        pt: { xs: 9, sm: 10 },
        pb: { xs: 12, sm: 13, md: 14 },
      }}
    >
      <Box
        component={motion.div}
        aria-hidden="true"
        style={{ y: prefersReducedMotion ? 0 : gridY }}
        sx={{
          position: 'absolute',
          zIndex: -3,
          inset: '-15% -12%',
          opacity: 0.34,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'linear-gradient(to bottom, transparent 2%, black 32%, black 74%, transparent 100%)',
        }}
      />

      <Box
        component={motion.div}
        aria-hidden="true"
        style={{ y: prefersReducedMotion ? 0 : orbY }}
        sx={{
          position: 'absolute',
          zIndex: -1,
          top: { xs: 106, sm: 116, md: '13%' },
          right: { xs: 0, sm: 16, md: '4%' },
          width: { xs: 200, sm: 270, md: 380 },
          aspectRatio: '1',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background:
            'radial-gradient(circle, rgba(255,152,17,0.08), rgba(68,99,121,0.04) 52%, transparent 72%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: { xs: 18, md: 28 },
            border: '1px solid rgba(255,152,17,0.18)',
            borderRadius: '50%',
          },
        }}
      >
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: '4.5rem', sm: '5.5rem', md: '7.5rem' },
              fontWeight: 600,
              lineHeight: 0.8,
              letterSpacing: '-0.07em',
              color: 'rgba(255,255,255,0.07)',
            }}
          >
            06
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 1.25,
              color: 'rgba(255,255,255,0.34)',
              fontSize: { xs: '0.62rem', sm: '0.7rem' },
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Selected projects
          </Typography>
        </Box>
      </Box>

      <Box
        component={motion.div}
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          opacity: prefersReducedMotion ? 1 : contentOpacity,
        }}
        sx={{
          width: '100%',
          maxWidth: { xs: 540, md: 760 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            mb: 1.25,
          }}
        >
          Selected work · 2023—2026
        </Typography>
        <Typography variant="h1" sx={{ maxWidth: 790 }}>
          Work with measurable impact.
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mt: 2, maxWidth: 590, lineHeight: 1.65 }}
        >
          Product interfaces, internal platforms, and full-stack systems built
          around real constraints and useful outcomes.
        </Typography>
      </Box>

      <Box
        component={motion.div}
        aria-hidden="true"
        style={{ opacity: prefersReducedMotion ? 1 : cueOpacity }}
        animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 26,
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          color: 'text.secondary',
        }}
      >
        <KeyboardArrowDown sx={{ color: 'primary.main' }} />
        <Typography variant="caption">Scroll to explore</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Header);
