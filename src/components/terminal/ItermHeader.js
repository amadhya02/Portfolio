import React from 'react';
import { Box } from '@mui/material';

export default function ItermHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 2,
        py: 1,
        backgroundColor: '#1e1e1e',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
      }}
    >
      {['#ff5f56', '#ffbd2e', '#27c93f'].map((color) => (
        <Box
          key={color}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      ))}
    </Box>
  );
}
