import React from 'react';
import Box from '@mui/material/Box';
import {COLORS} from "../../constants/colors";

const colors = [COLORS.RED_CLOSE, COLORS.AMBER_MIN, COLORS.GREEN_MAX];

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
        width: '100%',
      }}
    >
      {colors.map((color) => (
        <Box
          key={color}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: color,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      ))}
    </Box>
  );
}
