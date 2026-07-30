import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React from 'react';

import MyselfImg from '../../../assets/images/myself.jpg';
import theme from '../../../theme';

const SOCIAL = [
  {
    id: 'email',
    title: 'Email Amadhya',
    icon: <Email />,
    link: 'mailto:amadhya.anand@gmail.com',
  },
  {
    id: 'github',
    title: 'View GitHub Profile',
    icon: <GitHub />,
    link: 'https://github.com/amadhya02',
  },
  {
    id: 'linkedin',
    title: 'Connect on LinkedIn',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
  },
];

const getExpYears = () => {
  const start = new Date(2020, 7, 13);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return Math.floor(months / 12);
};

const socialIconVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ProfileImageBlock = () => (
  <Grid
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
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
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
          <motion.div key={id} variants={socialIconVariants}>
            <Tooltip title={title}>
              <IconButton
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  borderRadius: 1.5,
                  width: 45,
                  height: 45,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          </motion.div>
        ))}
      </Box>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={MyselfImg}
        alt="Amadhya Anand seated behind a drum kit"
        style={{
          width: '100%',
          maxWidth: 360,
          aspectRatio: '4 / 5',
          objectFit: 'cover',
          borderRadius: '24px',
          boxShadow: '0 28px 70px rgba(0,0,0,0.38)',
          zIndex: 2,
        }}
      />

      <Box
        component={motion.div}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        sx={{
          mt: 2,
          position: 'absolute',
          bottom: -30,
          backgroundColor: '#111820',
          border: '1px solid rgba(255,255,255,0.1)',
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          px: 2,
          py: 1,
          borderRadius: 2,
          boxShadow: '0 14px 35px rgba(0,0,0,0.28)',
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
        <Typography variant="body2" color="text.secondary" noWrap>
          Years building products
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export default React.memo(ProfileImageBlock);
