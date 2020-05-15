import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchNotificationsForUser from '../helpers/fetchNotificationsForUser';

export default function Notifications(props) {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotificationsForUser(localStorage.getItem('userID'))
      .then(data => {
        setNotifications(data);
      })
  }, []);

  const notificationPath = (localStorage.getItem('userID') === 1 ? "/listings" : "/bookings");

  return (
    <div className='notifications'>
      <p className='notifications-title'>Notifications</p>
      <hr></hr>
      {notifications.map((notification) => (
        <Link key={notification.id} onClick={props.closeNotifications} to={notificationPath}>
          <p className='notification'>
              {notification.body}
          </p>
        </Link>
      ))}
      <div className='notifications-footer'>

      </div>
    </div>
  );


}