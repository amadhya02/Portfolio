import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { Meta, Title } from 'react-head';

import Header from './header';
import ProjectItem from './projectItem';
import ProjectModal from './ProjectModal';
import CanonicalLink from '../../components/CanonicalLink';
import SectionContainer from '../../components/SectionContainer';
import PROJECTS from '../../constants/projects';
import { SEO_CONFIG } from '../../constants/seo';
import theme from '../../theme';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Box sx={{ background: theme.custom.gradients.background }}>
      <Title>Projects | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Explore Amadhya Anand's portfolio of full-stack projects — from clean UI builds to complex backends, each crafted with care."
      />
      <Meta name="keywords" content="Amadhya Anand, projects, portfolio, full-stack applications, React projects, web development projects" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Projects | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="A showcase of real-world full-stack applications, design systems, and scalable solutions built by Amadhya Anand."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/projects`} />
      <Meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <Meta property="og:image:width" content={SEO_CONFIG.ogImageWidth} />
      <Meta property="og:image:height" content={SEO_CONFIG.ogImageHeight} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Projects | Amadhya Anand Portfolio" />
      <Meta name="twitter:description" content="A showcase of real-world full-stack applications, design systems, and scalable solutions built by Amadhya Anand." />
      <Meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/projects`} />
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
        <ProjectModal
          open
          handleClose={setSelectedProject.bind(null, null)}
          data={selectedProject}
        />
      )}
    </Box>
  );
};

export default React.memo(ProjectsPage);
