import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, useTransform } from 'framer-motion';
import React from 'react';
import { Title, Meta } from 'react-head';

import FeaturedProjects from './FeaturedProjects';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import BgImg from '../../assets/images/background.png';
import CanonicalLink from '../../components/CanonicalLink';
import StructuredData from '../../components/StructuredData';
import {
  SEO_CONFIG,
  SOCIAL_PROFILES,
  SOCIAL_PROFILES_ARRAY,
} from '../../constants/seo';
import useParallaxScroll from '../../hooks/useParallaxScroll';

const Index = () => {
  const { ref: heroRef, scrollYProgress, prefersReducedMotion, disableParallax } =
    useParallaxScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 62]);
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.96, 0.62]
  );
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 230]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.16, 0.34], [1, 1, 0]);

  return (
    <>
      <Title>Amadhya Anand | Full-Stack Developer Portfolio</Title>
      <Meta
        name="description"
        content="Welcome to the portfolio of Amadhya Anand — a full-stack developer crafting scalable, modern web applications with clean design and great UX."
      />
      <Meta
        name="keywords"
        content="Amadhya Anand, full-stack developer, React, Node.js, JavaScript, web development, portfolio"
      />
      <Meta name="robots" content="index, follow" />
      <Meta
        property="og:title"
        content="Amadhya Anand | Full-Stack Developer Portfolio"
      />
      <Meta
        property="og:description"
        content="Explore full-stack projects, technical skills, and digital craftsmanship by Amadhya Anand."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/`} />
      <Meta
        property="og:image"
        content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`}
      />
      <Meta property="og:image:width" content={SEO_CONFIG.ogImageWidth} />
      <Meta property="og:image:height" content={SEO_CONFIG.ogImageHeight} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta
        name="twitter:title"
        content="Amadhya Anand | Full-Stack Developer Portfolio"
      />
      <Meta
        name="twitter:description"
        content="Explore full-stack projects, technical skills, and digital craftsmanship by Amadhya Anand."
      />
      <Meta
        name="twitter:image"
        content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`}
      />
      <Meta name="twitter:url" content={`${SEO_CONFIG.siteUrl}/`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/`} />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Amadhya Anand',
          alternateName: 'AA',
          jobTitle: 'Full-Stack Developer',
          email: SOCIAL_PROFILES.email,
          url: SEO_CONFIG.siteUrl,
          image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`,
          sameAs: SOCIAL_PROFILES_ARRAY,
          knowsAbout: [
            'Web Development',
            'Full-Stack Development',
            'React',
            'Node.js',
            'JavaScript',
            'Frontend Development',
            'Backend Development',
          ],
        }}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SEO_CONFIG.siteName,
          url: SEO_CONFIG.siteUrl,
          description: SEO_CONFIG.defaultDescription,
          author: {
            '@type': 'Person',
            name: SEO_CONFIG.author,
          },
        }}
      />

      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          height: { xs: 'max(100svh, 620px)', md: '200svh' },
          bgcolor: '#070B0F',
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
            component={motion.div}
            aria-hidden="true"
            style={{
              y: prefersReducedMotion || disableParallax ? 0 : backgroundY,
            }}
            sx={{
              position: 'absolute',
              zIndex: -2,
              inset: '-14% 0',
              backgroundImage: `url(${BgImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.72,
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: -1,
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(5,10,15,0.7) 0%, rgba(5,10,15,0.24) 58%, rgba(5,10,15,0.5) 100%)',
              pointerEvents: 'none',
            }}
          />

          <Container
            maxWidth="lg"
            sx={{ minHeight: { xs: 'max(100svh, 620px)', md: '100svh' } }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: '1fr',
                alignItems: 'center',
                minHeight: { xs: 'max(100svh, 620px)', md: '100svh' },
                pt: { xs: 12, md: 10 },
                pb: { xs: 10, md: 7 },
              }}
            >
              <Box
                component={motion.div}
                style={{
                  y: prefersReducedMotion || disableParallax ? 0 : copyY,
                  opacity:
                    prefersReducedMotion || disableParallax ? 1 : copyOpacity,
                }}
              >
                <HeroText />
              </Box>
            </Box>
          </Container>

          <HeroImage
            parallaxY={portraitY}
            reduceMotion={prefersReducedMotion || disableParallax}
          />

          <Box
            component={motion.div}
            aria-hidden="true"
            style={{ opacity: prefersReducedMotion ? 1 : cueOpacity }}
            animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              left: { xs: 16, sm: 'max(24px, calc((100vw - 1152px) / 2))' },
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
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          mt: { xs: 0, md: '-100svh' },
          boxShadow: '0 -28px 70px rgba(0,0,0,0.34)',
        }}
      >
        <FeaturedProjects />
      </Box>
    </>
  );
};

export default React.memo(Index);
