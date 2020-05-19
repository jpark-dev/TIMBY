import React from 'react';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CloseIcon from '@material-ui/icons/Close';

import requestBooking from '../../helpers/requestBooking';

const BookingModal = (props) => {
  console.log(props)
  return (
    <Card >
      <CardActions>
        <IconButton
          aria-label="Book"
          onClick={() => {
            requestBooking(
              props.id,
              props.host_id,
              parseInt(localStorage.getItem('userID')),
              props.title
            )
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
