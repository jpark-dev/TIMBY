import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import BookingDetails from './BookingDetails';

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

  const tourDateTime = new Date(props.date_time);

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image_src}
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
            <BookingDetails setStatus={(p) => setStatus(p)} {...props} />
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
