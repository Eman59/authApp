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
            <Link to="/login" className="nav-link" onClick={handleAuth}><Button color="inherit">Login</Button></Link>
            </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}
