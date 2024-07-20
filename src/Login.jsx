import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import { TextField, Typography, Grid } from '@mui/material';

function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '90%', maxWidth: '400px', backgroundColor: 'white', padding: '50px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' ,border:'1px solid rgb(25, 118, 210)'}}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'rgb(25, 118, 210)' }}>
            Admin Panel
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);  
              // Handle form submission here
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: '#1976d2', color: 'white', fontWeight: '500' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Login;