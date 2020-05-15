import axios from "axios";

export default function requestTours() {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/tours`)
    .then(res => {
      return res.data.tours
    })
    .catch(err => console.log(err));
}
