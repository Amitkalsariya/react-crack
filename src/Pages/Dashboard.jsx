import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../App.css';
import Header from '../Components/Header';

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  return (
        <Header>
                <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3} >
        <Grid item xs= {12} sm= {6} md= {4} > 
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '600', color: 'black', margin: '0' ,fontFamily:"Roboto, Helvetica, Arial, sans-serif"}}> Total Category </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '600', color: 'black', margin: '0', fontFamily:"Roboto, Helvetica, Arial, sans-serif" }}>6</h4>
            </Item>
        </Grid>
        <Grid item xs= {12} sm= {6} md= {4} >
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '600', color: 'black', margin: '0' ,fontFamily:"Roboto, Helvetica, Arial, sans-serif" }}> Total Sub Category </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '600', color: 'black', margin: '0' ,fontFamily:"Roboto, Helvetica, Arial, sans-serif" }}>1</h4>
            </Item>
        </Grid>
        <Grid item xs= {12} sm= {6} md= {4} >
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '600', color: 'black', margin: '0' ,fontFamily:"Roboto, Helvetica, Arial, sans-serif" }}> Total Q & A </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '600', color: 'black', margin: '0' ,fontFamily:"Roboto, Helvetica, Arial, sans-serif" }}>0</h4>
            </Item>
        </Grid>
    </Grid>
</Box>
        </Header>
  );
}
