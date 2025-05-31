import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { ArrowForwardIos } from '@mui/icons-material';
import SectionContainer from '../components/SectionContainer';
import PROJECTS from '../constants/projects';
import theme from '../theme';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <Box>
      {/* Hero Section */}
      <SectionContainer
        id="projects-hero"
        sx={{
          position: 'relative',
          height: '100vh',
          backgroundImage: `url(${featured.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Box sx={{ zIndex: 2, color: '#fff', maxWidth: 700 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1">{featured.title}</Typography>
            <Divider
              sx={{ width: 64, borderColor: 'primary.main', mb: 2, height: 1 }}
            />
            <Typography variant="h6" color="textSecondary" mb={4}>
              {featured.tagline}
            </Typography>
            <Grid container spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<LaunchIcon />}
                href={featured.liveDemoUrl}
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<InfoOutlinedIcon />}
                onClick={() => handleOpen(featured)}
              >
                Explore More
              </Button>
            </Grid>
          </motion.div>
        </Box>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            color: '#fff',
          }}
        >
          <Button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
            sx={{ color: 'inherit', minWidth: 'auto' }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </Button>
        </motion.div>
      </SectionContainer>

      {/* Other Projects Grid */}
      <SectionContainer
        id="other_projects"
        title="OTHER PROJECTS"
        subtitle="What I built along the way"
        align="right"
        sx={{ py: 8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        ></motion.div>
        <Grid container direction="column">
          {others.map((project, index) => (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `1px solid ${theme.custom.border}`,
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
                      sx={{ color: 'gray', fontWeight: 300, width: 32, mr: 2 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'gray',
                        mr: 2,
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      {project.year}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        cursor: 'pointer',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                      onClick={() => handleOpen(project)}
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
                      sx={{
                        color: 'gray',
                        display: { xs: 'none', md: 'block' },
                      }}
                    >
                      {project.under || 'Web Development'}
                    </Typography>
                    <ArrowForwardIos
                      sx={{
                        color: 'gray',
                        fontSize: 14,
                        ml: 1,
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Company Logo */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            zIndex: 2,
            opacity: 0.85,
          }}
        >
          <img
            src={featured.partnerLogo}
            alt={featured.title}
            style={{ height: '10vh', opacity: 0.8 }}
          />
        </Box>
      </SectionContainer>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <DialogContent>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', marginBottom: 16 }}
              />
              <Typography paragraph>{selectedProject.description}</Typography>
              <Button
                variant="contained"
                href={selectedProject.liveDemoUrl}
                target="_blank"
                sx={{ mr: 2 }}
              >
                Live Demo
              </Button>
              {selectedProject.githubUrl && (
                <Button
                  variant="outlined"
                  href={selectedProject.githubUrl}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
