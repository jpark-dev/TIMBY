import axios from 'axios';

export default function requestBooking(tourID, userID) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings`, {
    tourID,
    userID
  })
  .then(res => res)
  .catch(err => console.log(err));
};