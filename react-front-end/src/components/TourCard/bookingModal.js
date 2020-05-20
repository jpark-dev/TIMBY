import React from 'react';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";

import requestBooking from '../../helpers/requestBooking';

const useStyles = makeStyles(theme => ({
  center: {
    justifyContent: "center"
  }
}));

const BookingModal = (props) => {
  const classes = useStyles();

  console.log(props)
  return (
    <Card >
      <CardActions className={classes.center}>
        <IconButton
          aria-label="Book"
          onClick={() => {
            requestBooking(
              props.id,
              props.host_id,
              parseInt(localStorage.getItem('userID')),
              props.title
            )
            .then(() => props.close());
          }}
        >
          <EventAvailableIcon /> Book Event
        </IconButton>
        <IconButton className={'cancel-button'} aria-label="Close" onClick={() => { props.close() }}>
          <CloseIcon /> Cancel
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BookingModal;
