import React from 'react';
import { Box, Container } from '@mui/material';

import Header from './Header';

const SectionContainer = ({
  children,
  align,
  title,
  subtitle,
  id,
  sx = {},
}) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ px: { xs: 4, sm: 6, md: 12 }, py: 4, ...sx }} id={id}>
        <Header align={align} title={title} subtitle={subtitle} />
        {children}
      </Box>
    </Container>
  );
};

export default SectionContainer;
