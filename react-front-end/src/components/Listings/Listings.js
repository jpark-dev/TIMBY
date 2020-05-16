import React, { useState, useEffect } from "react";
import fetchListingsForUser from "../../helpers/fetchListingsForUser";
import Listing from "./Listing";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import createListing from "../../helpers/createListing";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  newButton: {
    margin: theme.spacing(8, 0, 1),
    width: "100%",
    position: "relative",
    fontSize: "xx-large",
    fontWeight: "bold",
    backgroundColor: "rgba(63, 81, 181, 0.5)"
  },
  bgCover: {
    width: "90%",
    margin: "0 auto",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background:
      "url(https://newevolutiondesigns.com/images/freebies/city-wallpaper-18.jpg)",
    zIndex: -1,
  },
}));

const createTour = () => {
  createListing(
    5,
    3,
    "new tour",
    "test tour for testing",
    "Vancouver",
    "49.274950",
    "-123.122628",
    "2020-05-24 18:00:00",
    300,
    1,
    4,
    "unconfirmed",
    10.99
  ).then(res => res)
  .catch(err => console.log(err))
};

export default function Listings() {
  const [listings, setListings] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetchListingsForUser(localStorage.getItem("userID")).then((listings) => {
      setListings(listings);
    });
  }, []);

  return (
    <main className={classes.bgCover}>
      <Container>
        <Button
          className={classes.newButton}
          variant="outlined"
          color="primary"
          href="#new"
          onClick={() => createTour()}
        >
          +
        </Button>
        {listings.map((listing) => (
          <Listing key={listing.id} {...listing} />
        ))}

      </Container>
    </main>
  );
}
