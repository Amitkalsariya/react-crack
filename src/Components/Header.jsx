import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import CategoryIcon from '@mui/icons-material/Category';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sub from '../Pages/Sub';
import Queue from '../Pages/Queue';
import Dashboard from '../Pages/Dashboard';  
import Category from '../Pages/Category';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <SpaceDashboardIcon />, path: '/' },
  { text: 'Category', icon: <CategoryIcon />, path: '/Category' },
  { text: 'Sub Category', icon: <ControlPointDuplicateIcon />, path: '/Sub' },
  { text: 'Q & A', icon: <HelpOutlineIcon />, path: '/Queue' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className=''>
    
     
      <List style={{paddingTop:"0",marginLeft:"0"}}>
         <ListItem sx={{ backgroundColor: '#1976d2', padding: 2 }}>
          <ListItemText primary="Interview Portal" sx={{ color: 'white', pl: 2 }} />
        </ListItem>
    
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
        >
          <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <MeetingRoomIcon/>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Category" component={Category} />
            <Route path="/Sub" component={Sub} />
            <Route path="/Queue" component={Queue} />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
