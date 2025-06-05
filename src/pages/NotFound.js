import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import GradientTitle from '../components/GradientTitle';

const NotFound = () => {
  return (
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
  );
};

export default NotFound;
