import React, { useState, useEffect } from 'react';
import fetchBookingsForUser from '../../helpers/fetchBookingsForUser';
import requestBooking from '../../helpers/requestBooking';
import ImgMediaCard from './ImgMediaCard';

export default function Bookings () {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookingsForUser(localStorage.getItem('userID'))
      .then(bookings => {
        setBookings(bookings);
      });
  }, []);

  return(
    <>
      <h1>Bookings Route!</h1>
      <h3>All Bookings:</h3>
      {bookings.map(booking => (
        <ImgMediaCard key={booking.id} {...booking} />
      ))}
      <button onClick={() => requestBooking(1, 1, 7, "Tour de Breweries").then(res => res)}>Book Tour 1</button>
    </>
  )
};

