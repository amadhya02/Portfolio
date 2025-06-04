import React from 'react';
import { Grid } from '@mui/material';
import { Timeline } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import EducationEntry from './EducationEntry';
import InstituteLogo from './InstituteLogo';

import SectionContainer from '../../../components/SectionContainer';
import EDUCATION from '../../../constants/education';

const EducationTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SectionContainer title="EDUCATION" subtitle="Journey of" id="education">
      <Grid container spacing={6} alignItems="flex-start">
        {/* Timeline Section */}
        <Grid size={{ xs: 12, sm: 7, md: 6 }}>
          <Timeline position={isMobile ? 'right' : 'alternate'}>
            {EDUCATION.map((edu, idx) => (
              <EducationEntry
                key={edu.institute || idx}
                data={edu}
                index={idx}
                isLast={idx + 1 === EDUCATION.length}
              />
            ))}
          </Timeline>
        </Grid>

        {/* Logos Section */}
        <Grid size={{ xs: 12, sm: 5, md: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {EDUCATION.map((edu, idx) => (
              <InstituteLogo
                key={`${edu.institute}-logo`}
                logo={edu.logo}
                index={idx}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default React.memo(EducationTimeline);
