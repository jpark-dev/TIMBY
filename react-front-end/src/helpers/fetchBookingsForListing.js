import axios from "axios";

export default function fetchBookingsForListing(id) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/bookings/listing/${id}`)
    .then((res) => res.data.bookings)
    .catch((error) => console.log(error));
}
