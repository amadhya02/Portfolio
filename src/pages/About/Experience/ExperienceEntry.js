import React, { useState } from 'react';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, IconButton, Box, Tooltip, Stack } from '@mui/material';
import { Work } from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import DescriptionModal from './DescriptionModal';

const ExperienceEntry = ({ data, index, isLast }) => {
  const theme = useTheme();
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (i) => setOpenModalIndex(i);
  const handleClose = () => setOpenModalIndex(null);

  return (
    <motion.div
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
              <motion.div
                key={data.name + '_' + role.role}
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
                      aria-label="open"
                      onClick={() => handleOpen(i)}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>

                <DescriptionModal
                  open={openModalIndex === i}
                  handleClose={() => handleClose()}
                  data={{
                    ...role,
                    company: data.name,
                    location: data.location,
                    logo: data.logo,
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
};

export default ExperienceEntry;
