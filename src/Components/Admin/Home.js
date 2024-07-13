import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1">
        This is the main content area.
      </Typography>
    </Box>
  );
};

export default Home;
