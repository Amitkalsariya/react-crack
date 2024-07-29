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
const [id,setId]=React.useState(null)
const [value,setValue]=React.useState(
  { catagoryName: '' }
)
  const [data, setData] = React.useState([] )
  const token = localStorage.getItem("token")
  // console.log("token ==> ", token);
  React.useEffect(()=>{
    add()
  },[])
  function add() {
    axios.get("https://interviewhub-3ro7.onrender.com/catagory/",{
      headers:
      {
        Authorization:token
      }
    })
      .then((res) => {
         console.log(res.data.data);
        setData(res.data.data)
      
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleData = (values) => {
    if(id!=null){
      axios.patch("https://interviewhub-3ro7.onrender.com/catagory/"+id,values,{
        headers:{
          Authorization:token
        }
      })
      .then((res) => {
        // console.log("success");
        add()
        handleClose()
        setId(null)
      })
      .catch((error) => {
        console.log(error);
      })
    }
    else{

      axios.post("https://interviewhub-3ro7.onrender.com/catagory/create", values, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          console.log("success");
          add()
          handleClose()
        })
        .catch((error) => {
          console.log(error);
        })
    }
setValue({
  catagoryName:''
})
  } 
  const handleDelete=(id)=>{
    axios.delete("https://interviewhub-3ro7.onrender.com/catagory/"+id, {
      headers:{
        Authorization:token
      }
    })
    .then((res) => {
      console.log("success"); 
      add()
    })
    .catch((error) => {
      console.log(error);
    })

  }
  const handleEdit=(el,id)=>{
    handleClickOpen()
    setValue({
      catagoryName:el.catagoryName
    })
    setId(id)
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
              options={data}
              getOptionLabel={(option)=>option.catagoryName}
              sx={{ width: {xs:"100%", sm:"100%"} }}
              renderInput={(params) => <TextField {...params} label="Search Category" />}
            />
            <React.Fragment>
              <Button variant="contained" onClick={handleClickOpen} sx={{width:{md:"50%",sm:"50%",xs:"30%"}}}>
                Add Cetegory
              </Button>
              <Dialog
                open={open}
                  onClose={handleClose}

              >
                <DialogTitle>Add category</DialogTitle>
                <DialogContent>
                
                  <Formik
                  
                    initialValues={value}
                    onSubmit={handleData}>
                    <Form>
                      <Field
                        autoFocus
                        margin="dense"
                        id="name"
                        name="catagoryName"
                        label="Add category"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <DialogActions>
                        <Button type="submit" variant="contained" onClick={add}>
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
                <td> Category</td>
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
                  <td>{el.catagoryName}</td>
                  <td>
                  <FormControlLabel control={<Switch defaultChecked />} />
                </td>
                  <td>
                    <Button onClick={()=>handleDelete(el._id)}><DeleteIcon /></Button>
                  </td>
                  <td>
                    <Button onClick={()=>handleEdit(el,el._id)}><EditIcon /></Button>
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Amit', year: 1994 },
  { label: 'N', year: 1972 },
];