import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from '../Pages/Dashboard';
import Category from '../Pages/Category';
import Sub from '../Pages/Sub';
import Queue from '../Pages/Queue';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography>
            <MeetingRoomIcon />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <ListItem sx={{ backgroundColor: '#1976d2' }}>
            <ListItemText
              primary="Interview Portal"
              sx={{ padding: '8px', color: 'white' }}
            />
          </ListItem>
          <Divider />
          <List>
            {[
              { text: 'Dashboard', icon: <InboxIcon />, path: '/' },
              { text: 'Category', icon: <MailIcon />, path: '/Category' },
              { text: 'Sub Category', icon: <InboxIcon />, path: '/Sub' },
              { text: 'Q & A', icon: <MailIcon />, path: '/Queue' },
            ].map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                component={Link}
                to={item.path}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
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
