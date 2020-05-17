import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import BookingStatus from "./BookingStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    marginTop: "8px",
  },
  textCenter: {
    textAlign: "center",
    marginTop: "4px",
  },
}));

export default function BookingForListing(props) {
  const classes = useStyles();

  const booking = props.bookings.map((booking) => {
    return <BookingStatus key={booking.id} booking={booking} />;
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={5} className={classes.textCenter}>
          Name
        </Grid>
        <Grid item xs={7} className={classes.textCenter}>
          Status
        </Grid>
      </Grid>
      <hr />
      {booking}
    </div>
  );
}
