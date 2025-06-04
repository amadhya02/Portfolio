import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { Title, Meta } from 'react-head';

import HeroImage from './HeroImage';
import HeroText from './HeroText';
import BgImg from '../../assets/images/background.png';

const Index = () => {
  return (
    <>
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

      <Box
        component="section"
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          backgroundImage: `url(${BgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <HeroText />
          </Box>
        </Container>
        <HeroImage />
      </Box>
    </>
  );
};

export default React.memo(Index);
