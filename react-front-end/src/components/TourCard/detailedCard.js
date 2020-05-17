import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Grid } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CloseIcon from '@material-ui/icons/Close';

import requestBooking from '../../helpers/requestBooking';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const DetailedCard = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    < Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={puturlhere}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid item container direction="column" spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {props.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <ScheduleIcon />{props.date_time}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {props.city}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  ${props.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label="Book"
          onClick={() => {
            requestBooking(
              props.host_id,
              parseInt(localStorage.getItem('userID')))
          }}
        >
          <EventAvailableIcon /> Book Event
        </IconButton>
        <IconButton aria-label="Close" onClick={() => { props.close() }}>
          <CloseIcon /> Cancel
        </IconButton>
      </CardActions>
    </Card >
  );
}

export default DetailedCard;
