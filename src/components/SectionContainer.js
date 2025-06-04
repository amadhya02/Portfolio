import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
