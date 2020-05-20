import axios from 'axios';

export default function getTourRating(tour) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users/profile/1`)
    .then(res => {
      switch (tour) {
        case 1:
          return 4.6;
        case 2:
          return 4.7;
        case 3:
          return 4.5;
        default:
          return 4.7;
      }
    })
    .catch(err => console.log(err));
}
