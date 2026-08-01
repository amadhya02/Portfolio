import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import React from 'react';

// Shared parallax-scrollable dot-grid backdrop used behind hero sections
const GridOverlay = ({
  y,
  inset = 0,
  zIndex = -1,
  opacity = 0.28,
  lineOpacity = 0.035,
  size = 52,
  mask,
}) => (
  <Box
    component={motion.div}
    aria-hidden="true"
    style={{ y }}
    sx={{
      position: 'absolute',
      zIndex,
      inset,
      opacity,
      backgroundImage: `linear-gradient(rgba(255,255,255,${lineOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${lineOpacity}) 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
      ...(mask && { maskImage: mask }),
    }}
  />
);

export default GridOverlay;
