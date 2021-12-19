import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import "./headerStyles.css";
import { Route, Switch, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

export default function ButtonAppBar() {
  const handleAuth = () => {
    console.log('clicked')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                <AccountCircleSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                Guest
            </Typography>
            <Link to="/" className="navLink" onClick={handleAuth}><Button color="inherit">Home</Button></Link>
            <Link to="/login" className="navLink" onClick={handleAuth}><Button color="inherit">Login</Button></Link>
            </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </>
  );
}
