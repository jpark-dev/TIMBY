import React, { useState, useEffect } from 'react';
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser';
import requestBooking from '../../helpers/requestBooking';
import ImgMediaCard from './ImgMediaCard';
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
      <h1>Bookings</h1>
      <button onClick={() => requestBooking(4, 3, 7, "Tour de Breweries").then(res => res)}>Book Tour 1</button>
      {bookings.map(booking => (
        <ImgMediaCard key={booking.id} {...booking} />
      ))}
    </div>
  )
};

