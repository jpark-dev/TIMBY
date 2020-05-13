import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cancelBooking from '../../helpers/cancelBooking';
import confirmBooking from '../../helpers/confirmBooking';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const [status, setStatus] = useState(props.status);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image="/docs/vancouver_gastown_00.jpg"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="body1" component="h6">
            {status}
          </Typography>
          <Typography variant="body2" component="p">
            Booking ID: {props.id}
          </Typography>
          <Typography variant="body2" component="p">
            Host userID: {props.host_id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
        <Button onClick={() => cancelBooking(props.id, props.host_id, props.title, props.user_id).then(() => setStatus("Cancelled"))} size="small" color="primary">
          Cancel
        </Button>
        <Button onClick={() => confirmBooking(props.id, props.title, props.user_id).then(() => setStatus("Confirmed"))} size="small" color="primary">
          Confirm
        </Button>
      </CardActions>
    </Card>
  );
}
