import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { Suspense } from 'react';
import { Meta, Title } from 'react-head';

import AboutCard from './AboutCard';
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
      <Title>About | AA Portfolio</Title>
      <Meta
        name="description"
        content="Learn about AA's journey, experience, and philosophy as a full-stack developer focused on performance, accessibility, and creativity."
      />
      <Meta property="og:title" content="About | AA Portfolio" />
      <Meta
        property="og:description"
        content="Discover AA's development background, values, and expertise in building modern web apps."
      />

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
