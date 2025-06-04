import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import GradientTitle from '../../components/GradientTitle';

// Use motion-enhanced MUI Box
const MotionBox = motion.create(Box);

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Header = () => {
  return (
    <MotionBox
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      sx={{ textAlign: 'left', mb: 6, mt: 6 }}
    >
      <Typography variant="h5">THE ART OF</Typography>

      <GradientTitle
        variant="h2"
        sx={{ position: 'relative', zIndex: 1, fontWeight: 200 }}
      >
        ENGINEERING
      </GradientTitle>

      <Typography
        variant="h1"
        color="text.textHeading"
        sx={{ ml: { xs: 0, sm: 12 }, mt: { xs: 0, sm: -5 } }}
      >
        PROJECTS
      </Typography>
    </MotionBox>
  );
};

export default React.memo(Header);
