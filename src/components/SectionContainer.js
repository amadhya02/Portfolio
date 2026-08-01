import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';

// Memoized for performance
const SectionContainer = ({ children, id, sx = {} }) => {
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
        {children}
      </Box>
    </Container>
  );
};

export default React.memo(SectionContainer);
