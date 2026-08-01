import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, useTransform } from 'framer-motion';
import React from 'react';
import { Meta, Title } from 'react-head';

import EducationSection from './EducationSection';
import HobbiesSection from './HobbiesSection';
import Label from './Label';
import WorkTimeline from './WorkTimeline';
import portrait from '../../assets/images/myself.jpg';
import CanonicalLink from '../../components/CanonicalLink';
import { SEO_CONFIG } from '../../constants/seo';
import useParallaxScroll from '../../hooks/useParallaxScroll';

const WorkIndex = () => (
  <Box
    component="section"
    sx={{
      position: 'relative',
      zIndex: 2,
      mt: { xs: 0, md: '-100svh' },
      pt: { xs: 9, md: 14 },
      pb: 0,
      overflow: 'hidden',
      bgcolor: '#0B1016',
      borderTop: { xs: 0, md: '1px solid rgba(255,255,255,0.1)' },
      boxShadow: '0 -28px 70px rgba(0,0,0,0.34)',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.32,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 58%)',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '8%',
        right: '-18rem',
        width: '42rem',
        height: '42rem',
        borderRadius: '50%',
        pointerEvents: 'none',
        background:
          'radial-gradient(circle, rgba(111,214,179,0.035), transparent 66%)',
      },
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <WorkTimeline />
      <EducationSection />
      <HobbiesSection />
    </Container>
  </Box>
);

const AboutSection = () => {
  const { ref: heroRef, scrollYProgress, prefersReducedMotion, disableParallax } =
    useParallaxScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 62]);
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.96, 0.62]
  );
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 230]);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: '#0B1016',
        '& + footer': {
          borderTop: 0,
        },
      }}
    >
      <Title>About | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Learn about Amadhya Anand's journey, experience, and philosophy as a full-stack engineer focused on performance, reliability, and thoughtful product experiences."
      />
      <Meta
        name="keywords"
        content="Amadhya Anand, about, full-stack developer, experience, skills, education"
      />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="About | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="Discover Amadhya Anand's development background, values, and expertise in building modern products."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/about`} />
      <Meta
        property="og:image"
        content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`}
      />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/about`} />

      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          height: { xs: 'max(100svh, 620px)', md: '200svh' },
          bgcolor: '#090E13',
        }}
      >
        <Box
          component="section"
          sx={{
            position: { xs: 'relative', md: 'sticky' },
            top: 0,
            height: { xs: 'max(100svh, 620px)', md: '100svh' },
            overflow: 'hidden',
            isolation: 'isolate',
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: -2,
              background:
                'radial-gradient(circle at 76% 32%, rgba(255,152,17,0.11), transparent 28rem), linear-gradient(135deg, #0E151C 0%, #080C11 72%)',
            }}
          />
          <Box
            component={motion.div}
            aria-hidden="true"
            style={{
              y: prefersReducedMotion || disableParallax ? 0 : gridY,
            }}
            sx={{
              position: 'absolute',
              inset: '-12% 0',
              zIndex: -1,
              opacity: 0.18,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage:
                'linear-gradient(to bottom, transparent, black 35%, transparent 94%)',
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: -1,
              width: '1px',
              height: { xs: '42%', md: '58%' },
              right: { xs: '43%', md: '31%' },
              bottom: 0,
              bgcolor: 'rgba(255,152,17,0.22)',
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              minHeight: { xs: 'max(100svh, 620px)', md: '100svh' },
            }}
          >
            <Box
              component={motion.div}
              style={{
                y: prefersReducedMotion || disableParallax ? 0 : copyY,
                opacity:
                  prefersReducedMotion || disableParallax ? 1 : copyOpacity,
              }}
              sx={{
                position: 'absolute',
                zIndex: 3,
                top: { xs: '16%', sm: '18%', md: '23%' },
                left: { xs: 16, sm: 24 },
                right: { xs: 16, sm: 24 },
                maxWidth: 830,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Label>About / Amadhya Anand</Label>
                <Box
                  sx={{
                    width: 54,
                    height: '1px',
                    bgcolor: 'rgba(255,255,255,0.28)',
                  }}
                />
              </Box>
              <Typography
                variant="h1"
                sx={{
                  maxWidth: 800,
                  fontSize: {
                    xs: 'clamp(2.1rem, 9.5vw, 2.65rem)',
                    sm: '3.8rem',
                    md: '5.7rem',
                  },
                  lineHeight: { xs: 1.02, md: 0.93 },
                  letterSpacing: '-0.055em',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    whiteSpace: { xs: 'nowrap', md: 'normal' },
                  }}
                >
                  I work in systems.
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    whiteSpace: { xs: 'nowrap', md: 'normal' },
                  }}
                >
                  I think in{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    rhythm.
                  </Box>
                </Box>
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mt: 3,
                  maxWidth: { xs: 525, sm: 440, md: 590 },
                  fontSize: { xs: '0.92rem', md: '1.08rem' },
                  lineHeight: { xs: 1.62, md: 1.75 },
                }}
              >
                Full-stack engineer at Booking.com, drawn to the messy space
                between product decisions and production systems.
              </Typography>
            </Box>

            <Box
              component={motion.figure}
              style={{
                y: prefersReducedMotion || disableParallax ? 0 : imageY,
              }}
              sx={{
                position: 'absolute',
                zIndex: 1,
                m: 0,
                right: { xs: 16, sm: 24, md: 16 },
                top: { xs: '60%', sm: 'auto' },
                bottom: { xs: 'auto', sm: 42, md: 0 },
                width: { xs: 152, sm: 220, md: 360 },
                height: { xs: 210, sm: 300, md: '66%' },
                maxHeight: 560,
                opacity: { xs: 0.82, sm: 0.82, md: 1 },
                '@media (max-width:599.95px) and (max-height:700px)': {
                  top: '61%',
                  width: 132,
                  height: 182,
                  opacity: 0.68,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '-12px 12px 12px -12px',
                    display: { xs: 'none', sm: 'block' },
                    borderTop: '1px solid rgba(255,152,17,0.55)',
                    borderLeft: '1px solid rgba(255,152,17,0.55)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={portrait}
                  alt="Amadhya Anand playing drums"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: { xs: '50% 32%', md: '50% 30%' },
                    filter: 'saturate(0.62) contrast(1.1) brightness(0.78)',
                    maskImage:
                      'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
                  }}
                />
                <Typography
                  component="figcaption"
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    right: { xs: 0, md: -10 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    px: 0.8,
                    py: 1.25,
                    bgcolor: 'primary.main',
                    color: '#080C11',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    writingMode: 'vertical-rl',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.28)',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Off-screen / on rhythm
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                zIndex: 3,
                left: { xs: 16, sm: 24 },
                bottom: { xs: 32, sm: 58, md: 54 },
                width: { xs: 135, sm: 220, md: 330 },
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.16)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Software Engineer II · Amsterdam
              </Typography>
              <Button
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                sx={{
                  position: 'relative',
                  minWidth: 0,
                  p: 0,
                  color: 'text.primary',
                  transition: 'color 180ms ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -3,
                    height: '1px',
                    bgcolor: 'primary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 180ms ease',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                  '& .resume-arrow': {
                    display: 'inline-block',
                    ml: 0.5,
                    transition: 'transform 180ms ease',
                  },
                  '&:hover .resume-arrow': {
                    transform: 'translate(3px, -3px)',
                  },
                }}
              >
                View résumé
                <Box component="span" className="resume-arrow">
                  ↗
                </Box>
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      <WorkIndex />
    </Box>
  );
};

export default React.memo(AboutSection);
