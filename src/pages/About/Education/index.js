import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { School } from '@mui/icons-material';
import { Typography, Box, Grid, Avatar, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

import Header from './Header';
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

  return (
    <Box id="education" sx={{ px: { xs: 3, sm: 6 }, py: 6 }}>
      <Header />
      <Grid container spacing={4} alignItems="center">
        {/* Timeline - Full width on mobile, left side on desktop */}
        <Grid item size={{ xs: 12, sm: 7, md: 6 }}>
          <Timeline position="right">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ display: { xs: 'none', sm: 'none' } }}
                  />
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: `2px solid ${theme.palette.primary.main}`,
                        backgroundColor: theme.palette.background.paper,
                        p: 1,
                        m: 0,
                      }}
                    >
                      <School fontSize="medium" />
                    </TimelineDot>
                    {index < educationData.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {edu.institute}
                    </Typography>
                    <Typography variant="subtitle1">{edu.degree}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.duration}
                    </Typography>
                    {edu.other && (
                      <Typography variant="body2" color="text.secondary">
                        {edu.other}
                      </Typography>
                    )}
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </Grid>

        {/* Logos - stacked under timeline on mobile */}
        <Grid item size={{ xs: 12, sm: 5, md: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            {educationData.map((edu, idx) => (
              <Fade in timeout={600 + idx * 300} key={`logo-${edu.institute}`}>
                <Avatar
                  src={edu.logo}
                  alt={`${edu.title} logo`}
                  variant="rounded"
                  sx={{
                    width: { xs: '40vw', md: '15vw' },
                    height: { xs: '40vw', md: '15vw' },
                    maxWidth: { xs: 120, md: 175 },
                    maxHeight: { xs: 120, md: 175 },
                    mx: 'auto',
                  }}
                />
              </Fade>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationTimeline;
