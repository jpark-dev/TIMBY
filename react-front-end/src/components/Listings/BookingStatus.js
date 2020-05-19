import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import confirmBooking from "../../helpers/confirmBooking";
import declineBooking from "../../helpers/declineBooking";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  fullWidthButton: {
    width: "-webkit-fill-available",
    margin: theme.spacing(1),
  },
  verticalCenter: {
    alignSelf: "center",
  },
}));

export default function BookingStatus(props) {
  const [booking, setBooking] = useState(props.booking);
  const [status, setStatus] = useState(props.booking.status);

  const confirm = (booking) => {
    confirmBooking(booking.id, booking.title, booking.user_id)
      .then(() => {
        setStatus("Confirmed");
      })
      .catch((err) => console.log(err));
  };

  const decline = (booking) => {
    declineBooking(booking.id, booking.title, booking.user_id)
      .then(() => {
        setStatus("Declined");
      })
      .catch((err) => console.log(err));
  };
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={5} className={classes.verticalCenter}>
        {booking.name}
      </Grid>
      <Grid item xs={7}>
        {booking.status === "Confirmed" && (
          <Button
            className={classes.fullWidthButton}
            variant="outlined"
            color="primary"
          >
            {booking.status}
          </Button>
        )}
        {booking.status === "Declined" && (
          <Button
            className={classes.fullWidthButton}
            variant="outlined"
            color="secondary"
          >
            {booking.status}
          </Button>
        )}
        {booking.status === "Cancelled" && (
          <Button
            className={classes.fullWidthButton}
            variant="outlined"
            color="secondary"
          >
            {booking.status}
          </Button>
        )}
        {booking.status === "Pending" && (
          <>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => confirm(booking)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => decline(booking)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
}
