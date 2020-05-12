import React from 'react';
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

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(192,192,192,0.2)',
    backgroundImage: "url(https://www.transparenttextures.com/patterns/sandpaper.png)"
  }
});

const TourCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="tour guide avatar" src="https://material-ui.com/static/images/avatar/1.jpg" />}
        title={props.title}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="price">
          <LocalOfferIcon /> {props.price}
        </IconButton>
        <IconButton aria-label="duration">
          <ScheduleIcon /> {props.duration}
        </IconButton>
        <IconButton aria-label="rating">
          <StarIcon /> {props.rating}
        </IconButton>
        <IconButton aria-label="delete" onClick={() => props.toggleMap()} >
          <ExploreIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TourCard;
