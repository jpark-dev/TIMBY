import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import MyMapComponent from '../GoogleMaps';

import cancelBooking from '../../helpers/cancelBooking';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none'
  },
  tourDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [status, setStatus] = useState(props.status);
  const tourDateTime = new Date(props.date_time);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        Details
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `50vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              <Typography variant="body2" component="p">
                Hosted By {props.host_name} ({props.host_phone})
              </Typography>
              <div className={classes.tourDetails}>
                <Typography variant="body2" component="p">
                  {tourDateTime.toLocaleString("en-US", {year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true})}
                </Typography>
                <Typography variant="body2" component="p">
                  <AccessTimeIcon /> {props.duration / 60} hrs
                </Typography>
              </div>
              <div className={classes.tourDetails}>
                <Typography variant="body1" component="h6">
                  {status}
                </Typography>
                <Button onClick={() => {
                    cancelBooking(props.id, props.host_id, props.title, props.user_id)
                      .then(() => {
                        props.setStatus("Cancelled");
                        setStatus("Cancelled");
                      })
                  }} size="small" color="primary">
                  Cancel Booking
                </Button>
              </div>
            </CardContent>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}