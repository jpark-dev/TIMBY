import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import fetchBookingsForListing from "../../helpers/fetchBookingsForListing";
import BookingForListing from "./BookingForListing";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    outline: "none",
  },
}));

export default function ListingBookings(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [bookingCnt, setBookingCnt] = useState(props.booking_cnt || 0);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchBookingsForListing(props.id)
      .then(bookings => {
        setBookings(bookings);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Button onClick={handleOpenModal}>Current bookings: {bookingCnt}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.card}>
            <div className={classes.closeButton}>
              <Button onClick={handleCloseModal}>
                <CloseIcon />
              </Button>
            </div>
            <Typography gutterBottom variant="h5" component="h2">
              Current Bookings
            </Typography>
            <Typography
              component="p"
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.title}
            </Typography>
            {bookings !== undefined && (
              <BookingForListing key={bookings.id} bookings={bookings} />
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
