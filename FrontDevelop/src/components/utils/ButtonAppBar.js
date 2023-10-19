import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import TextField from '@mui/material/TextField';
import { deepOrange } from "@mui/material/colors";
import { useState, useEffect } from "react";
import MyCharger from "../MapPage/MyCharger";
import Joyride, { STATUS } from "react-joyride";
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Input from '@mui/material/Input';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Tooltip  } from 'antd';
import transaction from '../../matirial/Image/transaction.png';
import chat from '../../matirial/Image/wechat.png';
import chargerIcon from '../../matirial/Image/chargerIcon.png';
import { Radio, Space, Divider } from 'antd';
import  { SizeType } from 'antd/es/config-provider/SizeContext';
import { PoweroffOutlined } from '@ant-design/icons';
export default function ButtonAppBar({
                                         transactionpage,
                                         adminpage,
                                         myChargers,
                                         showLiveChat,
                                         toggleLiveChat
                                     }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [run, setRun] = useState(true);
    //Popper Function
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

    const steps = [
        {
            target: ".first-step",
            content: "Clicking Avatar for more functions",
            position: "left",
        },
        {
            target: ".btn-dark-mode",
            content: "You can switch to Dark Mode if needed",
        },
    ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
    }
  };

  const logout = () => {
    localStorage.setItem("user", null);
    navigate("/login");
  };
  const text = <span style={{color:'black'}}>click here to edit your profile</span>;
  
const btnProps = {
  style: {
    width: 30,
  },
};


  useEffect(
    function () {
      document.documentElement.classList.toggle("dark-mode");
    },
    [isDark]
  );
  return (
    <>
      <Box sx={{ flexGrow: 1, zIndex: 1250 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#F3F3F3", zIndex: 1350 }}
        >
          <Toolbar>
            <Joyride
              continuous={true}
              run={run}
              showProgress={true}
              showSkipButton={true}
              hideCloseButton={true}
              steps={steps}
              styles={{
                tooltip: {
                  transform: "translate(-100px, 30px)",
                  width: "300px",
                },
                beacon: {
                  transform: "translate(0px, 30px)",
                },
              }}
            />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
              onClick={() =>
                  drawerOpen === true ? setDrawerOpen(false) : setDrawerOpen(true)
              }
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              EV Shared Charger
            </Typography>
            <button
              onClick={() => setIsDark((isDark) => !isDark)}
              className="btn-dark-mode"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? "🌙" : "☀️"}
            </button>
            <Avatar
              className="first-step"
              sx={{ bgcolor: deepOrange[300], cursor: "pointer" }}
              // onClick={() =>
              //   drawerOpen === true ? setDrawerOpen(false) : setDrawerOpen(true)
              // }
              onClick={handleClick('bottom-end')}
            >
              {firstLetter} {/* Replaced 'A' with the firstLetter */}
            </Avatar>
          </Toolbar>
        </AppBar>
        <Popper  style={{ zIndex: 1400 }} open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper style={{width:300}}>
                  {/* <div style={{ width: 300, height:500}}><br></br> */}
                  <Card sx={{ marginTop:1, Width: 100, height:400, backgroundColor:'#E2E2E2'}}>
                    <CardContent>
                      <Card sx={{ Width: 280, height:80, backgroundColor:'#ddeaf7'}}>
                        <CardContent>
                          <Box sx={{display:"inline-block", width:20}}>
                          <div
      style={{
        display: 'flex',
        marginLeft: 195,
        marginTop:'-10px',
        clear: 'both',
        whiteSpace: 'nowrap',
        zIndex:1900,
        columnGap:8,
        opacity:'50'
      }}
    >

                          <Tooltip zIndex='9999' color='#f3f3f3' placement="topRight" title={text}>
        <Button onClick={() => navigate("/ProfilePage")}{...btnProps}>⚙️</Button>
      </Tooltip></div>
                             
                            <Avatar
                                className="first-step"
                                sx={{ marginTop:"-25px", bgcolor: deepOrange[300]}}
                            >
              {firstLetter} {/* Replaced 'A' with the firstLetter */}
                            </Avatar>
                          </Box>
                          <Box sx={{ marginTop:-7,marginLeft:9, width: '60%'}}>
                            <p style={{fontWeight:"400", fontSize:'20px'}}>UserName</p>
                            <p style={{marginTop:"-15px",fontSize:"10px"}}>121212@outlook.com</p>
                          </Box>
                        </CardContent>

                      </Card>
                      <Card sx={{ Width: 280, height:280, marginTop:'5px',backgroundColor:'#EDF2FF'}}>
                        <CardContent>
                          <List subheader={
                            <ListSubheader style={{backgroundColor:'#EDF2FF',marginLeft:'-15px',marginTop:'-10px',height:'40px'}}component="div" id="nested-list-subheader">
                              Options
                            </ListSubheader>
                          }><hr></hr>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                <img src={transaction}/>
                                </ListItemIcon>
                                <ListItemText primary="Transaction" onClick={transactionpage} />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <img src={chat}/>
                                </ListItemIcon>
                                <ListItemText primary="LiveChat" onClick={toggleLiveChat} />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                <img src={chargerIcon}/>
                                </ListItemIcon>
                                <ListItemText primary="MyCharger" onClick={myChargers}/>
                              </ListItemButton>
                            </ListItem>
                            <Button type="primary" shape="round" icon={<PoweroffOutlined />} size={'large'} onClick={logout}>
            Log out
          </Button>
                          </List>

                        </CardContent>

                      </Card>
                      <CardContent>
                      </CardContent>
                    </CardContent>
                  </Card>
                </Paper>
              </Fade>
          )}
        </Popper>
      </Box>
    </>
  );
}

