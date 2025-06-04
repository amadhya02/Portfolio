import React from 'react';
import {
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { FiberManualRecord, ListAlt } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const DescriptionCard = ({ description = [] }) => {
  const theme = useTheme();

  if (!description.length) return null;

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      elevation={1}
      sx={{
        p: 3,
        borderRadius: 2,
        mb: 3,
      }}
    >
      {/* Title */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <ListAlt fontSize="medium" />
        <Typography variant="h5">Description</Typography>
      </Stack>

      {/* Bullet Points */}
      <List dense>
        {description.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            style={{ listStyle: 'none' }}
          >
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <FiberManualRecord
                  sx={{ fontSize: 6, color: theme.palette.primary.main }}
                />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Paper>
  );
};

export default DescriptionCard;
