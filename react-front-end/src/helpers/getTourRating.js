import axios from 'axios';

export default function getTourRating(userID) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users/profile/${userID}`)
    .then(res => {
      return 4.6;
    })
    .catch(err => console.log(err));
}
