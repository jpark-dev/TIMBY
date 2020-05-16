import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarIcon from '@material-ui/icons/Star';
import ExploreIcon from '@material-ui/icons/Explore';
import Button from '@material-ui/core/Button';


import getHostName from '../../helpers/getHostName';
import getTourRating from '../../helpers/getTourRating';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  iconSize: {
    fontSize: 10
  },
  cardBottom: {
    display: 'flex'
  }
}));

const TourCard = (props) => {
  const classes = useStyles();
  const [name, setName] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    if (props.host_id) {
      getHostName(props.host_id)
        .then(name => {
          setName(name);
        })
        .catch(error => console.log(error))
    }
    if (props.id) {
      getTourRating(props.id)
        .then(rating => {
          setRating(rating);
        })
        .catch(error => console.log(error))
    }
  }, [props]);

  return (
    <Card className={classes.root} borderradius={25}>
      <CardHeader
        avatar={<Avatar aria-label="tour guide avatar" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />}
        // action={
        //   <IconButton color="primary" onClick={() => props.toggleMap()} >
        //     <ExploreIcon fontSize="small" />
        //   </IconButton>
        // }
        title={props.title}
        subheader={`Host: ${name}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <LocalOfferIcon /> ${props.price}
        </Button>
        <Button size="small" color="primary">
          <ScheduleIcon /> {props.date_time ? new Date(props.date_time).toLocaleTimeString('en-US', { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }) : null}
        </Button>
        <Button size="small" color="primary">
          <StarIcon /> {rating}
        </Button>
      </CardActions>
    </Card>
  )
}

export default TourCard;
