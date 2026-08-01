import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

import ProjectVisual from '../../components/ProjectVisual';

const getTechnologies = (project) =>
  Object.values(project.techStack)
    .flat()
    .map((technology) => technology.text)
    .filter(Boolean)
    .slice(0, 3);

function ProjectItem({
  index,
  project,
  setSelectedProject,
  variant = 'medium',
}) {
  const isLead = variant === 'lead';
  const isCompact = variant === 'compact';
  const handleOpen = useCallback(() => {
    setSelectedProject(project);
  }, [project, setSelectedProject]);

  return (
    <Box
      component={motion.article}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.05 }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} case study`}
      onClick={handleOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleOpen();
        }
      }}
      sx={{
        position: 'relative',
        height: '100%',
        minWidth: 0,
        pt: { xs: 2, md: 2.5 },
        display: { xs: 'flex', md: isLead ? 'grid' : 'flex' },
        flexDirection: 'column',
        gridTemplateColumns: isLead ? '1.08fr 0.92fr' : undefined,
        columnGap: { md: isLead ? 5 : 0 },
        gridColumn: {
          md: isLead
            ? '1 / -1'
            : isCompact && index === 5
              ? '1 / -1'
              : 'span 6',
          lg: isLead ? '1 / -1' : isCompact ? 'span 4' : 'span 6',
        },
        borderTop: '1px solid rgba(255,255,255,0.13)',
        cursor: 'pointer',
        outline: 'none !important',
        transition: 'border-color 0.25s ease',
        '&:focus': { outline: 'none !important' },
        '&:focus-visible': {
          outline: 'none !important',
          '& .project-visual': {
            boxShadow: '0 0 0 2px rgba(255,152,17,0.82)',
          },
        },
        '& .project-visual': {
          borderRadius: 4,
          transition:
            'transform 0.25s ease, filter 0.25s ease, box-shadow 0.2s ease',
        },
        '&:hover': {
          borderColor: 'rgba(255,152,17,0.4)',
          '& .project-visual': {
            transform: 'translateY(-5px)',
            filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.24))',
          },
          '& .project-title': { color: 'primary.main' },
          '& .project-link': { color: 'primary.main' },
          '& .project-link svg': { transform: 'translateX(4px)' },
        },
      }}
    >
      <Box className="project-visual" sx={{ minWidth: 0 }}>
        <ProjectVisual project={project} index={index} compact={!isLead} />
      </Box>

      <Box
        sx={{
          px: { xs: 1, sm: 1.5, md: isLead ? 1 : 1.5 },
          pt: { xs: 2.25, sm: 2.5, md: isLead ? 1 : 2.5 },
          pb: { xs: 1, md: isLead ? 1.5 : 1 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isLead ? 'center' : 'flex-start',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'primary.main', fontWeight: 650 }}
          >
            0{index + 1}
          </Typography>
          <Box
            sx={{ width: 28, height: '1px', bgcolor: 'rgba(255,255,255,0.16)' }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{ minWidth: 0 }}
          >
            {project.year} · {project.under}
          </Typography>
        </Box>
        <Typography
          className="project-title"
          variant={isLead ? 'h2' : 'h3'}
          sx={{
            mt: 1.25,
            mb: 1.25,
            overflowWrap: 'anywhere',
            transition: 'color 0.2s ease',
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2.25,
            flex: isLead ? '0 0 auto' : 1,
            maxWidth: isLead ? 430 : 'none',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: isLead ? 3 : 2,
            overflow: 'hidden',
            overflowWrap: 'anywhere',
          }}
        >
          {project.description[0]}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            minHeight: 20,
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            mb: { xs: 2.25, md: isLead ? 3 : 2.25 },
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.01em',
          }}
        >
          {getTechnologies(project).join(' · ')}
        </Typography>

        <Box
          className="project-link"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 600,
            transition: 'color 0.2s ease',
          }}
        >
          View case study
          <ArrowForward
            sx={{ fontSize: 18, transition: 'transform 0.2s ease' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(ProjectItem);
