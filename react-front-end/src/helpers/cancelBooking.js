import axios from 'axios';
import notifyUser from './notifyUser';

export default function cancelBooking(bookingID, hostID, tourName, userID) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}`, {
    status: 'Cancelled'
  })
  .then(res => {
    // notifyUser(userID, `Your booking for ${tourName} was successfully cancelled!`);
    notifyUser(hostID, `A user has cancelled their booking for ${tourName}`);
  })
  .catch(err => console.log(err));
};