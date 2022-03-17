import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './Header';
//import Login from '../LoginPage/Login';


import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  // drawer: {
  //   bgcolor: 'darkblue',
  //   color: 'white',
  // },
  arrow: {
   paddingBottom:'370px',
   //paddingLeft:'2px'
   //paddingRight:'1px',
    // ml:200,
  },
  
}));
const drawerWidth = 50;
export default function Sidebar() {
  const { drawer , arrow} = useStyles();
  return (
    <Box sx={{ display: 'flex', }} >
     <Header />
     {/* <Login /> */}
     <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
           width: drawerWidth,
            position:'fixed',
            bgcolor: 'darkblue',
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DoubleArrowIcon sx={{ color: 'white',ml:2 }} />
         <List>
          {['I', 'S', 'S', 'D'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <DoubleArrowIcon sx={{ color: 'white' , }} />
                  : <CheckBoxOutlineBlankIcon sx={{ color: 'white' }}/>
                  }
              </ListItemIcon>
               </ListItem>
          ))}
        </List>
     <List>
          {['A', 'T', 'S'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
            
              </ListItemIcon>
              </ListItem>
              
          ))}
          
          <ArrowBackIcon className={arrow} />
          <CheckBoxOutlineBlankIcon sx={{ color: 'white'}}/>

        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }} >
    </Box> */}
    </Box>
  );
}
