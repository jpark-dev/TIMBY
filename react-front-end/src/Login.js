import React, { useState } from 'react';

const Login = (props) => {
  const [notifications, setNotifications] = useState([]);
  
  const userID = localStorage.getItem('userID');

  // const login = (username, password) => {
  //   fetch(`${process.env.REACT_APP_API_URL}/login`, {
  //     method: 'POST',
  //     body: JSON.stringify({ username, password }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.status < 400) {
  //       console.log(data);
  //       localStorage.setItem('userID', data.userID);
  //       return true;
  //     }
  //     return false;
  //   });
  // };

  const notifyUser = (userID, text) => {
    fetch(`${process.env.REACT_APP_API_URL}/notifications/send/${userID}`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.text())
    .then(text => text)
    .catch(error => console.log(error));
  }

  const fetchNotificationsForUser = (userID) => {
    fetch(`${process.env.REACT_APP_API_URL}/notifications/${userID}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setNotifications(data);
    })
    .catch(error => console.log(error));
  };

  return (
    <>
      <h1>TIMBY</h1>
      {userID && <h2>Hello user with ID {userID}</h2>}
      <button onClick={() => notifyUser(localStorage.getItem('userID'), "Notification from button!")}>Notify!</button>
      <button onClick={() => fetchNotificationsForUser(localStorage.getItem('userID'))}>Fetch Notifications</button>
      <div>
        {notifications.map((notification) => (
          <p key={notification.id}>{notification.body}</p>
        ))}
      </div>
    </>
  );
}

export default Login;

