import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, Card, CardContent, CardMedia, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import AtsLogo from "../assets/images/ats-logo.png";
import AtsHero from "../assets/images/ats-project-bg.png";

const projects = [
    {
        title: 'ATS Website',
        year: 2025,
        image: AtsHero,
        liveDemoUrl: 'https://aerialtelecom.in/',
        githubUrl: null,
        tagline: 'A polished web experience showcasing ATS’s end-to-end telecom solutions and capabilities',
        description: 'A sleek corporate website designed and developed for Aerial Telecom Solutions (ATS), a leading player in telecom infrastructure and training services. The site showcases ATS’s offerings, legacy, and impact through a modern, responsive interface. Built with performance and clarity in mind, it features subtle animations, a clean information hierarchy, and seamless navigation for stakeholders across sectors.',
        techStack: ['React'],
        featured: true,
    },
    {
        title: 'Secondary Project 1',
        image: AtsHero,
        liveDemoUrl: '#',
        description: 'Description of project 1.',
        techStack: ['Next.js', 'Tailwind'],
    },
    {
        title: 'Secondary Project 2',
        image: 'https://via.placeholder.com/400x200',
        liveDemoUrl: '#',
        description: 'Description of project 2.',
        techStack: ['Vue', 'Firebase'],
    },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const handleOpen = (project) => setSelectedProject(project);
    const handleClose = () => setSelectedProject(null);

    const featured = projects.find(p => p.featured);
    const others = projects.filter(p => !p.featured);

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh',
                    backgroundImage: `url(${featured.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: { xs: 4, md: 12 },
                }}
            >
                <Box sx={{ zIndex: 2, color: '#fff', maxWidth: 700 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h1">
                            {featured.title}
                        </Typography>
                        <Divider sx={{ width: 64, borderColor: 'primary.main', mb: 2, height: 1 }} />
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
                        color: '#fff'
                    }}
                >
                    <Button
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        sx={{ color: 'inherit', minWidth: 'auto' }}
                    >
                        <KeyboardArrowDownIcon fontSize="large" />
                    </Button>
                </motion.div>
            </Box>

            {/* Other Projects Grid */}
            <Box p={4}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Typography variant="h4" fontWeight={600} gutterBottom>
                        Other Projects
                    </Typography>
                    <Grid container spacing={3}>
                        {others.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card elevation={1}>
                                        <CardMedia component="img" height="160" image={project.image} alt={project.title} />
                                        <CardContent>
                                            <Typography variant="h6" fontWeight={500}>{project.title}</Typography>
                                            <Box mt={2}>
                                                <Button size="small" variant="text" href={project.liveDemoUrl} target="_blank" sx={{ mr: 1 }}>
                                                    Live Demo
                                                </Button>
                                                <Button size="small" variant="outlined" onClick={() => handleOpen(project)}>
                                                    Explore More
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
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
                        src={AtsLogo}
                        alt="ATS Logo"
                        style={{ height: "10vh", opacity: 0.8 }}
                    />
                </Box>
            </Box>

            {/* Modal */}
            <Dialog open={!!selectedProject} onClose={handleClose} maxWidth="md" fullWidth>
                {selectedProject && (
                    <>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogContent>
                            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', marginBottom: 16 }} />
                            <Typography paragraph>{selectedProject.description}</Typography>
                            <Button variant="contained" href={selectedProject.liveDemoUrl} target="_blank" sx={{ mr: 2 }}>Live Demo</Button>
                            {selectedProject.githubUrl && (
                                <Button variant="outlined" href={selectedProject.githubUrl} target="_blank">GitHub</Button>
                            )}
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
}
