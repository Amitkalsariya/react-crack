import * as React from 'react';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import { Field, Form, Formik } from 'formik';
import Header from '../Components/Header';

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

export default function Queue() {
  const [open, setOpen] = React.useState(false);
const handleD=(values)=>{
  try {
    console.log(values);
  } catch (error) {
    console.log(values);
  }
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Header>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row" sx={{ mb: 2 }}>

            <React.Fragment>
              <Button variant="contained" onClick={handleClickOpen}>
                Add Q & A
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}

              >
                <DialogTitle>Add Question</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <Formik
                  onSubmit={handleD}
                  initialValues={{queue1:'',queue2:''}}>
                    <Form>
                      <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="queue1"
                        label="Add Question 1"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                        <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="queue2"
                        label="Add Question 2"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <DialogActions>
                        <Button type="submit" variant="contained">
                          Submit
                        </Button>
                      </DialogActions>
                    </Form>
                  </Formik>
                </DialogContent>
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
            {/* <tbody>
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
            </tbody> */}
          </ResponsiveTable>
        </Grid>
      </Grid>
    </Header>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
