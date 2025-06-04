import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

import devImage from '../../assets/images/coding.png';
import { fadeUp } from '../../components/MotionVariants';

const MotionBox = motion.create(Box);

const MotionBox = motion.create(Box);

const HeroImage = () => {
  const theme = useTheme();

  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ position: 'absolute', bottom: 0, right: 0 }}
    >
      <Box
        component="img"
        src={devImage}
        alt="Developer Illustration of Amadhya Anand"
        loading="lazy"
        sx={{
          width: '100%',
          maxWidth: '50vw',
          borderRadius: 2,
          filter: `drop-shadow(0 0 30px ${alpha(
            theme.palette.primary.main,
            0.1
          )})`,
          transition: 'transform 0.3s ease',
        }}
      />
    </MotionBox>
  );
};

export default React.memo(HeroImage);
