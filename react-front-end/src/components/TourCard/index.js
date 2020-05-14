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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    // backgroundImage: "url(https://www.transparenttextures.com/patterns/sandpaper.png)"
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

  return (
    <Card className={classes.root} borderradius={25}>
      <CardHeader
        avatar={<Avatar aria-label="tour guide avatar" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />}
        action={
          <IconButton color="primary" onClick={() => props.toggleMap()} >
            <ExploreIcon fontSize="small" />
          </IconButton>
        }
        title={props.title}
        subheader="Host: Walt Frasier"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <LocalOfferIcon /> 05.24.2020
        </Button>
        <Button size="small" color="primary">
          <StarIcon /> {props.rating}
        </Button>
        <Button size="small" color="primary">
          <ScheduleIcon /> 9:00 AM
        </Button>
      </CardActions>
    </Card>
  )
}

export default TourCard;
