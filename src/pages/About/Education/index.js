import React from 'react';
import { Box, Grid } from '@mui/material';
import { Timeline } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Header from './Header';
import EducationEntry from './EducationEntry';
import InstituteLogo from './InstituteLogo';

import GTLogo from '../../../assets/images/gt-logo.png';
import SchoolLogo from '../../../assets/images/school-logo.png';
import PecLogo from '../../../assets/images/pec-logo.png';

const educationData = [
  {
    duration: 'Aug, 2016 - Jun, 2020',
    degree: 'M.Sc. in Computing Systems',
    institute: 'Georgia Institute of Technology',
    other: '3.8 GPA',
    logo: GTLogo,
  },
  {
    duration: 'Aug, 2016 - Jun, 2020',
    degree: 'B.Tech in Electronics & Communication',
    institute: 'Punjab Engineering College',
    other: '8.1 CGPA',
    logo: PecLogo,
  },
  {
    duration: 'Aug, 2014 - Mar, 2016',
    degree: 'Non Medical',
    institute: 'GMSSS-35',
    other: null,
    logo: SchoolLogo,
  },
];

const EducationTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="education" sx={{ px: { xs: 3, sm: 6 }, py: 6 }}>
      <Header />

      <Grid container spacing={6} alignItems="flex-start">
        {/* Timeline Section */}
        <Grid size={{ xs: 12, sm: 7, md: 6 }}>
          <Timeline position={isMobile ? 'right' : 'alternate'}>
            {educationData.map((edu, idx) => (
              <EducationEntry key={edu.institute} data={edu} index={idx} />
            ))}
          </Timeline>
        </Grid>

        {/* Logos Section */}
        <Grid size={{ xs: 12, sm: 5, md: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {educationData.map((edu, idx) => (
              <InstituteLogo key={edu.institute} logo={edu.logo} index={idx} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationTimeline;
