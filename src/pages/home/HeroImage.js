import React from 'react';
import { Box } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { fadeUp } from '../../components/MotionVariants';

import devImage from '../../assets/images/coding.png';

const HeroImage = () => {
  const theme = useTheme();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      style={{ position: 'absolute', bottom: 0, right: 0 }}
    >
      <Box
        component="img"
        src={devImage}
        alt="Developer Illustration of Amadhya Anand"
        loading="lazy"
        sx={{
          width: '100%',
          maxWidth: '54vw',
          borderRadius: 2,
          filter: `drop-shadow(0 0 30px ${alpha(theme.palette.primary.main, 0.1)})`,
          transition: '0.3s ease',
          '&:hover': {
            filter: `drop-shadow(0 0 40px ${alpha(theme.palette.primary.main, 0.3)})`,
          },
        }}
      />
    </motion.div>
  );
};

export default HeroImage;
