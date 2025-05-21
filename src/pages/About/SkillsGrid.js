import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Docker',
  'AWS',
  'GraphQL',
];

const SkillsGrid = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, i) => (
          <Grid item xs={6} sm={4} md={3} key={i}>
            <Paper sx={{ p: 2, textAlign: 'center' }} elevation={3}>
              <Typography variant="subtitle1">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillsGrid;
