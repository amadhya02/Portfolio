import React from 'react';
import { Box, useTheme, useMediaQuery, Grid } from '@mui/material';

import Header from './Header';
import Table from './Table';
import SKILLS from "../../../constants/skills";

const SkillsTerminalTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ px: { xs: 3, sm: 6 }, py: 6 }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {isMobile ? (
          <Grid
            container
            spacing={4}
            alignItems="stretch"
            justifyContent="center"
          >
            {Object.keys(SKILLS).map((cat, i) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                key={cat}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Table categories={[cat]} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Table categories={Object.keys(SKILLS)} />
        )}
      </Box>
    </Box>
  );
};

export default SkillsTerminalTable;
