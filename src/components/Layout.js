import Box from '@mui/material/Box';
import React from 'react';


const Layout = ({ children }) => (
  <Box sx={{ mt: { xs: '64px', sm: '72px' }, px: 2 }}>{children}</Box>
);

export default React.memo(Layout);
