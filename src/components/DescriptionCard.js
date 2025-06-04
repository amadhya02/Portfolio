import React from 'react';
// MUI Components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

// MUI Icons
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import ListAlt from '@mui/icons-material/ListAlt';

// MUI Hook
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
