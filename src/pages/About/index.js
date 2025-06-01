import React from 'react';
import { Box } from '@mui/material';
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
      {/* Photo + Info Section */}
      <AboutCard />

      <EducationSection />

      <ExperienceTimeline />

      <SkillsTable />

      {/* Passion Outside Experience */}
      <Passions />
    </Box>
  );
};

export default AboutSection;
