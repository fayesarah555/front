import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
function RegisterPage() {
  
  return (
    <div className="backGroundColor">
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
          padding={25}
        >
          <Grid item xs={10} md={8} className="side">
            <Box
              // display="flex"
              // justifyContent="center"
              // alignItems="center"
              height="100%"
            >
              <Typography
                variant="h3"
                gutterBottom
                className="bienvenue"

              >
                Bienvenue sur File’s Up
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                className="bienvenue-text"

              >
                Facilité la sauvegarde de vos document en les gardant au même endroit n'a jamais été aussi facile.
              </Typography>
              {/* <img
                src="" // Replace with your image URL
                alt="Login Illustration"
              /> */}
            </Box>
          </Grid>
          <Grid item xs={15} md={4} className="form">
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
              <Typography variant="h3" gutterBottom>
                Register
              </Typography>
              <form noValidate autoComplete="off" padding={3}>
                <TextField
                  label="Nom"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                  <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
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
                <p>
                  You already have an account? <Link to="/Login">Sign in</Link>
                </p>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RegisterPage;
