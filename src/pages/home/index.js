import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import HeroText from './HeroText';
import HeroImage from './HeroImage';
import theme from "../../theme";

const Index = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: theme.custom.gradients.background,
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Grid sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <HeroText />
        </Grid>
      </Container>
      <HeroImage />
    </Box>
  );
};

export default Index;
