import axios from "axios";

export default function requestUserProfile(userID) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/users/profile/${userID}`)
    .then(res => {
      return res.data.user
    })
    .catch(err => console.log(err));
};
