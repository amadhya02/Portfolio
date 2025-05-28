import React from 'react';
import {
  Typography,
  Box,
  Stack,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Grid,
  Button,
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import {
  FiberManualRecord,
  ListAlt,
  Code,
  LocationOn,
  AccessTime,
  Business,
  Label,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const techColors = {
  React: '#61dafb',
  'Node.js': '#3c873a',
  Figma: '#a259ff',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#306998',
};

const DescriptionModal = ({ data, open, handleClose }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      scroll="body"
    >
      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          <Grid
            item
            size={{ xs: 12, md: 5 }}
            sx={{
              background:
                theme.custom.gradients.orangeToYellow,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              color: '#fff',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            <Box>
              <Typography variant="h6" color="textPrimary">
                {data.company}
              </Typography>
              <Typography variant="h2" fontWeight={500} gutterBottom>
                {data.role}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <AccessTime fontSize="small" />
                <Typography variant="body2">{data.duration}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">{data.location}</Typography>
              </Stack>
            </Box>

            {data.logo && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  opacity: 0.7,
                }}
              >
                <img src={data.logo} alt="logo" width="200" style={{objectFit: 'contain'}} />
              </Box>
            )}
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 7 }}
            sx={{
              p: 4,
              maxHeight: '600px',
              overflowY: 'auto',
              bgcolor: 'background.paper',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <ListAlt fontSize="medium" />
                  <Typography variant="h5">Key Contributions</Typography>
                </Stack>
                <List dense>
                  {data.desc &&
                    data.desc.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ListItem disableGutters>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                              <FiberManualRecord sx={{ fontSize: 6, color: theme.palette.primary.main }} />
                          </ListItemIcon>
                          <ListItemText primary={point}  />
                        </ListItem>
                      </motion.div>
                    ))}
                </List>
              </Paper>

              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Code fontSize="medium" />
                  <Typography variant="h5">Tech Stack</Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {(data.techStack || ['React', 'Node.js', 'Figma']).map(
                    (tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          bgcolor: techColors[tech] || 'default',
                          color: '#fff',
                          border: 'none',
                        }}
                      />
                    )
                  )}
                </Stack>
              </Paper>

              <Divider sx={{ my: 4 }} />

              <Button variant="outlined" onClick={handleClose} fullWidth>
                Close
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DescriptionModal;
