import React, { useState } from 'react';
import { Meta, Title } from 'react-head';
import { Box, CircularProgress } from '@mui/material';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ height: '100vh', pt: { xs: 8, sm: 0 }, position: 'relative' }}>
      <Title>Contact | AA Portfolio</Title>
      <Meta
        name="description"
        content="Get in touch with AA for collaborations, freelance work, or just to say hello."
      />
      <Meta property="og:title" content="Contact | AA Portfolio" />
      <Meta
        property="og:description"
        content="Let's connect! Reach out to AA for development work, partnerships, or feedback."
      />
      <Meta property="og:url" content="https://yourdomain.com/contact" />

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
