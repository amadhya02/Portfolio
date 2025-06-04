import React, { useState, useCallback } from 'react';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Typography,
  IconButton,
  Box,
  Tooltip,
  Stack,
  useTheme,
} from '@mui/material';
import { Work, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import DescriptionModal from './DescriptionModal';

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

                  <Tooltip title="View Work">
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
                  <DescriptionModal
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
