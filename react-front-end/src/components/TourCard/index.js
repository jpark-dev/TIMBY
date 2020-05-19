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
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import BookingModal from './bookingModal';
import EventIcon from '@material-ui/icons/Event';
import Carousel from 'react-material-ui-carousel'
import CardMedia from '@material-ui/core/CardMedia';
import fetchMediaForTour from '../../helpers/fetchMediaForTour';

import getHostName from '../../helpers/getHostName';
import getTourRating from '../../helpers/getTourRating';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
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
  },
  media: {
    height: 140,
  },
  paper: {
    position: 'absolute',
    width: 400,
    top: '25vh',
    backgroundColor: 'transparent',
  },
  label: {
    flexDirection: 'column'
  },
  fixedDoubleLine: {
    height: "40px"
  },
  noMargin: {
    margin: "0"
  },
  fixedWidth: {
    width: "327px"
  },
  fixedWidth40: {
    width: "40px"
  }
}));

const TourCard = (props) => {
  const classes = useStyles();
  const [name, setName] = useState();
  const [rating, setRating] = useState();
  const [open, setOpen] = useState(false);
  const [tourImages, setTourImages] = useState([]);

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

      fetchMediaForTour(props.id)
        .then(media => {
          const imagePaths = [];
          media.forEach((object) => {
            imagePaths.push(object.src);
          })
          setTourImages(imagePaths);
        })
        .catch(error => console.log(error))
    }
  }, [props]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root} borderradius={25}>
      <CardHeader
        avatar={<Avatar aria-label="tour guide avatar" src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.large} />}
        action={
          <IconButton classes={{ label: classes.label }} color="primary" onClick={handleOpen} >
            <EventIcon />
            <Typography variant="subtitle1">
              Book
            </Typography>
          </IconButton>
        }
        title={props.title}
        subheader={`Host: ${name}`}
      />
      <Carousel indicators={false}>
        {
          tourImages.map((image, index) => <CardMedia
            key={index}
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />)
        }
      </Carousel>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.fixedDoubleLine}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.fixedWidth}>
        <Button size="small" color="primary" >
          <LocalOfferIcon /> <span className={classes.fixedWidth40}>${props.price}</span>
        </Button>
        <Button size="small" color="primary">
          <ScheduleIcon /> {props.date_time ? new Date(props.date_time).toLocaleTimeString('en-US', { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }) : null}
        </Button>
        <Button size="small" color="primary">
          <StarIcon /> {rating}
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <BookingModal close={handleClose} {...props} />
        </div>
      </Modal>
    </Card>
  )
}

export default TourCard;
