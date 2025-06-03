import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Meta, Title } from 'react-head';

import SectionContainer from '../../components/SectionContainer';
import PROJECTS from '../../constants/projects';
import theme from '../../theme';
import DescriptionModal from './DescriptionModal';
import ProjectItem from './projectItem';
import Header from './header';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleClose = () => setSelectedProject(null);

  return (
    <Box sx={{ background: theme.custom.gradients.background }}>
      <Title>Projects | AA Portfolio</Title>
      <Meta
        name="description"
        content="Explore AA's portfolio of full-stack projects — from clean UI builds to complex backends, each crafted with care."
      />
      <Meta property="og:title" content="Projects | AA Portfolio" />
      <Meta
        property="og:description"
        content="A showcase of real-world full-stack applications, design systems, and scalable solutions built by AA."
      />
      <SectionContainer
        id="projects"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Grid container direction="column" sx={{ width: '100%' }}>
          {PROJECTS.map((project, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <ProjectItem
                setSelectedProject={setSelectedProject}
                project={project}
                index={index}
                isLast={index + 1 === PROJECTS.length}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Modal */}
      {selectedProject && (
        <DescriptionModal
          open
          handleClose={() => handleClose()}
          data={selectedProject}
        />
      )}
    </Box>
  );
}
