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

const DescriptionCard = ({ description }) => {
  const theme = useTheme();

  if (!description) {
    return null;
  }

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <ListAlt fontSize="medium" />
        <Typography variant="h5">Description</Typography>
      </Stack>
      <List dense>
        {description.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <FiberManualRecord
                  sx={{
                    fontSize: 6,
                    color: theme.palette.primary.main,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={point} color="textSecondary" />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Paper>
  );
};

export default DescriptionCard;
