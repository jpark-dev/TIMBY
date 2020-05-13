import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TransitionsModal from './TransitionsModal';

import cancelBooking from '../../helpers/cancelBooking';
import confirmBooking from '../../helpers/confirmBooking';
import fetchMediaForTour from '../../helpers/fetchMediaForTour';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '20px 0'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const [status, setStatus] = useState(props.status);
  const [tourImages, setTourImages] = useState([]);

  const tourDateTime = new Date(props.date_time);

  useEffect(() => {
    fetchMediaForTour(props.tour_id)
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
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={tourImages[0]}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="body2" component="p">
            Hosted By {props.host_name} ({props.host_phone})
          </Typography>
          <Typography variant="body2" component="p">
            {tourDateTime.toLocaleString("en-US", {year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true})}, {props.duration / 60} hours
          </Typography>
          <Typography variant="body2" component="p">
            {props.city}
          </Typography>
          <Typography variant="body1" component="h6">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <TransitionsModal {...props} />
        <Button onClick={() => cancelBooking(props.id, props.host_id, props.title, props.user_id).then(() => setStatus("Cancelled"))} size="small" color="primary">
          Cancel
        </Button>
        {/* <Button onClick={() => confirmBooking(props.id, props.title, props.user_id).then(() => setStatus("Confirmed"))} size="small" color="primary">
          Confirm
        </Button> */}
      </CardActions>
    </Card>
  );
}
