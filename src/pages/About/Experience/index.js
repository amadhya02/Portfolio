import Timeline from '@mui/lab/Timeline';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import CompanyLogo from './CompanyLogo';
import ExperienceEntry from './ExperienceEntry';
import SectionContainer from '../../../components/SectionContainer';
import EXPERIENCE from '../../../constants/experience';

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const total = EXPERIENCE.length;

  return (
    <SectionContainer
      title="MY CAREER"
      subtitle="Chapters of"
      id="experience"
      align="right"
    >
      <Grid container spacing={6} alignItems="center">
        {/* Timeline Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Timeline position={isMobile ? 'alternate' : 'right'}>
            {EXPERIENCE.map((company, idx) => (
              <ExperienceEntry
                key={company.name}
                data={company}
                index={idx}
                isLast={idx + 1 === total}
              />
            ))}
          </Timeline>
        </Grid>

        {/* Logos Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {EXPERIENCE.map(({ logo, name }, idx) => (
              <Grid key={name + '-logo'}>
                <CompanyLogo logo={logo} index={idx} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default React.memo(ExperienceTimeline);
