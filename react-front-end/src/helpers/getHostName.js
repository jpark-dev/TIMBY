import axios from 'axios';

export default function requestHostName(userID) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users/profile/${userID}`)
    .then(res => {
      return res.data.user.name;
    })
    .catch(err => console.log(err));
}
