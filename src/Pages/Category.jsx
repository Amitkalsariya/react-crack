import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';


import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik } from 'formik';

export default function Category() {
  const top100Films = [
    { label: 'Amit' },
    { label: 'Rupit' },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ minWidth: 800 }}
          renderInput={(params) => <TextField {...params} label="Search Category" />}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
      <React.Fragment>
      <Button sx={{padding:"15px"}} variant="contained" onClick={handleClickOpen}>
        Add To Category 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Formik>
          <TextField
            autoFocus
            
            margin="dense"
            id="name"
            name="email"
            label="Category"
            type="text"
            fullWidth
            variant="outlined"
            
          />
          </Formik>
        </DialogContent>
        <DialogActions>
         
          <Button variant="contained" type="submit">Submit</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
      </Grid>
      <Grid item xs={12}>
        <table border={0} width="100%" cellPadding={15} cellSpacing={0}>
          <thead>
            <tr style={{ boxShadow: '0px 0px 3px #ccc' }}>
              <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: 'normal' }}>No</th>
              <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: 'normal' }}>Category</th>
              <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: 'normal' }}>Status</th>
              <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: 'normal' }}>Delete</th>
              <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: 'normal' }}>Update</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center" style={{ boxShadow: '0px 0px 3px #ccc' }}>
              <td>1</td>
              <td>Amit</td>
              <td><Switch {...label} defaultChecked /></td>
              <td><DeleteIcon /></td>
              <td><EditIcon /></td>
            </tr>
            <tr align="center">
              <td>2</td>
              <td>Chandu</td>
              <td><Switch {...label} defaultChecked /></td>
              <td><DeleteIcon /></td>
              <td><EditIcon /></td>
            </tr>
            <tr align="center" style={{ boxShadow: '0px 0px 3px #ccc' }}>
              <td>3</td>
              <td>Mandu</td>
              <td><Switch {...label} defaultChecked /></td>
              <td><DeleteIcon /></td>
              <td><EditIcon /></td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
}
