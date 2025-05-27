import React from 'react';
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
  ListItem,
  IconButton,
  List,
  ListItemText, ListItemIcon, Box,
} from '@mui/material';
import { Work } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import theme from "../../../theme";

const ExperienceEntry = ({ data, index, isLast }) => {
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
            }}
          >
            <Work fontSize="medium" />
          </TimelineDot>
          {!isLast && <TimelineConnector sx={{ bgcolor: 'primary.main' }} />}
        </TimelineSeparator>
        <TimelineContent sx={{ pb: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.location}
          </Typography>
          <List>
            {data.roles.map((role) => (
              <ListItem
                key={data.name + '_' + role.role}
                secondaryAction={
                  <IconButton edge="start" aria-label="open">
                    <OpenInNewIcon fontSize="small" />
                  </IconButton>
                }
                dense
              >
                <ListItemText primary={role.role} secondary={role.duration} />
              </ListItem>
            ))}
          </List>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
};

export default ExperienceEntry;
