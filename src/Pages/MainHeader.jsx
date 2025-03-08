import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import MainPage from './MainPage';

// Styled components
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  boxShadow: "none",
  height: '80px', // Adjust the height here
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  height: '100%', // Ensure the Toolbar takes the full height of the AppBar
  display: 'flex',
  alignItems: 'center', // Center align items vertically
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    backgroundColor: 'white',
    color: 'black',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: 'black',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: 'black',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const MainHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            CRACKER
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>

              <CustomDrawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
                variant="persistent"
              >
                <IconButton onClick={handleDrawerClose} sx={{ alignSelf: 'flex-end' }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Login" />
                  </ListItem>
                </List>
              </CustomDrawer>
            </>
          ) : (
            <>
              <CustomButton sx={{ mx: 1 }}>Home</CustomButton>
              <CustomButton sx={{ mx: 1 }}>Category</CustomButton>
              <LoginButton sx={{ mx: 1 }}>Login</LoginButton>
            </>
          )}
        </CustomToolbar>
      </CustomAppBar>
      <MainPage></MainPage>
    </>
  );
};

export default MainHeader;
