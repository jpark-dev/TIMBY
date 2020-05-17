import axios from "axios";
import notifyUser from "./notifyUser";

export default function declineBooking(bookingID, tourName, userID) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/bookings/${bookingID}`, {
      status: "Declined",
    })
    .then((res) => {
      notifyUser(userID, `Your booking for ${tourName} has been declined!`);
    })
    .catch((err) => console.log(err));
}
