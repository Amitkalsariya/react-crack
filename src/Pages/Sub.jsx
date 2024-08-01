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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

export default function Category() {
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
  const [age, setAge] = React.useState('');

  const [id, setId] = React.useState(null)
  const [value, setValue] = React.useState(
    { subCatagoryname: '', catagoryID: '' }
  )

  const [cat, setCat] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([])
  const [data1, setData1] = React.useState([])
  const token = localStorage.getItem("token")
  console.log("token:-", token);
  React.useEffect(() => {
    sub()
  }, [])
  React.useEffect(() => {
    add()
  }, [])
  function add() {

    axios.get("https://interviewhub-3ro7.onrender.com/catagory/", {
      headers:
      {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
        setData1(res.data.data)

      })
      .catch((error) => {
        console.log(error);
      })
  }
  function sub() {
    axios.get("https://interviewhub-3ro7.onrender.com/subcatagory/", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)

      })
      .catch((er) => {
        console.log(er);
      })
  }

  const datacategory = (e) => {
    setCat(e.target.value)
  }

  const handleD = (values) => {
    console.log("Insert value ==> "+values.catagoryID);
    if(id!=null){
      axios.patch("https://interviewhub-3ro7.onrender.com/subcatagory/"+id,values,{
        headers:{
          Authorization:token
        }
      })
      .then((res)=>{
        sub()
        handleClose()
        setId(null)
      })
      .catch((er) => {
        console.log(er);
      })
    }
    else{
    axios.post("https://interviewhub-3ro7.onrender.com/subcatagory/create", values , {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res);
        sub()
        handleClose()
      })
      .catch((er) => {
        console.log(er);
      })
    }
    setValue({
      subCatagoryname:'',
      catagoryID:''
    })
  }
  const handleDelete = (id) => {
    axios.delete("https://interviewhub-3ro7.onrender.com/subcatagory/" + id, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log("Success");
        sub()
      })
      .catch((er) => {
        console.log(er);
      })
  }
  const handleEdit = (el, id) => {
    handleClickOpen()
    setValue({
      subCatagoryname:el.subCatagoryname,
      catagoryID:el.catagoryID
    })
      setId(id)
    }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(data);

  return (
    <Header>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              getOptionLabel={(values) => values.subCatagoryname}
              sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
              renderInput={(params) => <TextField {...params} label=" Sub - Category" />}
            />
            <React.Fragment>
              <CustomButton  onClick={handleClickOpen} sx={{width:{md:"20%",sm:"40%",xs:"50%"}}} >
                Add Sub Category
              </CustomButton>
              <Dialog
                open={open}
                onClose={handleClose}

              >
                <DialogTitle>Add Sub Category</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  {/* <Formik
                    initialValues={{
                      subCatagoryname : ''
                    }}
                    onSubmit={handleD}
                  >
                    <Form>
                      <Field name="subCatagoryname"></Field><br />
                      <button type='submit'>Hello</button>
                    </Form>
                  </Formik> */}
                  <Formik
                    initialValues={value}
                    onSubmit={handleD}
                  >
                    {({values, setFieldValue}) => (

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
                          sx={{mb:2}}
                        />
                        <br />
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="catagoryID"
                              name='catagoryID'
                              value={values.catagoryID}
                              onChange={(e) => setFieldValue('catagoryID',e.target.value)}
                            >
                              {
                                data1.map((el, i) => (

                                  <MenuItem value={el._id}>{el.catagoryName}</MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        </Box>
                        <DialogActions>
                          <CustomButton1 type="submit" variant="contained">
                            Submit
                          </CustomButton1>
                        </DialogActions>
                      </Form>
                    )}
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
                  <td>{i + 1}</td>
                  <td>{el.subCatagoryname}</td>
                  <td>{el.catagoryID?.catagoryName}</td>
                  <td>
                    <FormControlLabel control={<Switch defaultChecked />} />
                  </td>
                  <td>
                    <CustomButton1 onClick={() => handleDelete(el._id)}> <DeleteIcon /></CustomButton1>
                  </td>
                  <td>
                    <CustomButton1 onClick={() => handleEdit(el, el._id)}><EditIcon /></CustomButton1>
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


