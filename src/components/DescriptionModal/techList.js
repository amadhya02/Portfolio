import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { memo, useMemo } from 'react';

import TechCard from './techCard';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const TechList = ({ stack }) => {
  const categories = useMemo(
    () => ['Languages', 'Frontend', 'Backend', 'Tools'],
    []
  );

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
      {categories.map((category, idx) => {
        const techStack = stack?.[category.toLowerCase()] || [];

        if (!techStack.length) return null;

        return (
          <Box
            key={category}
            sx={{ mb: idx !== categories.length - 1 ? 3 : 0 }}
          >
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {category}
            </Typography>
            <Divider sx={{ mb: 2, height: 1 }} />
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              {techStack.map(({ text, Icon }, i) => (
                <Grid key={`${category}-${text}`}>
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

export default memo(TechList);
