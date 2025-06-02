import React from 'react';
import {
  Typography,
  Box,
  Stack,
  Dialog,
  DialogContent,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TechList from '../../../components/techList';
import DescriptionCard from '../../../components/DescriptionCard';

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
            {data.logo && (
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
                  src={data.logo}
                  alt="logo"
                  width="200"
                  style={{ objectFit: 'contain', margin: 'auto' }}
                />
              </Box>
            )}
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
            <DescriptionCard description={data.desc} />
            <TechList stack={data.tech} />
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
