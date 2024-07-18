import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, Field } from 'formik'; // Import Formik components

const Queue = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <Button sx={{ padding: '15px' }} variant="contained" onClick={handleClickOpen}>
          Add Q & A
        </Button>
        <br /> <br />
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formJson);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add Q & A</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{ question1: '', description: '' }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                handleClose();
              }}
            >
              <Form>
                <Field
                  autoFocus
                  component={TextField}
                  margin="dense"
                  id="question1"
                  name="question1"
                  label="Question 1"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
                <Field
                  autoFocus
                  component={TextField}
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Form>
            </Formik>
          </DialogContent>
          <DialogActions>
           
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

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
    </div>
  );
}

export default Queue;
