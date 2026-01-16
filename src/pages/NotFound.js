import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Meta, Title } from 'react-head';
import { Link } from 'react-router-dom';

import CanonicalLink from '../components/CanonicalLink';
import GradientTitle from '../components/GradientTitle';
import { SEO_CONFIG } from '../constants/seo';

const NotFound = () => {
  return (
    <>
      <Title>404 - Page Not Found | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="The page you're looking for doesn't exist. Return to Amadhya Anand's portfolio homepage."
      />
      <Meta name="robots" content="noindex, follow" />
      <Meta property="og:title" content="404 - Page Not Found | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="The page you're looking for doesn't exist. Return to Amadhya Anand's portfolio homepage."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/404`} />
      <Meta property="og:type" content="website" />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/404`} />

      <Box
        sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
      >
        <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GradientTitle variant="h1">404</GradientTitle>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Oops! Page not found.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ maxWidth: 600, mb: 4 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or was moved.
          <br />
          You can return to the homepage below.
        </Typography>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: 'spring' }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
          >
            Go Home
          </Button>
        </motion.div>
        </motion.div>
      </Box>
    </>
  );
};

export default NotFound;
