import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs >
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '0' }}> Total Category </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '700', color: 'black', margin: '0' }}>6</h4>
            </Item>
        </Grid>
        <Grid item xs >
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '0' }}> Total Sub Category </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '700', color: 'black', margin: '0' }}>1</h4>
            </Item>
        </Grid>
        <Grid item xs >
            <Item sx={{ boxShadow: '1px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 7px 1px rgba(0,0,0,0.14),0px 1px 1px 0px rgba(0,0,0,0.12)' }}>
                <h5 style={{ fontSize: '30px', fontWeight: '700', color: 'black', margin: '0' }}> Total Q & A </h5>
                <h4 style={{ fontSize: '50px', fontWeight: '700', color: 'black', margin: '0' }}>0</h4>
            </Item>
        </Grid>
    </Grid>
</Box>
  );
}
