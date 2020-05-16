import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import MyMapComponent from '../GoogleMaps';
import ConfirmDialog from '../Bookings/ConfirmDialog';
import FeedbackDialog from '../Bookings/FeedbackDialog';


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
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TransitionsModal(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(props.status);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const tourDateTime = new Date(props.date_time);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpenModal}>
        Details
      </Button>
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
          <div className={classes.paper}>
            <div className={classes.closeButton}>
              <Button onClick={handleCloseModal}>
                <CloseIcon />
              </Button>
            </div>
            <MyMapComponent
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `50vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markers={[{key: props.id, lat: Number(props.lat), lng: Number(props.lng)}]}
              changeCard={() => {}}
              defaultZoom={13}
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
                {/* {(status !== "Cancelled" && status !== "Completed") && <ConfirmDialog setModalStatus={(p) => setStatus(p)} setIndexStatus={props.setStatus} {...props}/>}
                {status === "Completed" && <FeedbackDialog {...props} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />} */}
                <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={() => setSnackBarOpen(false)}>
                  <Alert onClose={() => setSnackBarOpen(false)} severity="success">
                    Feedback submitted successfully!
                  </Alert>
                </Snackbar>
              </div>
            </CardContent>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}