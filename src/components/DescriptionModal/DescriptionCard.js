import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

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
        px: 3,
        py: 1,
        borderRadius: 2,
        mb: 3,
      }}
    >
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
            <ListItem disableGutters alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: 28, mt: 1.75 }}>
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
