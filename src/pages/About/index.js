import React from 'react';
import { Box } from '@mui/material';
import { Meta, Title } from 'react-head';
import AboutCard from './AboutCard';
import Passions from './Passions';
import theme from '../../theme';
import EducationSection from './Education';
import SkillsTable from './Skills';
import ExperienceTimeline from './Experience';

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: theme.custom.gradients.background,
      }}
    >
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
      <AboutCard />
      <EducationSection />
      <ExperienceTimeline />
      <SkillsTable />
      <Passions />
    </Box>
  );
};

export default AboutSection;
