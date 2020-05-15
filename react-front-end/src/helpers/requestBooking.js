import axios from 'axios';
import notifyUser from './notifyUser';

export default function requestBooking(tourID, hostID, userID, tourName) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings`, {
    tourID,
    userID
  })
  .then(res => {
    notifyUser(hostID, `You have a new booking request for ${tourName}`);
  })
  .catch(err => console.log(err));
};