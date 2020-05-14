import axios from 'axios';

export default function fetchMediaForTour(tourID) {
  return axios.get(`${process.env.REACT_APP_API_URL}/media/tour/${tourID}`)
    .then(res => res.data.media)
    .catch(error => console.log(error));
};