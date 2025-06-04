import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MotionGrid = motion.create(Grid);

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const InstituteLogo = ({ logo, index }) => {
  return (
    <MotionGrid
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationVariants}
    >
      <Avatar
        src={logo}
        alt={`Institute Logo ${index + 1}`}
        variant="rounded"
        sx={{
          width: { xs: '40vw', sm: '30vw', md: '15vw' },
          height: { xs: '40vw', sm: '30vw', md: '15vw' },
          maxWidth: 175,
          maxHeight: 175,
          mx: 'auto',
        }}
        slotProps={{
          img: {
            style: { objectFit: 'contain' },
          },
        }}
      />
    </MotionGrid>
  );
};

export default React.memo(InstituteLogo);
