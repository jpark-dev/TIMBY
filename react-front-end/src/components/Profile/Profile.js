import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(2, 0),
  },
  heroImg: {
    width: '100%',
    opacity: '70%',
  },
}));

export default function Profile() {

  const classes = useStyles();

  return(
    <>
      {/* CssBaseline globally resets css just like normalize.css */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            User Profile
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <header className={classes.heroContent}>
        <section>
          <img className={classes.heroImg} src="https://img.wallpapersafari.com/desktop/1920/1080/94/56/qwzhmC.jpg"/>
        </section>
      </header>
      <main>
        <div>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Profile photo </Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid>
              <Paper className={classes.paper}>Harry Potter </Paper>
              <Paper className={classes.paper}>4.2/5 </Paper>
              <Paper className={classes.paper}>harry@potter.com </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Tour 1 </Paper>
            <Paper className={classes.paper}>Tour 2 </Paper>
            <Paper className={classes.paper}>Tour 3 </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Logout </Paper>
          </Grid>
        </div>

      </main>
    </>
  )
};