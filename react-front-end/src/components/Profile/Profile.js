import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BotNav from '../BotNav';
import FeaturedTour from './FeaturedTour';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(2, 0),
  },
  heroImg: {
    width: '100%',
    padding: '16px 0px',
    opacity: '70%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const featuredTours = [
  {
    title: 'UBC campus tour',
    date: '10/May/2020',
    description:
      'A social distancing tour in UBC campus.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Romantic Whistler',
    date: '15/Jan/2020',
    description:
      'Meet your soulmate in snowy Whistler!',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

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
      <main>
        <Container MaxWidth='lg'>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <section>
              <img className={classes.heroImg} src="https://img.wallpapersafari.com/desktop/1920/1080/94/56/qwzhmC.jpg" alt="background"/>
            </section>
          </div>
          {/* <Grid item xs={4}>
            <Paper className={classes.paper}>Profile photo </Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid>
              <Paper className={classes.paper}>Harry Potter </Paper>
              <Paper className={classes.paper}>4.2/5 </Paper>
              <Paper className={classes.paper}>harry@potter.com </Paper>
            </Grid>
          </Grid> */}
          <Grid container spacing={4}>
            {featuredTours.map(tour => ( 
              <FeaturedTour key={tour.title} tour={tour} />
            ))}
          </Grid>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Logout
          </Button>
        </Container>
      </main>
      <footer>
        <BotNav />
      </footer>
    </>
  )
};
