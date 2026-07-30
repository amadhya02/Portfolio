import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

import ProjectVisual from '../../components/ProjectVisual';

const getTechnologies = (project) =>
  Object.values(project.techStack)
    .flat()
    .map((technology) => technology.text)
    .filter(Boolean)
    .slice(0, 4);

function ProjectItem({ index, project, setSelectedProject }) {
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
        height: '100%',
        p: 1.25,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.09)',
        borderRadius: 4,
        bgcolor: '#10171E',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: 'rgba(255,152,17,0.48)',
          '& .project-link': { color: 'primary.main' },
          '& .project-link svg': { transform: 'translateX(4px)' },
        },
      }}
    >
      <ProjectVisual project={project} index={index} compact />

      <Box sx={{ p: { xs: 1.75, sm: 2.25 }, pt: { xs: 2.25, sm: 2.75 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body2" color="text.secondary">
          0{index + 1} · {project.year} · {project.under}
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 1.25 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.25, flex: 1 }}>
          {project.description[0]}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 2.25 }}>
          {getTechnologies(project).map((name) => (
            <Chip
              key={name}
              label={name}
              size="small"
              sx={{ bgcolor: 'rgba(255,255,255,0.045)', color: 'text.secondary' }}
            />
          ))}
        </Box>

        <Box className="project-link" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, transition: 'color 0.2s ease' }}>
          View case study
          <ArrowForward sx={{ fontSize: 18, transition: 'transform 0.2s ease' }} />
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(ProjectItem);
