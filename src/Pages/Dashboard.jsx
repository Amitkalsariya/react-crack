import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function BoxSystemProps() {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} sm={4}>
        <Box
          height={150}
          width={300}
          my={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          p={3}
          sx={{
            boxShadow: '0px 0px 5px rgb(204, 204, 204)',
            borderRadius: '10px',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "23px", fontWeight: "bolder", marginTop: "30px" }}>
              Total Category
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
              6
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          height={150}
          width={300}
          my={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          p={3}
          sx={{
            boxShadow: '0px 0px 5px rgb(204, 204, 204)',
            borderRadius: '10px',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "23px", fontWeight: "bolder", marginTop: "30px" }}>
              Total Sub Category
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
              6
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          height={150}
          width={300}
          my={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
          p={3}
          sx={{
            boxShadow: '0px 0px 5px rgb(204, 204, 204)',
            borderRadius: '10px',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "23px", fontWeight: "bolder", marginTop: "30px" }}>
              Total Q & A
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
              6
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
}
