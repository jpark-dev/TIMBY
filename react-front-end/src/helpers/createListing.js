import axios from "axios";

export default function createListing(
  id,
  host_id,
  title,
  description,
  city,
  lat,
  lng,
  date_time,
  duration,
  min_users,
  max_users,
  tour_status,
  price
) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/listings`, {
      id,
      host_id,
      title,
      description,
      city,
      lat,
      lng,
      date_time,
      duration,
      min_users,
      max_users,
      tour_status,
      price,
    })
    .then((res) => {
      res;
    })
    .catch((err) => console.log(err));
}
