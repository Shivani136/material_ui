import { AppBar, Toolbar, Typography, makeStyles ,Button } from "@material-ui/core";
import React from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Table from './Table';

const headersData = [
    {
      label: <HelpOutlineIcon />,
     // href: "/listings",
    },
    {
      label: <SettingsIcon />,
     // href: "/mentors",
    },
    {
      label: <AccountCircleIcon />,
     // href: "/account",
    },
    {
      label: "Ross Geller",
     // href: "/logout",
    },
    
  ];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fafafa",
    paddingRight: "79px",
    paddingLeft: "50px",
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
}));



export default function Header() {
  const { header, logo,toolbar ,icon} = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };
 

  const femmecubatorLogo = (
    <Typography variant="h6" component="h6" className={logo}>
    <CheckBoxOutlineBlankIcon className={icon} />
      Work Orders
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
           // to: href,
            //component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <div>
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
      {/* <h1>ddfijgj</h1> */}
    </header>
        {/* <Table /> */}
        </div>
  );
}
