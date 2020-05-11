import React, { useState } from 'react';

const Login = (props) => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const userID = localStorage.getItem('userID');

  const login = (username, password) => {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.status < 400) {
        console.log(data);
        localStorage.setItem('userID', data.userID);
        return true;
      }
      return false;
    });
  };

  const notifyUser = (id, text) => {
    fetch(`${process.env.REACT_APP_API_URL}/notifications/send/${id}`, {
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

  return (
    <>
      <h1>Login Component</h1>
      {userID && <h2>Hello user with ID {userID}</h2>}
      <form onSubmit={e => { e.preventDefault(); login(username, password); }}>
        <input onChange={e => setUsername(e.target.value)} placeholder='username' />
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' />
        <button>Login</button>
      </form>
      <button onClick={() => notifyUser(localStorage.getItem('userID'), "Notification from button!")}>Notify!</button>
    </>
  );
}

export default Login;

