import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import "./Header.css";

import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

const useStyles = makeStyles(theme => ({
  verticalCenter: {
    verticalAlign: "middle",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container>
        <div className="middle">
          <img src={props.avatar} alt="" className="user-pic" />
          <h4 className="name">{props.name}</h4>
          <h4 className="profile-data">
            <LocationOnIcon className={classes.verticalCenter} />
            &nbsp;&nbsp;Vancouver, BC, Canada
          </h4>
          <h4 className="profile-data">
            <EmailIcon className={classes.verticalCenter} />
            &nbsp;&nbsp;{props.email}
          </h4>
          <h4 className="profile-data">
            <FlightTakeoffIcon className={classes.verticalCenter} />
            &nbsp;&nbsp;{props.total_tour} total tours
          </h4>
        </div>
        <div className="footer">
          <button className="btn-follow">follow </button>
          <br />
          <br />
          <h4 className="profile-status">This profile is hidden</h4>
        </div>
      </Container>
    </>
  );
}
