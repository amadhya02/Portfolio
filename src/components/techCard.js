import React from 'react';
import { Typography, Stack, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TechCard = ({ text, Icon }) => {
  const theme = useTheme();

  return (
    <Tooltip title={text} placement="top">
      <Stack
        direction="column"
        alignItems="center"
        spacing={1.5}
        sx={{
          px: 1,
          py: 2,
          borderRadius: 1,
          width: 80,
          border: `1px solid ${theme.custom.border}`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.03)',
            boxShadow: `0 2px 8px ${theme.palette.primary.main}22`,
          },
        }}
      >
        {Icon && <i className={Icon} style={{ fontSize: 28 }}></i>}
        <Typography
          variant="body2"
          color="textPrimary"
          fontWeight={500}
          align="center"
          noWrap
          sx={{
            display: { xs: 'none', sm: 'block' },
            maxWidth: 62,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Tooltip>
  );
};

export default TechCard;
