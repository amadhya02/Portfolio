import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProjectVisual from '../../components/ProjectVisual';
import PROJECTS from '../../constants/projects';
import ProjectModal from '../projects/ProjectModal';

const FEATURED_PROJECTS = [
  {
    project: PROJECTS[0],
    summary:
      'A fast bilingual fitness experience built for search, accessibility, and conversion.',
  },
  {
    project: PROJECTS[1],
    summary:
      'A serverless platform that cut 500K-record processing from 10 hours to 26 minutes.',
  },
  {
    project: PROJECTS[2],
    summary:
      'A custom design system that turns experience and technical work into a clear story.',
  },
];

const FEATURED_PROJECT_DATA = FEATURED_PROJECTS.map(({ project }) => project);

const HOME_STATS = [
  {
    eyebrow: 'Processing',
    value: '10h → 26m',
    label: '500K records processed',
    detail: '95.7% faster',
    featured: true,
  },
  {
    eyebrow: 'Experience',
    value: '6+',
    label: 'Years building products',
  },
  {
    eyebrow: 'Collaboration',
    value: '4',
    label: 'Companies and product teams',
  },
  {
    eyebrow: 'Perspective',
    value: '2',
    label: 'Continents worked across',
  },
];

const principles = [
  {
    number: '01',
    title: 'Understand',
    text: 'Align the user need, system constraint, and business outcome.',
  },
  {
    number: '02',
    title: 'Build',
    text: 'Create a system teams can extend, operate, and trust.',
  },
  {
    number: '03',
    title: 'Measure',
    text: 'Track speed, reliability, adoption, and feedback.',
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Box
        component="section"
        sx={{
          borderY: '1px solid rgba(255,255,255,0.08)',
          bgcolor: '#0A0F14',
          py: { xs: 5, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Impact at a glance
            </Typography>
            <Box
              sx={{ height: 1, flex: 1, bgcolor: 'rgba(255,255,255,0.09)' }}
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.45fr 0.75fr' },
              borderTop: '1px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <Box
              component={motion.article}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              sx={{
                minHeight: { xs: 245, md: 320 },
                py: { xs: 3, md: 4 },
                pr: { md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                01 / {HOME_STATS[0].eyebrow}
              </Typography>

              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 1.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'primary.main',
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 650,
                      fontSize: { xs: '3.25rem', sm: '4rem', md: '5rem' },
                      lineHeight: 0.95,
                      letterSpacing: '-0.055em',
                    }}
                  >
                    {HOME_STATS[0].value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#5CD69B', fontWeight: 600 }}
                  >
                    {HOME_STATS[0].detail}
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ mt: 1.25 }}>
                  {HOME_STATS[0].label}
                </Typography>

                <Box
                  sx={{
                    mt: 3,
                    height: 3,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component={motion.div}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    sx={{
                      width: '95.7%',
                      height: '100%',
                      transformOrigin: 'left',
                      background: 'linear-gradient(90deg, #FF9811, #5CD69B)',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                borderTop: { xs: '1px solid rgba(255,255,255,0.09)', md: 0 },
                borderLeft: { md: '1px solid rgba(255,255,255,0.09)' },
              }}
            >
              {HOME_STATS.slice(1).map((stat, index) => (
                <Box
                  key={stat.label}
                  component={motion.article}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  sx={{
                    minHeight: { xs: 96, md: '33.333%' },
                    py: { xs: 2.25, md: 2.5 },
                    pl: { md: 4 },
                    display: 'grid',
                    gridTemplateColumns: '76px 1fr',
                    alignItems: 'center',
                    gap: 2,
                    borderTop:
                      index === 0 ? 0 : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 650,
                      fontSize: '2.35rem',
                      lineHeight: 1,
                      letterSpacing: '-0.045em',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {stat.eyebrow}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.25 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0B1016' }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              Selected work
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: 620 }}>
              Work that moved the needle.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gap: { xs: 5, md: 8 } }}>
            {FEATURED_PROJECTS.map(({ project, summary }, index) => (
              <Box
                key={project.title}
                component={motion.article}
                role="button"
                tabIndex={0}
                aria-label={`Read the ${project.title} case study`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
                  gap: { xs: 3, md: 5 },
                  alignItems: 'center',
                  cursor: 'pointer',
                  outline: 'none',
                  '& .home-project-visual': {
                    borderRadius: 4,
                    transition:
                      'transform 0.25s ease, filter 0.25s ease, box-shadow 0.2s ease',
                  },
                  '& .home-project-title, & .home-project-link': {
                    transition: 'color 0.2s ease',
                  },
                  '& .home-project-link svg': {
                    transition: 'transform 0.2s ease',
                  },
                  '&:focus-visible .home-project-visual': {
                    boxShadow: '0 0 0 2px rgba(255,152,17,0.82)',
                  },
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover .home-project-visual': {
                      transform: 'translateY(-5px)',
                      filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.24))',
                    },
                    '&:hover .home-project-title, &:hover .home-project-link': {
                      color: 'primary.main',
                    },
                    '&:hover .home-project-link svg': {
                      transform: 'translateX(4px)',
                    },
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                    '& .home-project-visual, & .home-project-title, & .home-project-link, & .home-project-link svg':
                      {
                        transition: 'none',
                      },
                    '&:hover .home-project-visual': {
                      transform: 'none',
                    },
                  },
                }}
              >
                <Box
                  className="home-project-visual"
                  sx={{ order: { md: index % 2 === 1 ? 2 : 1 } }}
                >
                  <ProjectVisual project={project} index={index} />
                </Box>

                <Box
                  sx={{ order: { md: index % 2 === 1 ? 1 : 2 }, px: { md: 2 } }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5 }}
                  >
                    0{index + 1} / {project.year} · {project.under}
                  </Typography>
                  <Typography
                    className="home-project-title"
                    variant="h2"
                    sx={{ mb: 1.25 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      mb: 2.25,
                      maxWidth: 460,
                      fontSize: { md: '1.05rem' },
                    }}
                  >
                    {summary}
                  </Typography>

                  <Box
                    className="home-project-link"
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'text.primary',
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      lineHeight: 1.75,
                    }}
                  >
                    Read the case study
                    <ArrowForward fontSize="small" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Button
            component={Link}
            to="/projects"
            variant="text"
            endIcon={<ArrowForward />}
            sx={{
              mt: { xs: 6, md: 8 },
              width: '100%',
              minHeight: 0,
              py: 2.5,
              px: 0,
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 0,
              color: 'text.primary',
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: { xs: '1rem', md: '1.1rem' },
              '& .MuiButton-endIcon': {
                m: 0,
                color: 'primary.main',
                transition: 'transform 0.2s ease',
              },
              '&:hover': {
                bgcolor: 'transparent',
                color: 'primary.main',
                '& .MuiButton-endIcon': { transform: 'translateX(6px)' },
              },
            }}
          >
            Explore the full archive
          </Button>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{ py: { xs: 7, md: 9 }, bgcolor: '#0F161D' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              How I work
            </Typography>
            <Typography variant="h2">From ambiguity to evidence.</Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, minmax(0, 1fr))',
              },
              borderTop: '1px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {principles.map((principle, index) => (
              <Box
                key={principle.number}
                component={motion.article}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                sx={{
                  minHeight: { md: 220 },
                  py: { xs: 3, md: 3.5 },
                  px: { xs: 0, md: 3.5 },
                  display: 'grid',
                  gridTemplateColumns: { xs: '56px 1fr', md: '1fr' },
                  alignContent: 'space-between',
                  gap: { xs: 1.5, md: 4 },
                  borderTop: {
                    xs: index === 0 ? 0 : '1px solid rgba(255,255,255,0.08)',
                    md: 0,
                  },
                  borderLeft: {
                    md: index === 0 ? 0 : '1px solid rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Typography
                  aria-hidden="true"
                  sx={{
                    color: 'primary.main',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: { xs: '1.3rem', md: '2.8rem' },
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    opacity: { xs: 0.9, md: 0.72 },
                  }}
                >
                  {principle.number}
                </Typography>
                <Box>
                  <Typography variant="h5" sx={{ mb: 0.75 }}>
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: 270 }}
                  >
                    {principle.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {selectedProject && (
        <ProjectModal
          open
          handleClose={() => setSelectedProject(null)}
          data={selectedProject}
          projects={FEATURED_PROJECT_DATA}
          onSelectProject={setSelectedProject}
        />
      )}
    </>
  );
};

export default React.memo(FeaturedProjects);
