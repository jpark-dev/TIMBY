import axios from 'axios';
import notifyUser from './notifyUser';

export default function confirmBooking(bookingID, tourName, userID) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}`, {
    status: 'Confirmed'
  })
  .then(res => {
    notifyUser(userID, `Your booking for ${tourName} has been confirmed!`);
  })
  .catch(err => console.log(err));
};