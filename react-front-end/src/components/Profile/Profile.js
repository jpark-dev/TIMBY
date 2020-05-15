import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Header from "./Header";
import getUserProfile from "../../helpers/getUserProfile";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundSize: "cover",
    fontFamily: "verdana",
  },
  bgCover: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "100%",
    background:
      "url(https://newevolutiondesigns.com/images/freebies/city-wallpaper-18.jpg)",
    zIndex: -1,
  },
}));

export default function Profile() {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserProfile(localStorage.getItem("userID")).then(user => {
      setUser(user);
    });
  }, []);

  return (
    <>
      {/* CssBaseline globally resets css just like normalize.css */}
      <CssBaseline />
      <main className={classes.bgCover}>
        <Container className={classes.background}>
          <Header {...user} />
        </Container>
      </main>
    </>
  );
};
