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
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

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
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [value, setValue] = React.useState({ questions: '', answer: '', subcatagoryID: '' });
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    qa();
    sub();
    add();
  }, []);

  function add() {
    axios.get("https://interviewhub-3ro7.onrender.com/catagory/", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
        setData1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sub() {
    axios.get("https://interviewhub-3ro7.onrender.com/subcatagory/", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
  
        const active = res.data.data.filter(el => el.status === 'on');
        setData2(active);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  function qa() {
    axios.get("https://interviewhub-3ro7.onrender.com/questions", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data.data);
        const filterData = res.data.data.filter(Queue =>
          Queue.subcatagoryID && Queue.subcatagoryID.catagoryID && Queue.subcatagoryID.catagoryID.status === 'on'
        );
        setData(filterData);
        localStorage.setItem("count3", res.data.data.length);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  const handleD = (values) => {
    // Check if subcategoryID is valid
   
      if (id != null) {
        axios.patch("https://interviewhub-3ro7.onrender.com/questions/" + id, values, {
          headers: {
            Authorization: token
          }
        })
          .then((res) => {
            qa();
            handleClose();
            setId(null);
          })
          .catch((er) => {
            console.log(er);
          });
      } else {
        axios.post("https://interviewhub-3ro7.onrender.com/questions/create", values, {
          headers: {
            Authorization: token
          }
        })
          .then((res) => {
            console.log(res.data.data);
            qa();
            handleClose();
          })
          .catch((er) => {
            console.log(er);
          });
      }
  
  };

  const handleDelete = (id) => {
    axios.delete("https://interviewhub-3ro7.onrender.com/questions/" + id, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log("Success");
        qa();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleEdit = (el, id) => {
    handleClickOpen();
    setValue({
      questions: el.questions,
      answer: el.answer,
      subcatagoryID: el.subcatagoryID
    });
    setId(id);
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
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add Question</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <Formik
                  enableReinitialize
                  onSubmit={handleD}
                  initialValues={value}
                >
                  {({ values, setFieldValue }) => (
                    <Form>
                      <Field
                        autoFocus
                        margin="dense"
                        id="questions"
                        name="questions"
                        label="Add Question "
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <Field
                        autoFocus
                        margin="dense"
                        id="answer"
                        name="answer"
                        label="Answer"
                        type="text"
                        fullWidth
                        variant="outlined"
                        as={TextField}
                      />
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="subcatagoryID"
                            name='subcatagoryID'
                            value={values.subcatagoryID}
                            onChange={(e) => setFieldValue('subcatagoryID', e.target.value)}
                          >
                            {
                              data2.map((el, i) => (
                                <MenuItem key={el._id} value={el._id}>{el.subCatagoryname}</MenuItem>
                              ))
                            }
                          </Select>
                        </FormControl>
                      </Box>
                      <DialogActions>
                        <CustomButton type="submit" variant="contained">
                          Submit
                        </CustomButton>
                      </DialogActions>
                    </Form>
                  )}
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
                <th>Questions</th>
                <th>Ans</th>
                <th>Sub-Category</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, i) => (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.questions}</td>
                  <td>{el.answer}</td>
                  <td>{el.subcatagoryID?.subCatagoryname}</td>
                  <td>{el.subcatagoryID?.catagoryID?.catagoryName}</td>
                  <td>
                    <CustomButton1 onClick={() => handleDelete(el._id)}> <DeleteIcon /></CustomButton1>
                  </td>
                  <td>
                    <CustomButton1 onClick={() => handleEdit(el, el._id)}><EditIcon /></CustomButton1>
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
