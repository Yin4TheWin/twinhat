import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Disc from '../images/loading.gif'
import { Helmet } from 'react-helmet'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          TwinHat
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(20),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    },
  }));

export default function LoadingScreen(){
    const classes = useStyles();
    return(<Container component="main" maxWidth="xs">
      <Helmet>
        <title>{"Loading..."}</title>
      </Helmet>
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar} src={Disc}>
      </Avatar>
      <br></br>
      <Typography component="h1" variant="h5">
        Loading...
      </Typography>
      <br></br>
      <Typography>
          Just a sec!
      </Typography>
    </div>
    <Box mt={8}>
        <Copyright />
      </Box>
  </Container>)
}