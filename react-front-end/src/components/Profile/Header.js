import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { faEnvelopeOpenText, faRoute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const useStyles = makeStyles(theme => ({

}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container>
        <div className="middle">
          <img
            src={props.avatar}
            alt=""
            className="user-pic"
          />
          <h4 className="name">{props.name}</h4>
          <h4 className="profile-data">Vancouver, BC, Canada</h4>
          <h4 className="profile-data">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            &nbsp;&nbsp;{props.email}
          </h4>
          <h4 className="profile-data">
            <FontAwesomeIcon icon={faRoute} />
            &nbsp;&nbsp;{props.total_tour} total tours
          </h4>
        </div>
        <div className="footer">
          <button className="btn-follow">follow </button>
          <br />
          <i className="fa fa-lock"></i>
          <br />
          <h4 className="profile-status">This profile is hidden</h4>
        </div>
      </Container>
    </>
  );
};
