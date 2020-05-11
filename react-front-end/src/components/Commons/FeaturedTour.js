import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedTour(props) {
  const classes = useStyles();
  const { tour } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {tour.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {tour.date}
              </Typography>
              <Typography variant="subtitle1">
                {tour.description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={tour.image} title={tour.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

FeaturedTour.propTypes = {
  tour: PropTypes.object,
};