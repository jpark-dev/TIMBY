import axios from 'axios';

export default function fetchListingsForUser(id) {
  return axios.get(`${process.env.REACT_APP_API_URL}/listings/user/${id}`)
    .then(res => res.data.listings)
    .catch(error => console.log(error));
};