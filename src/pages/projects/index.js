import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Meta, Title } from 'react-head';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    const requestedProject = location.state?.projectTitle;
    if (requestedProject) {
      setSelectedProject(
        PROJECTS.find((project) => project.title === requestedProject) || null
      );
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
          py: 0,
          pb: { xs: 8, md: 10 },
        }}
      >
        <Header />
        <Box sx={{ pt: { xs: 7, md: 9 }, mb: 3 }}>
          <Typography
            variant="body2"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Featured projects
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 2,
          }}
        >
          {PROJECTS.slice(0, 6).map((project, index) => (
            <ProjectItem
              key={project.title}
              setSelectedProject={setSelectedProject}
              project={project}
              index={index}
            />
          ))}
        </Box>

        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 2 }}>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1 }}
              >
                Archive
              </Typography>
              <Typography variant="h2">
                Earlier work
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ maxWidth: 410, alignSelf: { sm: 'flex-end' } }}>
              Experiments, client work, and products that shaped how I build today.
            </Typography>
          </Box>

          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {PROJECTS.slice(6).map((project, archiveIndex) => (
              <Box
                key={project.title}
                component="button"
                type="button"
                onClick={() => setSelectedProject(project)}
                sx={{
                  width: '100%',
                  p: 0,
                  py: { xs: 2.25, md: 2.5 },
                  display: 'grid',
                  gridTemplateColumns: { xs: '46px 1fr auto', md: '70px 1.4fr 0.7fr 0.5fr auto' },
                  gap: { xs: 1.5, md: 3 },
                  alignItems: 'center',
                  textAlign: 'left',
                  color: 'text.primary',
                  bgcolor: 'transparent',
                  border: 0,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .archive-title': { color: 'primary.main' },
                    '& .archive-arrow': { transform: 'translate(3px, -3px)' },
                  },
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {String(archiveIndex + 7).padStart(2, '0')}
                </Typography>
                <Typography className="archive-title" variant="h6" sx={{ transition: 'color 0.2s ease' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
                  {project.under}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
                  {project.year}
                </Typography>
                <ArrowOutward className="archive-arrow" sx={{ color: 'text.secondary', transition: 'transform 0.2s ease' }} />
              </Box>
            ))}
          </Box>
        </Box>
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
