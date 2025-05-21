import React from 'react';
import { Container, Box } from '@mui/material';
import AboutCard from './AboutCard';
import Passions from './Passions';
import theme from '../../theme';

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

        {/* Passion Outside Work */}
        <Passions />
      </Container>
    </Box>
  );
};

export default AboutSection;
