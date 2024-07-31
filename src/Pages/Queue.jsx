import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { Field, Form, Formik } from 'formik';
import Header from '../Components/Header';
import { Button } from '@mui/material';
// Define the styled button
const CustomButton = styled(Button)({
  backgroundColor: '#2F3C7E',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2F3C7E',
  },
});

// Define the styled table
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
    backgroundColor: '#2F3C7E',
    color: 'white',
    fontWeight: 'normal',
  },
});

export default function Queue() {
  const [open, setOpen] = React.useState(false);

  const handleD = (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(values);
    }
  };

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
            <CustomButton onClick={handleClickOpen}>
              Add Q & A
            </CustomButton>
            <Dialog
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Add Question</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <Formik
                  onSubmit={handleD}
                  initialValues={{ queue1: '', queue2: '' }}
                >
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
              {/* Add table rows here */}
            </tbody>
          </ResponsiveTable>
        </Grid>
      </Grid>
    </Header>
  );
}
