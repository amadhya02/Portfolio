import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

import HobbyCard from './card';
import SectionContainer from '../../../components/SectionContainer';
import HOBBIES from '../../../constants/hobbies';

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

const MotionBox = motion.create(Box);

const HobbiesSection = () => {
  return (
    <SectionContainer
      title="SIDE QUESTS"
      subtitle="Beyond the Code"
      id="hobbies"
      align="right"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} justifyContent="center">
          {HOBBIES.map((hobby) => (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={hobby.title}
              component={MotionBox}
              variants={itemVariants}
            >
              <HobbyCard {...hobby} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </SectionContainer>
  );
};

export default React.memo(HobbiesSection);
