import React from 'react';
import { Typography, Box, Stack, Grid, Paper, Divider } from '@mui/material';
import { Code } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TechCard from './techCard';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const TechList = ({ stack }) => {
  return (
    <Paper
      component={motion.div}
      {...fadeIn(0.4)}
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': { boxShadow: 6 },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Code fontSize="medium" />
        <Typography variant="h5">Tech Stack</Typography>
      </Stack>

      {['Languages', 'Frontend', 'Backend', 'Tools'].map((category, idx) => {
        const techStack = stack?.[category.toLowerCase()] || [];

        if (!techStack.length) return null;

        return (
          <Box key={category} sx={{ mb: idx !== 3 ? 3 : 0 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {category}
            </Typography>
            <Divider sx={{ mb: 2, height: 1 }} />
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: 'center', sm: 'left' }}
            >
              {techStack.map(({ text, Icon }, i) => (
                <Grid key={i}>
                  <motion.div {...fadeIn(0.3 + i * 0.05)}>
                    <TechCard Icon={Icon} text={text} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Paper>
  );
};

export default TechList;
