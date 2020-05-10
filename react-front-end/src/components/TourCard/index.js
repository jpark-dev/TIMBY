import React from 'react';
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

const TourCard = (props) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="tour guide avatar">T</Avatar>}
        title="Tour de Breweries"
        subheader="May 22, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Short description about the tour / event and what it entails.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="price">
          <LocalOfferIcon /> {props.price}
        </IconButton>
        <IconButton aria-label="duration">
          <ScheduleIcon /> {props.duration}
        </IconButton>
        <IconButton aria-label="rating">
          <StarIcon /> {props.rating}
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TourCard;
