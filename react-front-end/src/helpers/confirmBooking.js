import axios from 'axios';

export default function confirmBooking(bookingID) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}`, {
    status: 'Confirmed'
  })
  .then(res => res)
  .catch(err => console.log(err));
};