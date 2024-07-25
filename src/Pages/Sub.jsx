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
import { Field, Form, Formik } from 'formik';
import Header from '../Components/Header';
import axios from 'axios';
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

export default function Category() {
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = React.useState([])
  const token = localStorage.getItem("token")
  // console.log("token:-",token);
  React.useEffect(()=>{
sub()
  },[])
  function sub() {
    axios.get("https://interviewhub-3ro7.onrender.com/subcatagory/", {
      headers: {
        Authorization: token
      }
    })
    .then((res) => {
      console.log(res.data.data);
      setdata(res.data.data)

      })
      .catch((er) => {
        console.log(er);
      })
  }
  sub()
  const handleD = (values) => {
    axios.post("https://interviewhub-3ro7.onrender.com/subcatagory/create", values, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
        setdata(res.data.data)
        sub()
        handleClose()
      })
      .catch((er) => {
        console.log(er);
      })
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
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 864 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <React.Fragment>
              <Button variant="contained" onClick={handleClickOpen}>
                Add Sub Category
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}

              >
                <DialogTitle>Add Sub Category</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <Formik onSubmit={handleD}
                    initialValues={{ subCatagoryname: '', catagoryName: '' }}>
                    <Form>
                      <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="subCatagoryname"
                        label="Sub category"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="catagoryName"
                        label="Category Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <DialogActions>
                        <Button type="submit" variant="contained" onClick={sub}>
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
                <th>Sub Category Name</th>
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
              {
              data.map((el, i) => (
                <tr>
                 <td>{i+1}</td>
                  <td>{el.subCatagoryname}</td>
                  <td>{el.catagoryName}</td>
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
              ))
            }

          </ResponsiveTable>
        </Grid>
      </Grid>
    </Header>
  );
}


const top100Films = [
  { label: 'Amit', year: 1994 },
  { label: 'N', year: 1972 },
];