import React from 'react';

import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const GradientTitle = ({ text, variant = 'h3', sx = {} }) => {
  const theme = useTheme();

  return (
    <Typography
      variant={variant}
      sx={{
        background: theme.custom.gradients.orangeToYellow,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default GradientTitle;
