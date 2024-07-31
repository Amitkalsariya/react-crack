import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import { TextField, Typography, Grid, InputAdornment } from '@mui/material';
import { Eye, EyeOff } from 'lucide-react'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const history = useHistory();

  const handleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleData = async (values) => {
    try {
      const res = await axios.post("https://interviewhub-3ro7.onrender.com/admin/login", values);
      const token = res.data.token;
      localStorage.setItem("token", token);
      history.push("/Dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '90%', maxWidth: '400px', backgroundColor: 'white', padding: '50px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', border: '5px solid #2F3C7E' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'rgb(25, 118, 210)' ,fontWeight:"bold", color: '#2F3C7E',}}>
            Admin Portal
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleData}
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
                    type={passwordVisible ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {passwordVisible ? (
                            <Eye onClick={handleClick} style={{ cursor: 'pointer' }} />
                          ) : (
                            <EyeOff onClick={handleClick} style={{ cursor: 'pointer' }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{  backgroundColor: '#2F3C7E', color: 'white', fontWeight: '500' }}
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
