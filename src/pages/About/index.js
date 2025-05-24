import React from 'react';
import { Container, Box } from '@mui/material';
import AboutCard from './AboutCard';
import Passions from './Passions';
import theme from '../../theme';
import EducationSection from './Education';
import SkillsTable from './Skills';

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: theme.custom.gradients.background,
      }}
    >
      <Container maxWidth="lg">
        {/* Photo + Info Section */}
        <AboutCard />

        <EducationSection />

        <SkillsTable />

        {/* Passion Outside Experience */}
        <Passions />
      </Container>
    </Box>
  );
};

export default AboutSection;
