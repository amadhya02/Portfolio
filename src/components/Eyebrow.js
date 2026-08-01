import Typography from '@mui/material/Typography';
import React from 'react';

const Eyebrow = ({
  children,
  dark = false,
  component,
  variant = 'caption',
  sx = {},
}) => (
  <Typography
    variant={variant}
    component={component}
    sx={{
      color: dark ? '#9B5B10' : 'primary.main',
      fontWeight: 800,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export default Eyebrow;
