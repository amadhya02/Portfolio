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
  Grid,
  Button,
  Paper,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  FiberManualRecord,
  ListAlt,
  Code,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

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
              background: theme.custom.gradients.orangeToYellow,
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
                  bottom: 4,
                  right: 4,
                  opacity: 0.75,
                }}
              >
                <img
                  src={data.logo}
                  alt="logo"
                  width="200"
                  style={{ objectFit: 'contain' }}
                />
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

              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Code fontSize="medium" />
                  <Typography variant="h5">Tech Stack</Typography>
                </Stack>

                {['Languages', 'Frontend', 'Backend', 'Tools'].map(
                  (category, idx) => {
                    const techStack = data.tech?.[category.toLowerCase()] || [];

                    if (!techStack.length) {
                      return null;
                    }

                    return (
                      <Box key={category} sx={{ mb: idx !== 3 ? 3 : 0 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: 'text.secondary' }}
                        >
                          {category}
                        </Typography>
                          <Divider sx={{ mb: 2, height: 1 }} />
                        <Grid container spacing={2} alignItems="center">
                          {techStack.map(({ text, Icon }, idx) => (
                            <Grid item key={idx} xs={4} sm={3} md={2}>
                                <Tooltip title={text} placement="top">
                              <Stack
                                direction="column"
                                alignItems="center"
                                spacing={1.5}
                                sx={{
                                  px: 1,
                                  py: 2,
                                  borderRadius: 1,
                                  width: 80,
                                  border: `1px solid ${theme.custom.border}`,
                                  background:
                                    'linear-gradient(to bottom, #1f1f1f, #141414)',
                                  transition: 'all 0.2s ease-in-out',
                                  '&:hover': {
                                    transform: 'translateY(-2px) scale(1.03)',
                                    boxShadow: `0 2px 8px ${theme.palette.primary.main}22`,
                                  },
                                }}
                              >
                                {Icon && (
                                  <i
                                    className={Icon}
                                    style={{ fontSize: 28 }}
                                  ></i>
                                )}
                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  fontWeight={500}
                                  align="center"
                                  sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    maxWidth: 62,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {text}
                                </Typography>
                              </Stack>
                                </Tooltip>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    );
                  }
                )}
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
