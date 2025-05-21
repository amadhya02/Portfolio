import React from 'react';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import theme from '../../../theme';
import MyselfImg from '../../../assets/images/myself.jpg';
import ProfileOverlayImg from '../../../assets/images/profile-overlay.png';

const SOCIAL = [
  {
    id: 'email',
    title: 'Email',
    icon: <Email />,
    link: 'mailto:amadhya.anand@gmail.com',
  },
  {
    id: 'github',
    title: 'Github',
    icon: <GitHub />,
    link: 'https://github.com/amadhya02',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
  },
];

const getExpYears = () => {
  const start = new Date(2020, 7, 13);
  const now = new Date();
  const diff =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) +
    6;
  return Math.floor(diff / 12);
};

const ProfileImageBlock = () => (
  <Grid
    item
    size={{ xs: 12, sm: 5 }}
    sx={{ display: 'flex', justifyContent: 'center' }}
  >
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Social Icons */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        sx={{
          display: 'flex',
          gap: 1.5,
          position: 'absolute',
          top: -22,
          justifyContent: 'center',
          zIndex: 3,
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'column',
            top: 44,
            left: -60,
          },
        }}
      >
        {SOCIAL.map(({ id, title, icon, link }) => (
          <motion.div
            key={id}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Tooltip title={title}>
              <IconButton
                href={link}
                target="_blank"
                color="inherit"
                aria-label={id}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                  width: 45,
                  height: 45,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Box>

      {/* Main Image */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={MyselfImg}
        alt="Amadhya Anand"
        style={{
          width: { xs: '50vw', sm: '30vw' },
          maxWidth: 280,
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
          zIndex: 2,
        }}
      />

      {/* Overlay Image – Hidden on small screens */}
      <Box
        component="img"
        src={ProfileOverlayImg}
        alt="Amadhya working"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translate(-30%, 25%)',
          width: '18vw',
          maxWidth: 240,
          borderRadius: 2,
          objectFit: 'cover',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 3,
        }}
      />

      {/* Experience Tag */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        sx={{
          mt: 2,
          position: 'absolute',
          bottom: -30,
          backgroundColor: 'background.paper',
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          px: 2,
          py: 1,
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 4,
          [theme.breakpoints.up('lg')]: {
            bottom: -40,
            left: '60%',
            translate: '-50%',
          },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {getExpYears()}+
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Successful Years
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export default ProfileImageBlock;
