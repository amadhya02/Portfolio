import React from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import HobbyCard from './card';
import SectionContainer from '../../../components/SectionContainer';
import HOBBIES from '../../../constants/hobbies';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const HobbiesSection = () => {
  return (
    <SectionContainer
      title="SIDE QUESTS"
      subtitle="Beyond the Code"
      id="hobbies"
      align="right"
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {HOBBIES.map((hobby) => (
          <Grid
            key={hobby.title}
            component={motion.div}
            variants={itemVariants}
          >
            <HobbyCard {...hobby} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default HobbiesSection;
