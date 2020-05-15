import axios from 'axios';

export default function submitFeedback(bookingID, rating, comment) {
  return axios.post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}/feedback`, {
    rating,
    comment
  })
  .then(res => res)
  .catch(err => console.log(err));
};