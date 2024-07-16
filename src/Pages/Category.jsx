import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Category() {
    const top100Films = [
        { label: 'Amit '},
        { label: 'Rupit '},
       
      ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 800 }}
      renderInput={(params) => <TextField {...params} label="Search Category" />}
      
    />
    
    
  );
}


