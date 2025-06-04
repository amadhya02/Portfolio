import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React from 'react';

import GradientTitle from '../../../components/GradientTitle';

const MotionBox = motion.create(Box);

const HobbyCard = ({ icon, title, description }) => {
  const theme = useTheme();

  return (
    <MotionBox
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      sx={{
        position: 'relative',
        border: `2px solid ${theme.custom.border}`,
        borderRadius: '0px 30px',
        p: { xs: 3, sm: 4 },
        maxWidth: 360,
        minHeight: 225,
        background: `url(${icon}) no-repeat bottom right`,
        backgroundColor: theme.palette.background.paper,
        backgroundSize: 100,
      }}
    >
      <Box>
        <GradientTitle variant="h5" sx={{ mb: 1 }}>
          {title}
        </GradientTitle>
        <Typography variant="body1" color="text.primary">
          {description}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default React.memo(HobbyCard);
