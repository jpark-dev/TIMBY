import React, { useState } from 'react';
import notifyUser from '../helpers/notifyUser';
import fetchNotificationsForUser from '../helpers/fetchNotificationsForUser';


const Login = (props) => {
  const [notifications, setNotifications] = useState([]);
  
  const userID = localStorage.getItem('userID');

  return (
    <>
      <h1>TIMBY</h1>
      {userID && <h2>Hello user with ID {userID}</h2>}
      <button onClick={() => notifyUser(localStorage.getItem('userID'), "Notification from button!")}>Notify!</button>
      <button onClick={() => fetchNotificationsForUser(localStorage.getItem('userID')).then(data => setNotifications(data))}>Fetch Notifications</button>
      <div>
        {notifications.map((notification) => (
          <p key={notification.id}>{notification.body}</p>
        ))}
      </div>
    </>
  );
}

export default Login;