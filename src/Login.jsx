import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import '../App.css';
import { Field, Form, Formik } from 'formik'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



function Login(){

  return (
    <>
    <React.Fragment>
                <CssBaseline />
                <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
                    <Box sx={{ width: '30%', backgroundColor: 'white' }}>
                        <Box sx={{padding:'25px'}}>
                            <Box ClassName="AdminBox" sx={{ width: '100%', borderRadius: '25px', border: '2px solid rgb(25, 118, 210)' }}>
                                <h1 style={{ textAlign: 'center', color: 'rgb(25, 118, 210)' }}>Admin Panel</h1>
                                <Formik>
                                    <Form style={{textAlign:'center' , marginLeft:'5%' , marginRight:'5%' }}>
                                        <Field as={TextField} type="email" label="Email" style={{ fontSize: '30px' , marginBottom:'20px' }} name='email'  fullWidth ></Field> <br />
                                        <Field as={TextField} type="password" label="Password"style={{ fontSize: '30px',marginBottom:'5%'}} name="password"   fullWidth></Field><br />
                                        <Button variant="submit" style={{ marginBottom:'10%',backgroundColor:'#1976d2',color:'white ',fontWeight:'500'}}>Submit</Button>
                                    </Form>
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
    </>
  );
}
export default Login
