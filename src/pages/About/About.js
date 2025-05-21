import React from 'react';
import { Container, Box } from '@mui/material';
import AboutCard from './AboutCard';
import EducationTimeline from './EducationTimeline';
import SkillsGrid from './SkillsGrid';
import Passions from './Passions';

const AboutSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Photo + Info Section */}
        <AboutCard />

        {/* Education */}
        <EducationTimeline />

        {/* Skills */}
        <SkillsGrid />

        {/* Passion Outside Work */}
        <Passions />
      </Container>
    </Box>
  );
};

export default AboutSection;
