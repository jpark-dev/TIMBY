import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FeaturedTour from './FeaturedTour';



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


// const featuredTours = [
//   {
//     title: 'Cu tour',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

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
        {/* <Grid container spacing={4}>
          {featuredTours.map(tour => ( 
            <FeaturedTour key={tour.title} tour={tour} />
          ))}
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>Logout </Paper>
        </Grid>
      </main>
    </>
  )
};
