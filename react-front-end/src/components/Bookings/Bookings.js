import React, { useState, useEffect } from 'react';
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser';
import Booking from './Booking';

import './bookings.css'

export default function Bookings () {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookingsForUser(localStorage.getItem('userID'))
      .then(bookings => {
        setBookings(bookings);
      });
  }, []);

  return(
    <div className="bookings-container">
      {bookings.map(booking => (
        <Booking key={booking.id} {...booking} />
      ))}
    </div>
  )
};

