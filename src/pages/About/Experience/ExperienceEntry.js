import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Work from '@mui/icons-material/Work';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';

import ExpModal from './ExpModal';

const MotionBox = motion.create(Box);

const ExperienceEntry = ({ data, index, isLast }) => {
  const theme = useTheme();
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = useCallback((i) => setOpenModalIndex(i), []);
  const handleClose = useCallback(() => setOpenModalIndex(null), []);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ display: { xs: 'none' }, minWidth: 60 }}
        />
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
            <Work fontSize="medium" sx={{ margin: 'auto' }} />
          </TimelineDot>
          {!isLast && <TimelineConnector sx={{ bgcolor: 'primary.main' }} />}
        </TimelineSeparator>

        <TimelineContent sx={{ pb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {data.location}
          </Typography>

          <Box
            sx={{
              pl: 2,
              borderLeft: '2px solid',
              borderColor: 'divider',
              mt: 1,
            }}
          >
            {data.roles.map((role, i) => (
              <MotionBox
                key={`${data.name}_${role.role}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 2 }}
                >
                  <Box>
                    <Typography fontWeight={600}>{role.role}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {role.duration}
                    </Typography>
                  </Box>

                  <Tooltip title="Learn More...">
                    <IconButton
                      edge="end"
                      aria-label={`Open description for ${role.role}`}
                      aria-expanded={openModalIndex === i}
                      onClick={() => handleOpen(i)}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>

                {openModalIndex === i && (
                  <ExpModal
                    open
                    handleClose={handleClose}
                    data={{
                      ...role,
                      company: data.name,
                      location: data.location,
                      logo: data.logo,
                    }}
                  />
                )}
              </MotionBox>
            ))}
          </Box>
        </TimelineContent>
      </TimelineItem>
    </MotionBox>
  );
};

export default React.memo(ExperienceEntry);
