import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Popup from './Popup'
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'flex-end',
        overflowX: 'auto',
        background: '#ffffff',
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
        color: 'black',
        padding: theme.spacing(2),
        flexShrink: 0,
    },
  }))

export default function Navbar(){
    const [renderPopup, setRender] = React.useState(false)
    const [loginText, setLoginText] = React.useState("Login")
    const classes = useStyles()
    const history = useHistory();
    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setLoginText("Dashboard")
          } else{
              setLoginText("Login")
          }
        });
      }, [])
    return (<React.Fragment>
        <AppBar position="sticky">
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
            <Link
            color="inherit"
            noWrap
            variant="body2"
            href="/"
            className={classes.toolbarLink}
            > Home </Link>
            <Button variant="outlined" size="small" onClick={()=>{
                if(loginText==="Login")
                    setRender(true)
                else
                    history.push('/dashboard')
            }}>
                {loginText}
            </Button>
            <Popup formState={1} hide diagTitle="Welcome back! 👋" diagText="Enter your email and password to log in. If you do not have an account please register first."
           open={renderPopup} onLogin={()=>{history.push('/dashboard')}} handleClose={()=>{setRender(false)}}/>
        </Toolbar>
        </AppBar>
    </React.Fragment>)
}