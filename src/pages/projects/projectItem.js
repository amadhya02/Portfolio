import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import theme from '../../theme';

// Create a motion-enabled MUI Box
const MotionBox = motion.create(Box);

function ProjectItem({ index, project, setSelectedProject, isLast = false }) {
  const handleOpen = useCallback(() => {
    setSelectedProject(project);
  }, [project, setSelectedProject]);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleOpen();
      }}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: isLast ? '' : `1px solid ${theme.custom.border}`,
        cursor: 'pointer',
        p: 4,
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          transform: 'scale(1.01)',
        },
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ fontWeight: 300, width: 32, mr: 2 }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
        >
          {project.year}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateX(4px)',
          },
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {project.under || 'Web Development'}
        </Typography>
        <ArrowForwardIos
          size="small"
          sx={{
            ml: 1,
            color: 'text.secondary',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
    </MotionBox>
  );
}

export default React.memo(ProjectItem);
