import React from 'react';

import { Box } from '@mui/material';

const Layout = ({ children }) => (
  <Box sx={{ mt: { xs: '64px', sm: '72px' }, px: 2 }}>{children}</Box>
);

export default React.memo(Layout);
