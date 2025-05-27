import React from 'react';
import { Grid } from '@mui/material';
import { Timeline } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import ExperienceEntry from './ExperienceEntry';
import CompanyLogo from './CompanyLogo';

import SectionContainer from '../../../components/SectionContainer';
import EXPERIENCE from '../../../constants/experience';

const ExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionContainer
      title="MY CAREER"
      subtitle="Chapters of"
      id="experience"
      align="right"
    >
      <Grid container spacing={6} alignItems="center">
        {/* Timeline Section */}
        <Grid size={{ xs: 12, sm: 7, md: 6 }}>
          <Timeline position={isMobile ? 'alternate' : 'right'}>
            {EXPERIENCE.map((company, idx) => (
              <ExperienceEntry
                key={company.name}
                data={company}
                index={idx}
                isLast={idx + 1 === EXPERIENCE.length}
              />
            ))}
          </Timeline>
        </Grid>

        {/* Logos Section */}
        <Grid size={{ xs: 12, sm: 5, md: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {EXPERIENCE.map(({ logo, name }, idx) => (
              <CompanyLogo key={name + 'logo'} logo={logo} index={idx} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ExperienceTimeline;
