import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Queue = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div>
       <Button variant="contained">Add Q & A</Button><br /> <br />

       <table border={0} width="100%" cellPadding={15} cellSpacing={0} >
        <thead>
          <tr style={{boxShadow:'0px 0px 3px #ccc'}}>
            <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: "normal" }}>No</th>
            <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: "normal" }}>Category</th>
            <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: "normal" }}>Status</th>
            <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: "normal" }}>Delete</th>
            <th style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', fontWeight: "normal" }}>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center" style={{boxShadow:'0px 0px 3px #ccc'}}>
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
          <tr align="center" style={{boxShadow:'0px 0px 3px #ccc'}}>
            <td>3</td>
            <td>Mandu</td>
            <td><Switch {...label} defaultChecked /></td>
            <td><DeleteIcon /></td>
            <td><EditIcon /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Queue

