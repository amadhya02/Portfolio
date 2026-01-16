import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { Title, Meta } from 'react-head';

import HeroImage from './HeroImage';
import HeroText from './HeroText';
import BgImg from '../../assets/images/background.png';
import CanonicalLink from '../../components/CanonicalLink';
import StructuredData from '../../components/StructuredData';
import { SEO_CONFIG, SOCIAL_PROFILES, SOCIAL_PROFILES_ARRAY } from '../../constants/seo';

const Index = () => {
  return (
    <>
      <Title>Amadhya Anand | Full-Stack Developer Portfolio</Title>
      <Meta
        name="description"
        content="Welcome to the portfolio of Amadhya Anand — a full-stack developer crafting scalable, modern web applications with clean design and great UX."
      />
      <Meta name="keywords" content="Amadhya Anand, full-stack developer, React, Node.js, JavaScript, web development, portfolio" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Amadhya Anand | Full-Stack Developer Portfolio" />
      <Meta
        property="og:description"
        content="Explore full-stack projects, technical skills, and digital craftsmanship by Amadhya Anand."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/`} />
      <Meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <Meta property="og:image:width" content={SEO_CONFIG.ogImageWidth} />
      <Meta property="og:image:height" content={SEO_CONFIG.ogImageHeight} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Amadhya Anand | Full-Stack Developer Portfolio" />
      <Meta name="twitter:description" content="Explore full-stack projects, technical skills, and digital craftsmanship by Amadhya Anand." />
      <Meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <Meta name="twitter:url" content={`${SEO_CONFIG.siteUrl}/`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/`} />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Amadhya Anand',
          alternateName: 'AA',
          jobTitle: 'Full-Stack Developer',
          email: SOCIAL_PROFILES.email,
          url: SEO_CONFIG.siteUrl,
          image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`,
          sameAs: SOCIAL_PROFILES_ARRAY,
          knowsAbout: [
            'Web Development',
            'Full-Stack Development',
            'React',
            'Node.js',
            'JavaScript',
            'Frontend Development',
            'Backend Development',
          ],
        }}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SEO_CONFIG.siteName,
          url: SEO_CONFIG.siteUrl,
          description: SEO_CONFIG.defaultDescription,
          author: {
            '@type': 'Person',
            name: SEO_CONFIG.author,
          },
        }}
      />

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
