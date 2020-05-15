import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import TransitionsModal from '../Bookings/TransitionsModal';

import fetchMediaForTour from '../../helpers/fetchMediaForTour';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '20px 0'
  },
  tourDetails: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const [status, setStatus] = useState(props.status);
  const [tourImages, setTourImages] = useState([]);

  const tourDateTime = new Date(props.date_time);

  useEffect(() => {
    fetchMediaForTour(props.id)
      .then(media => {
        const imagePaths = [];
        media.forEach((object) => {
          imagePaths.push(object.src);
        })
        setTourImages(imagePaths);
      })
      .catch(error => console.log(error));
  }, [props.tour_id]);

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          component="img"
          alt={props.title}
          height="80"
          image={tourImages[0]}
          title={props.title}
        />
        <CardContent>
          <div className={classes.tourDetails}>
            <Typography gutterBottom variant="h6" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body1" component="span">
              {props.city}
            </Typography>
          </div>
          <Typography variant="body2" component="span">
              {tourDateTime.toLocaleString("en-US", {year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true})}
          </Typography>
          <CardActions className={classes.tourDetails}>
            <Typography variant="body1" component="h6">
              {status}
            </Typography>
            <TransitionsModal setStatus={(p) => setStatus(p)} {...props} />
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
