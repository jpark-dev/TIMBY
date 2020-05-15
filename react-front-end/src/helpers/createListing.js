import axios from "axios";
import notifyUser from "./notifyUser";

export default function createTour(
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
      notifyUser(hostID, `You have created a new tour listing: ${tourName}`);
    })
    .catch((err) => console.log(err));
}
