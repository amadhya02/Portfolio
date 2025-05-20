import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import HeroText from './HeroText';
import HeroImage from './HeroImage';

const Home = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: 'radial-gradient(circle at center, #1e2a36, #0f141b 80%)',
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

export default Home;
