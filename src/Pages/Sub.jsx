import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import { Form,Formik } from 'formik';

const ResponsiveTable = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  overflowX: 'auto',
  '& th, td': {
    padding: '15px',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '14px',
      padding: '10px',
    },
  },
  '& th': {
    backgroundColor: 'rgb(25,118,210)',
    color: 'white',
    fontWeight: 'normal',
  },
});

export default function C1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 864 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
              Add category
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
              <DialogTitle>Add category</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <Formik>
                  <Form>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      name="cetegory"
                      label="Add category"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Form>
                </Formik>
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <ResponsiveTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Amit</td>
              <td>
                <FormControlLabel control={<Switch defaultChecked />} />
              </td>
              <td>
                <DeleteIcon />
              </td>
              <td>
                <EditIcon />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>N</td>
              <td>
                <FormControlLabel control={<Switch defaultChecked />} />
              </td>
              <td>
                <DeleteIcon />
              </td>
              <td>
                <EditIcon />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Category</td>
              <td>
                <FormControlLabel control={<Switch defaultChecked />} />
              </td>
              <td>
                <DeleteIcon />
              </td>
              <td>
                <EditIcon />
              </td>
            </tr>
          </tbody>
        </ResponsiveTable>
      </Grid>
    </Grid>
  );
}


const top100Films = [
  { label: 'Amit', year: 1994 },
  { label: 'N', year: 1972 },
];