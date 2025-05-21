import React from 'react';
import { Box, Typography, Grid, IconButton, Tooltip } from '@mui/material';
import {
    Email,
    GitHub,
    LinkedIn,
    KeyboardArrowDown,
    WorkspacePremium,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import MyselfImg from '../../assets/images/myself.jpg';
import ProfileOverlayImg from '../../assets/images/profile-overlay.png';
import theme from '../../theme';

const SOCIAL = [
    {
        id: "email",
        title: "Email",
        icon: <Email/>,
        link: "mailto:amadhya.anand@gmail.com",
    },
    {
        id: "github",
        title: "Github",
        icon: <GitHub/>,
        link: "https://github.com/amadhya02",
    },
    {
        id: "linkendin",
        title: "LinkedIn",
        icon: <LinkedIn/>,
        link: "https://www.linkedin.com/in/amadhya-anand-1761b8169/",
    },
]

const AboutHeroSection = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                position: 'relative',
                minHeight: '92vh',
                display: 'flex',
                alignItems: 'center',
                px: { xs: 3, sm: 6 },
                py: { xs: 6, sm: 8 },
            }}
        >
            <Grid container spacing={6} alignItems="center">
                {/* Left Column: Image */}
                <Grid item size={{ xs: 12, sm: 5, md: 4}}>
                    <Box sx={{ position: 'relative' }}>
                        {/* Main Image */}
                        <Box
                            component="img"
                            src={MyselfImg}
                            alt="Amadhya Anand"
                            sx={{
                                width: '30vw',
                                maxWidth: '280px',
                                objectFit: 'cover',
                                borderRadius: 2,
                                boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        />

                        <Grid item sx={{
                            position: 'absolute',
                            top: 44,
                            left: { xs: 'calc(0% - 60px)' },
                            zIndex: 3,
                        }}>
                            {SOCIAL.map(({id, title, icon, link}) => (
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: "12px",
                                        width: 50,
                                        height: 50,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                    }}
                                    key={id}
                                >
                                    <Tooltip title={title}>
                                        <IconButton
                                            href={link}
                                            target="_blank"
                                            color="inherit"
                                            aria-label={id}
                                        >
                                            {icon}
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ))}
                        </Grid>

                        {/* Overlay Image */}
                        <Box
                            component="img"
                            src={ProfileOverlayImg}
                            alt="Amadhya working"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                transform: 'translate(-30%, 25%)',
                                width: '18vw',
                                maxWidth: '240px',
                                borderRadius: 2,
                                objectFit: 'cover',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                zIndex: 3,
                            }}
                        />

                        {/* Experience Tag */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -40,
                                left: '60%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'background.paper',
                                borderLeft: `4px solid ${theme.palette.primary.main}`,
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                zIndex: 4,
                            }}
                        >
                            <Typography variant="h5" fontWeight={700}>
                                5+
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Successful Years
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column: Text */}
                <Grid item size={{ xs: 12, sm: 7, md: 8}}>
                    <Typography variant="h4" color="text.primary" sx={{ mb: 1 }}>
                        About Me
                    </Typography>

                    <Box
                        sx={{
                            width: 40,
                            height: 4,
                            backgroundColor: 'primary.main',
                            borderRadius: 2,
                            mb: 2,
                        }}
                    />

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={700}
                        sx={{ mb: 1 }}
                    >
                        Driven by curiosity, refined by code
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2, maxWidth: '640px' }}
                    >
                        Young, energetic, and enthusiastic engineer, who wants to pursue a
                        challenging and growing career as a Software Developer with the aim
                        of holistic development and organizational growth. By the way,
                        helping out people is something that I relish the most. In my
                        leisure time, I like to cook and watch TV series.
                    </Typography>
                </Grid>
            </Grid>

            {/* Bottom Scroll Arrow */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: 24,
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <IconButton
                    color="primary"
                    href="#education"
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                    }}
                    aria-label="Scroll to education section"
                >
                    <KeyboardArrowDown fontSize="large" />
                </IconButton>
            </motion.div>
        </Box>
    );
};

export default AboutHeroSection;
