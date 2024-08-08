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
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
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
    backgroundColor: '#2F3C7E',
    color: 'white',
    fontWeight: 'normal',
  }
});

const CustomButton = styled(Button)({
  backgroundColor: '#2F3C7E',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2F3C7E',
  },
});

const CustomButton1 = styled(Button)({
  color: '#2F3C7E',
  '&:hover': {
    color: '#2F3C7E',
  },
});

export default function Category() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [value, setValue] = React.useState({ catagoryName: '' });
  const [data, setData] = React.useState([]);
  const [searchvalue, setSearchvalue] = React.useState('');
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    add();
  }, []);

  function add() {
    axios.get("https://interviewhub-3ro7.onrender.com/catagory/", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        setData(res.data.data);
        localStorage.setItem("count1", res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleData = (values) => {
    if (id != null) {
      axios.patch("https://interviewhub-3ro7.onrender.com/catagory/" + id, values, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          add();
          handleClose();
          setId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.post("https://interviewhub-3ro7.onrender.com/catagory/create", values, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          add();
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setValue({
      catagoryName: ''
    });
  };

  const handleDelete = (id) => {
    axios.delete("https://interviewhub-3ro7.onrender.com/catagory/" + id, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        add();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (el, id) => {
    handleClickOpen();
    setValue({
      catagoryName: el.catagoryName
    });
    setId(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredData = data.filter((el) =>
    el.catagoryName.toLowerCase().includes(searchvalue.toLowerCase())
  );

  return (
    <Header>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              getOptionLabel={(option) => option.catagoryName}
              sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
              renderInput={(params) => <TextField {...params} label="Search Category" />}
              onInputChange={(event, el) => {
                setSearchvalue(el);
              }}
            />
            <React.Fragment>  
              
              <CustomButton onClick={handleClickOpen} sx={{ width: { md: "20%", sm: "50%", xs: "50%" } }}>
                Add Category
              </CustomButton>
              <Dialog
                open={open}
                onClose={handleClose}
              >
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                  <Formik
                    initialValues={value}
                    onSubmit={handleData}
                  >
                    <Form>
                      <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="catagoryName"
                        label="Add Category"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <DialogActions>
                        <CustomButton type="submit" variant="contained">
                          Submit
                        </CustomButton>
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
            <tbody>
              {filteredData.map((el, i) => (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.catagoryName}</td>
                  <td>
                    <FormControlLabel control={<Switch defaultChecked />} />
                  </td>
                  <td>
                    <CustomButton1 onClick={() => handleDelete(el._id)}>
                      <DeleteIcon />
                    </CustomButton1>
                  </td>
                  <td>
                    <CustomButton1 onClick={() => handleEdit(el, el._id)}>
                      <EditIcon />
                    </CustomButton1>
                  </td>
                </tr>
              ))}
            </tbody>
          </ResponsiveTable>
        </Grid>
      </Grid>
    </Header>
  );
}
