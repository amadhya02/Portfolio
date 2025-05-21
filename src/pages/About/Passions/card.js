import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GradientTitle from '../../../components/GradientTitle';
import theme from '../../../theme';

const HobbyCard = ({ icon, title, description }) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      sx={{
        position: 'relative',
        border: `2px solid ${theme.custom.border}`,
        borderRadius: '0px 30px',
        p: { xs: 3, sm: 4 },
        height: 225,
        maxWidth: 360,
        backgroundColor: 'background.paper',
        background: `transparent url(${icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        backgroundSize: 100,
      }}
    >
      <GradientTitle variant="h5" sx={{ mb: 1 }}>
        {title}
      </GradientTitle>
      <Typography variant="body1" color="text.primary">
        {description}
      </Typography>
    </Box>
  );
};

export default HobbyCard;
