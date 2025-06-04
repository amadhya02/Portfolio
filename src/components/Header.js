import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const Header = ({ align = 'left', title, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Subtitle */}
      <Typography variant="h5" color="text.secondary" align={align}>
        {subtitle}
      </Typography>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" color="primary" align={align}>
          {title}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default React.memo(Header);
