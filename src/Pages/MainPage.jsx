import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const MainPage = () => {
  return (
    <div className="image1">
      <div className="main-content">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={6} >
            <Typography variant='h4' className="text-center" style={{ fontSize: "37px", marginBottom: "15px" ,color:"#303030" }}>
              Bring Tutoring Right <br />
              to Your Home.
            </Typography>
            <Typography variant='body1' className="text-center" style={{ fontSize: "17px"  ,color:"#595959", fontWeight:"normal"}}>
              Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, <br /> lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed <br /> odio sit amet nibh vulputate cursus mauris
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h4-img-1.png"
              className="image-content"
              alt="Tutoring"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MainPage;
