import axios from 'axios';

export default function cancelBooking(bookingID, userID, hostID) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}`, {
    status: 'Cancelled'
  })
  .then(res => res)
  .catch(err => console.log(err));
};