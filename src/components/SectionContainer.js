import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

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
          px: { xs: 0, sm: 2, md: 3 },
          py: { xs: 5, md: 7 },
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
