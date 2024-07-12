import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import './style.css';

const LoginPage = () => {
  return (
    <div className='backGroundColor'>
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
           padding={25}
        >
          <Grid item xs={10} md={8} className='side'>
            <Box
              display="flex"
              justifyContent="center"
              // alignItems="center"
              height="100%"
             
            >
              {/* <img
                src="https://via.placeholder.com/400" // Replace with your image URL
                alt="Login Illustration"
              /> */}
            </Box>
          </Grid>
          <Grid item xs={15} md={4} className='form'>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={3}
              // boxShadow={3}
              // borderRadius={2}
              className="form-box"
            >
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
