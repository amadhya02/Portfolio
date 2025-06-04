import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

import DescriptionCard from '../../components/DescriptionCard';
import TechList from '../../components/techList';

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 },
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const DescriptionModal = ({ data, open, handleClose }) => {
  const theme = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          scroll="body"
          PaperComponent={motion.div}
          PaperProps={{
            variants: modalVariants,
            initial: 'hidden',
            animate: 'visible',
            exit: 'exit',
            transition: { duration: 0.4 },
            sx: { overflow: 'hidden', borderRadius: 3 },
          }}
          BackdropProps={{
            sx: {
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
          }}
        >
          <DialogContent sx={{ p: 0 }}>
            <Grid container>
              <Grid
                size={{ xs: 12, md: 5 }}
                component={motion.div}
                {...fadeIn(0.1)}
                sx={{
                  background: theme.custom.gradients.orangeToYellow,
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#fff',
                  position: 'relative',
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
                  <Typography variant="h2" fontWeight={500}>
                    {data.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {data.role}
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
                <DescriptionCard description={data.description} />
                <TechList stack={data.techStack} />
                <Divider sx={{ my: 4 }} />
                <motion.div {...fadeIn(0.4)}>
                  <Button variant="outlined" onClick={handleClose} fullWidth>
                    Close
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default React.memo(DescriptionModal);
