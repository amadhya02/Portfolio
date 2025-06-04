import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';

// Memoized for performance
const SectionContainer = ({
  children,
  align = 'left',
  title,
  subtitle,
  id,
  sx = {},
}) => {
  return (
    <Container maxWidth="lg">
      <Box
        id={id}
        sx={{
          px: { xs: 4, sm: 6, md: 12 },
          py: 4,
          ...sx,
        }}
      >
        {(title || subtitle) && (
          <Header align={align} title={title} subtitle={subtitle} />
        )}
        {children}
      </Box>
    </Container>
  );
};

export default React.memo(SectionContainer);
