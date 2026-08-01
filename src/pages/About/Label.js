import Typography from '@mui/material/Typography';
import React from 'react';

const Label = ({ children, dark = false }) => (
  <Typography
    variant="caption"
    sx={{
      color: dark ? '#9B5B10' : 'primary.main',
      fontWeight: 800,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </Typography>
);

export default Label;
