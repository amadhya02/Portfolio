import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { Suspense } from 'react';
import { Meta, Title } from 'react-head';

import AboutCard from './AboutCard';
import CanonicalLink from '../../components/CanonicalLink';
import { SEO_CONFIG } from '../../constants/seo';
import theme from '../../theme';

// Lazy-loaded sections
const EducationSection = React.lazy(() => import('./Education'));
const ExperienceTimeline = React.lazy(() => import('./Experience'));
const SkillsTable = React.lazy(() => import('./Skills'));
const Passions = React.lazy(() => import('./Passions'));

// Reusable loading fallback
const Loader = () => (
  <CircularProgress sx={{ mt: 4, mx: 'auto', display: 'block' }} />
);

const AboutSection = () => {
  return (
    <>
      <Title>About | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Learn about Amadhya Anand's journey, experience, and philosophy as a full-stack developer focused on performance, accessibility, and creativity."
      />
      <Meta name="keywords" content="Amadhya Anand, about, full-stack developer, experience, skills, education" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="About | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="Discover Amadhya Anand's development background, values, and expertise in building modern web apps."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/about`} />
      <Meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <Meta property="og:image:width" content={SEO_CONFIG.ogImageWidth} />
      <Meta property="og:image:height" content={SEO_CONFIG.ogImageHeight} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About | Amadhya Anand Portfolio" />
      <Meta name="twitter:description" content="Discover Amadhya Anand's development background, values, and expertise in building modern web apps." />
      <Meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/about`} />

      <Box
        component="section"
        sx={{
          py: 8,
          background: theme.custom.gradients.background,
        }}
      >
        <AboutCard />

        <Suspense fallback={<Loader />}>
          <EducationSection />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <ExperienceTimeline />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <SkillsTable />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Passions />
        </Suspense>
      </Box>
    </>
  );
};

export default React.memo(AboutSection);
