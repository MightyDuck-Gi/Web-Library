import { Box, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return <div>
    <Box display="flex" flexDirection="column" alignItems="center" padding={20} textAlign="center">
      <Typography variant='h2'>
          Welcome to Read Books Online, if you haven't already, please sign in.
      </Typography>
    </Box>
  </div>;
}

export default Home;