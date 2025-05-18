import React from 'react';

import { Container, Typography } from '@mui/material';

import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Container>
      <Typography variant="h3">Welcome to Amadhya&apos;s Portfolio</Typography>
      <Typography>This is the homepage.</Typography>
    </Container>
  </Layout>
);

export default Home;
