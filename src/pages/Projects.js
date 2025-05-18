import React from 'react';

import { Container, Typography } from '@mui/material';
import GradientTitle from '../components/GradientTitle';

const Projects = () => (
  <Container>
    <GradientTitle text="Projects & Skills" variant="h2" />
    <Typography>
      A list of featured projects and tech stack will go here.
    </Typography>
  </Container>
);

export default Projects;
