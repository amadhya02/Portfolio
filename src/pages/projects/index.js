import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { ArrowForwardIos } from '@mui/icons-material';
import SectionContainer from '../../components/SectionContainer';
import PROJECTS from '../../constants/projects';
import theme from '../../theme';
import DescriptionModal from './DescriptionModal';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <Box sx={{ background: theme.custom.gradients.background }}>
      <SectionContainer
        id="projects"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            color="text.textHeading"
            sx={{ mb: 6 }}
            align="right"
          >
            MY PROJECTS
          </Typography>
        </motion.div>
        <Grid container direction="column" sx={{ width: '100%' }}>
          {PROJECTS.map((project, index) => (
            <Grid key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  onClick={() => handleOpen(project)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `1px solid ${theme.custom.border}`,
                    cursor: 'pointer',
                    p: 4,
                    transition:
                      'background-color 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'scale(1.01)',
                    },
                  }}
                >
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
                      sx={{
                        mr: 2,
                        display: { xs: 'none', sm: 'block' },
                      }}
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
                      sx={{
                        display: { xs: 'none', md: 'block' },
                      }}
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
                </Box>
              </motion.div>
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
