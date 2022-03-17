import { AppBar, Toolbar, Typography, makeStyles ,Button } from "@material-ui/core";
import React from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Tables from './Tables';
import Dashboard from './Dashboard';
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
      label: <HelpOutlineIcon />,
      href: "/listings",
    },
    {
      label: <SettingsIcon />,
      href: "/mentors",
    },
    {
      label: <AccountCircleIcon />,
     href: "/account",
    },
    {
      label: "ROSS GELLER",
     href: "/logout",
    },
    {
      label: "LOGIN ",
     href: "/login",
    },
    
    // {
    //   label: <Button variant="contained" className="button">CREATE WORK ORDER</Button>,
    //  href: "/newlogin",
    // },
    
  ];

  // <Button variant="contained">Contained</Button>
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fafafa",
    paddingRight: "79px",
    paddingLeft: "50px",
    height:'120px',
    
   // ml:200,
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#212121",
    textAlign: "left",
   // ml:200,
  },
  toolbar: {
    display: "flex",
    color: "#212121",
    justifyContent: "space-between",
    paddingLeft: "50px",
  },
  icon:{
    //display: "flex",
    justifyContent: "space-between",
    paddingRight: "9px",
    paddingTop:'2px',
    color:"#1a237e"
   // mt:20,
  },
  dash:{
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#212121",
    textAlign: "left",
    paddingTop:'20px',
  },
  stacks:{
    marginTop:'100px'
  },
  btn:{
    color:'red',
    mr:'300px',
  }
}));



export default function Header() {
  const { header, logo,toolbar ,icon,btn,stacks} = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };
 

  const femmecubatorLogo = (
    <div>
    <Typography variant="h6" component="h6" className={logo}>
    <CheckBoxOutlineBlankIcon className={icon} />
      Work Orders
    </Typography>
    <div className="stack">
    <Stack direction="row" spacing={1}>
    <Button href="#text-buttons">Dashboard </Button>
    <Button href="#text-buttons">Work ORDER </Button>
    <Button variant="contained" href="/newlogin">CREATE WORK ORDER</Button>
   </Stack>
    
    </div>
    </div>
  );
  const dash = (
    <Typography  className={logo}>
    {/* <CheckBoxOutlineBlankIcon className={icon} /> */}
      Dashboard  Work Orders 
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label,href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
        // <Button variant="contained">Contained</Button>

      );
    });
  };

  return (
    <div>
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
      <h1>Hello react</h1>
    </header>
    {/* <Dashboard /> */}
        {/* <Tables /> */}
      
  
        {/* <Temp /> */}
      
        </div>
  );
}
              