import axios from 'axios';

export default function fetchBookingsForUser(id) {
  return axios.get(`${process.env.REACT_APP_API_URL}/bookings/user/${id}`)
    .then(res => res.data.bookings)
    .catch(error => console.log(error));
};