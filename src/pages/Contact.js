import React from 'react';
import { Meta, Title } from 'react-head';
import { Box } from '@mui/material';

const Contact = () => (
  <Box sx={{ height: '100vh', pt: { xs: 8, sm: 0 } }}>
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
    <iframe
      src="https://form.typeform.com/to/TszZoUK2"
      width="100%"
      height="100%"
      title="Contact Me"
      frameBorder="0"
    ></iframe>
  </Box>
);

export default Contact;
