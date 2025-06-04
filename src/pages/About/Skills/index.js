import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useMemo } from 'react';

import Table from './Table';
import SectionContainer from '../../../components/SectionContainer';
import SKILLS from '../../../constants/skills';

const SkillsTerminalTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Memoize skill category list
  const skillCategories = useMemo(() => Object.keys(SKILLS), []);

  return (
    <SectionContainer
      title="SKILLS"
      subtitle="What I bring to the table"
      id="skills"
    >
      {isMobile ? (
        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((cat) => (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={cat}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Table categories={[cat]} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Table categories={skillCategories} />
        </Box>
      )}
    </SectionContainer>
  );
};

export default React.memo(SkillsTerminalTable);
