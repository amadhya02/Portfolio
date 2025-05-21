import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const hobbies = [
  { icon: '🥁', title: 'Drumming', desc: 'Beat-making is how I unplug.' },
  { icon: '📸', title: 'Photography', desc: 'I shoot moments on weekends.' },
  { icon: '🎮', title: 'Gaming', desc: 'Addicted to creative strategy games.' },
];

const Passions = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Passions Outside Work
      </Typography>
      <Grid container spacing={3}>
        {hobbies.map((hobby, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <Typography variant="h2" component="div">
                  {hobby.icon}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {hobby.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hobby.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Passions;
