import React from 'react';

import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const GradientTitle = ({ variant, sx = {}, children }) => {
  const theme = useTheme();

  return (
    <Typography
      variant={variant}
      sx={{
        background: theme.custom.gradients.orangeToYellow,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default React.memo(GradientTitle);
