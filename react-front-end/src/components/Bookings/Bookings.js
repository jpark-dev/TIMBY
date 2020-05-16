import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser';
import Booking from './Booking';

import './bookings.css'

export default function Bookings () {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookingsForUser(localStorage.getItem('userID'))
      .then(bookings => {
        setBookings(bookings);
      })
      .catch(error => console.log(error));
  }, []);

  return(
    <div className="bookings-container">
      {!bookings[0] && <LoadingSpinner />}
      {bookings && bookings.map(booking => (
        <Booking key={booking.id} {...booking} />
      ))}
    </div>
  )
};

