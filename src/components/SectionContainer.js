import React from 'react';
import { Box } from '@mui/material';

import Header from './Header';

const SectionContainer = ({ children, align, title, subtitle, id }) => {
  return (
    <Box sx={{ px: { xs: 3, sm: 6 }, py: 4 }} id={id}>
      <Header align={align} title={title} subtitle={subtitle} />
      {children}
    </Box>
  );
};

export default SectionContainer;
