import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

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
    <Grid item xs={6} sm={12}>
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants}
      >
        <Avatar
          src={logo}
          alt="Institute Logo"
          variant="rounded"
          sx={{
            width: { xs: '40vw', sm: '30vw', md: '15vw' },
            height: { xs: '40vw', sm: '30vw', md: '15vw' },
            maxWidth: 175,
            maxHeight: 175,
            mx: 'auto',
          }}
        />
      </motion.div>
    </Grid>
  );
};

export default InstituteLogo;
