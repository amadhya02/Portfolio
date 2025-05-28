import React from 'react';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { School } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const EducationEntry = ({ data, index }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={{ display: { xs: 'none' } }} />
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 48,
              height: 48,
              border: `2px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.background.paper,
              p: 1,
              display: 'flex',
            }}
          >
            <School fontSize="medium" sx={{ margin: 'auto' }} />
          </TimelineDot>
          {index !== 2 && (
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          )}
        </TimelineSeparator>
        <TimelineContent sx={{ pb: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {data.institute}
          </Typography>
          <Typography variant="subtitle1">{data.degree}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data.duration}
          </Typography>
          {data.other && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {data.other}
            </Typography>
          )}
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
};

export default EducationEntry;
