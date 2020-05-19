import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import fetchBookingsForUser from "../../helpers/fetchBookingsForUser";
import Booking from "./Booking";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  mainWrapper: {
    width: "90%",
    margin: "0 auto",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background:
      "url(https://pixabay.com/get/52e3d4434e51a414f6da8c7dda35367b1d36d6e75357744f_1280.jpg)",
    zIndex: -1,
    paddingTop: "60px",
  },
}));

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetchBookingsForUser(localStorage.getItem("userID"))
      .then(bookings => {
        setBookings(bookings);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className={classes.mainWrapper}>
      <Container>
        {!bookings[0] && <LoadingSpinner />}
        {bookings &&
          bookings.map(booking => <Booking key={booking.id} {...booking} />)}
      </Container>
    </main>
  );
}
