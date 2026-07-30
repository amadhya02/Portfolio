import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

import devImage from '../../assets/images/coding.png';

const MotionBox = motion.create(Box);

const HeroImage = ({ parallaxY, reduceMotion }) => {
  const theme = useTheme();

  return (
    <MotionBox
      initial={{ x: 28 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ y: reduceMotion ? 0 : parallaxY }}
      sx={{
        position: 'absolute',
        zIndex: 0,
        right: 0,
        bottom: { xs: -18, md: 0 },
        width: { xs: '70vw', sm: '62vw', md: '50vw' },
        maxWidth: 768,
        opacity: { xs: 0.42, sm: 0.58, md: 1 },
        pointerEvents: 'none',
      }}
    >
      <Box
        component="img"
        src={devImage}
        alt="Developer illustration"
        sx={{
          display: 'block',
          width: '100%',
          borderRadius: 2,
          filter: `drop-shadow(0 0 30px ${alpha(
            theme.palette.primary.main,
            0.1
          )})`,
          maskImage: {
            xs: 'linear-gradient(135deg, transparent 4%, rgba(0,0,0,0.3) 32%, black 62%)',
            md: 'none',
          },
        }}
      />
    </MotionBox>
  );
};

export default React.memo(HeroImage);
