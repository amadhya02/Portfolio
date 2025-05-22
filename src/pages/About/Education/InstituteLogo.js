import React from 'react';
import { Avatar, Fade, Grid } from '@mui/material';

const InstituteLogo = ({ logo, index }) => {
  return (
    <Grid>
      <Fade in timeout={600 + index * 300}>
        <Avatar
          src={logo}
          alt="Institute Logo"
          variant="rounded"
          sx={{
            width: { xs: '40vw', sm: '30vw', md: '15vw' },
            height: { xs: '40vw', sm: '30vw', md: '15vw' },
            maxWidth: 175,
            maxHeight: 175,
            mx: 'auto',
          }}
        />
      </Fade>
    </Grid>
  );
};

export default InstituteLogo;
