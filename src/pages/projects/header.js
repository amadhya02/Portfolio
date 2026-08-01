import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const isMobile = useMediaQuery('(max-width:599.95px)');
  const disableParallax = useMediaQuery('(max-width:899.95px)');
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    [1, 0.94, 0.48]
  );
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 210]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.16, 0.34], [1, 1, 0]);

  return (
    <Box
      ref={heroRef}
      sx={{
        position: 'relative',
        height: { xs: 'max(100svh, 560px)', md: '200svh' },
      }}
    >
      <Box
        component="header"
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: 0,
          width: '100vw',
          ml: 'calc(50% - 50vw)',
          height: { xs: 'max(100svh, 560px)', md: '100svh' },
          minHeight: { xs: 560, sm: 620 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          isolation: 'isolate',
          pt: { xs: 10, sm: 11, md: 10 },
          pb: { xs: 9, sm: 10, md: 8 },
        }}
      >
        <Box
          component={motion.div}
          aria-hidden="true"
          style={{
            y: prefersReducedMotion || disableParallax ? 0 : gridY,
          }}
          sx={{
            position: 'absolute',
            zIndex: -3,
            inset: '-18% -12%',
            opacity: 0.28,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage:
              'linear-gradient(to bottom, transparent 2%, black 28%, black 76%, transparent 100%)',
          }}
        />

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            zIndex: -2,
            inset: 0,
            background:
              'radial-gradient(circle at 78% 38%, rgba(61,88,108,0.2), transparent 34%), radial-gradient(circle at 82% 38%, rgba(255,152,17,0.055), transparent 18%)',
          }}
        />

        <Box
          component={motion.div}
          aria-hidden="true"
          style={{
            y: prefersReducedMotion || disableParallax ? 0 : orbY,
            scale: prefersReducedMotion || disableParallax ? 1 : orbScale,
          }}
          sx={{
            position: 'absolute',
            zIndex: -1,
            top: { xs: 112, sm: 120, md: '17%' },
            right: { xs: -34, sm: 12, md: '5%' },
            width: { xs: 190, sm: 250, md: 330 },
            aspectRatio: '1',
            border: '1px solid rgba(255,255,255,0.085)',
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background:
              'radial-gradient(circle, rgba(255,152,17,0.075), rgba(68,99,121,0.035) 54%, transparent 73%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: { xs: 15, md: 24 },
              border: '1px solid rgba(255,152,17,0.16)',
              borderRadius: '50%',
            },
          }}
        >
          <Box
            component={motion.div}
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: isMobile ? 32 : 22,
              ease: 'linear',
              repeat: Infinity,
            }}
            sx={{
              position: 'absolute',
              inset: { xs: 8, md: 12 },
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -3,
                left: '50%',
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                boxShadow:
                  '0 0 0 4px rgba(255,152,17,0.08), 0 0 18px rgba(255,152,17,0.58)',
                transform: 'translateX(-50%)',
              }}
            />
          </Box>

          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: { xs: '4.25rem', sm: '5.25rem', md: '6.75rem' },
                fontWeight: 600,
                lineHeight: 0.8,
                letterSpacing: '-0.07em',
                color: 'rgba(255,255,255,0.075)',
              }}
            >
              06
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1.25,
                color: 'rgba(255,255,255,0.38)',
                fontSize: { xs: '0.6rem', sm: '0.68rem' },
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
            y: prefersReducedMotion || disableParallax ? 0 : contentY,
            opacity:
              prefersReducedMotion || disableParallax ? 1 : contentOpacity,
          }}
          sx={{
            width: {
              xs: 'calc(100% - 32px)',
              sm: 'calc(100% - 64px)',
              md: '100%',
            },
            maxWidth: { xs: 520, md: 720 },
            position: 'relative',
            zIndex: 1,
            ml: { xs: 2, sm: 4, md: 'max(48px, calc((100vw - 1104px) / 2))' },
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
          <Typography variant="h1" sx={{ maxWidth: 700 }}>
            Work with measurable impact.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 560, lineHeight: 1.65 }}
          >
            Product interfaces, internal platforms, and full-stack systems built
            around real constraints and useful outcomes.
          </Typography>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              pt: 2,
              maxWidth: 560,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: { xs: 1, sm: 3 },
              borderTop: '1px solid rgba(255,255,255,0.11)',
            }}
          >
            <Typography variant="caption" color="text.secondary">
              06 case studies · product to systems
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: { sm: 'right' } }}
            >
              Products · platforms · systems
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          aria-hidden="true"
          style={{ opacity: prefersReducedMotion ? 1 : cueOpacity }}
          animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            left: {
              xs: 16,
              sm: 32,
              md: 'max(48px, calc((100vw - 1104px) / 2))',
            },
            bottom: 24,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.75,
            color: 'text.secondary',
          }}
        >
          <KeyboardArrowDown sx={{ color: 'primary.main' }} />
          <Typography variant="caption">Scroll to explore</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Header);
