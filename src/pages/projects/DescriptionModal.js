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
  IconButton,
} from '@mui/material';
import {
  FiberManualRecord,
  ListAlt,
  Code,
  Launch,
  GitHub,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

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
            size={{ xs: 12, md: 5 }}
            component={motion.div}
            {...fadeIn(0)}
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
            {data.partnerLogo && (
              <Box
                sx={{
                  position: { xs: 'inherit', sm: 'absolute' },
                  bottom: 4,
                  right: 4,
                  opacity: { xs: 1, sm: 0.75 },
                  display: 'flex',
                }}
              >
                <img
                  src={data.partnerLogo}
                  alt="logo"
                  width="200"
                  style={{ objectFit: 'contain', margin: 'auto' }}
                />
              </Box>
            )}
            <Box>
              <Typography variant="h2" fontWeight={500} gutterBottom>
                {data.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                {data.liveDemoUrl && (
                  <Tooltip title="Live Demo">
                    <IconButton
                      href={data.liveDemoUrl}
                      target="_blank"
                      sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
                    >
                      <Launch />
                    </IconButton>
                  </Tooltip>
                )}
                {data.githubUrl && (
                  <Tooltip title="GitHub Repo">
                    <IconButton
                      href={data.githubUrl}
                      target="_blank"
                      sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
                    >
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            component={motion.div}
            {...fadeIn(0.2)}
            sx={{
              p: { xs: 2, sm: 4 },
              maxHeight: { sm: '600px' },
              overflowY: 'auto',
              bgcolor: 'background.paper',
            }}
          >
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <ListAlt fontSize="medium" />
                <Typography variant="h5">Description</Typography>
              </Stack>
              <List dense>
                {data.description &&
                  data.description.map((point, idx) => (
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
              component={motion.div}
              {...fadeIn(0.4)}
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
                  const techStack =
                    data.techStack?.[category.toLowerCase()] || [];
                  if (!techStack.length) return null;
                  return (
                    <Box key={category} sx={{ mb: idx !== 3 ? 3 : 0 }}>
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {category}
                      </Typography>
                      <Divider sx={{ mb: 2, height: 1 }} />
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent={{ xs: 'center', sm: 'left' }}
                      >
                        {techStack.map(({ text, Icon }, i) => (
                          <Grid key={i} size={{xs: 4, sm: 3, md: 2}}>
                            <motion.div {...fadeIn(0.3 + i * 0.05)}>
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
                                    noWrap
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
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  );
                }
              )}
            </Paper>

            <Divider sx={{ my: 4 }} />

            <motion.div {...fadeIn(0.8)}>
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
