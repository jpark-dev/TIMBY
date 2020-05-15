import React, { useState, useEffect } from 'react';
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser';
// import requestBooking from '../../helpers/requestBooking';
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
      <h3>Bookings</h3>
      {/* <button onClick={() => requestBooking(4, 3, 7, "Tour de Breweries").then(res => res)}>Book Tour 1</button> */}
      {bookings.map(booking => (
        <Booking key={booking.id} {...booking} />
      ))}
    </div>
  )
};

