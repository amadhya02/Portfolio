import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import HobbyCard from './card';
import DrumsImg from "../../../assets/images/drum-set.png";
import SwimImg from "../../../assets/images/swimming.png";
import LegoImg from "../../../assets/images/lego.png";
import DumbellImg from "../../../assets/images/dumbbell.png";

const hobbies = [
    {
        title: 'Drumming',
        description: 'I love expressing rhythm and energy through acoustic drumming.',
        icon: DrumsImg,
    },
    {
        title: 'Gymming',
        description: 'Strength and discipline — gym sessions are my power zone.',
        icon: DumbellImg,
    },
    {
        title: 'Swimming',
        description: 'Gliding through water brings me peace and clarity.',
        icon: SwimImg,
    },
    {
        title: 'Legos',
        description: 'Creative problem-solving and building block by block.',
        icon: LegoImg,
    },
];

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const HobbiesSection = () => {
    return (
        <Box component="section" id="hobbies" sx={{ px: { xs: 3, sm: 6 }, py: 8 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Hobbies
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {hobbies.map((hobby) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={hobby.title}
                        component={motion.div}
                        variants={itemVariants}
                    >
                        <HobbyCard {...hobby} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HobbiesSection;
