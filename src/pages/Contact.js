import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { Meta, Title } from 'react-head';

import CanonicalLink from '../components/CanonicalLink';
import { SEO_CONFIG } from '../constants/seo';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ height: '100vh', pt: { xs: 8, sm: 0 }, position: 'relative' }}>
      <Title>Contact | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Get in touch with Amadhya Anand for collaborations, freelance work, or just to say hello."
      />
      <Meta name="keywords" content="Amadhya Anand, contact, hire developer, freelance, collaboration" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Contact | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="Let's connect! Reach out to Amadhya Anand for development work, partnerships, or feedback."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/contact`} />
      <Meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <Meta property="og:image:width" content={SEO_CONFIG.ogImageWidth} />
      <Meta property="og:image:height" content={SEO_CONFIG.ogImageHeight} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact | Amadhya Anand Portfolio" />
      <Meta name="twitter:description" content="Let's connect! Reach out to Amadhya Anand for development work, partnerships, or feedback." />
      <Meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/contact`} />

      {/* Spinner */}
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {/* Iframe */}
      <iframe
        src="https://form.typeform.com/to/TszZoUK2"
        width="100%"
        height="100%"
        title="Contact Me"
        frameBorder="0"
        loading="lazy"
        onLoad={() => setLoading(false)}
        style={{
          visibility: loading ? 'hidden' : 'visible',
        }}
      ></iframe>
    </Box>
  );
};

export default Contact;
