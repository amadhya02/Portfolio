import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Title, Meta } from 'react-head';

import HeroText from './HeroText';
import HeroImage from './HeroImage';
import BgImg from '../../assets/images/background.png';

const Index = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: `url(${BgImg})`,
      }}
    >
      <Title>AA Portfolio | Full-Stack Developer</Title>
      <Meta
        name="description"
        content="Welcome to the portfolio of AA — a full-stack developer crafting scalable, modern web applications with clean design and great UX."
      />
      <Meta property="og:title" content="AA Portfolio | Full-Stack Developer" />
      <Meta
        property="og:description"
        content="Explore full-stack projects, technical skills, and digital craftsmanship by AA."
      />
      <Meta property="og:url" content="https://yourdomain.com/about" />
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
