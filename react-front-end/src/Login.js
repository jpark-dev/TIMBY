import React, { useState } from 'react';

const Login = (props) => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const userId = localStorage.getItem('userId');

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

  const notifyUser = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/notifications/send/${id}`, {
      method: 'POST',
      body: JSON.stringify({ text: "Push notification!"}) ,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res.json()))
    .catch(error => console.log(error));
  }

  return (
    <>
      <h1>Login Component</h1>
      {userId && <h2>Hello user with ID {userId}</h2>}
      <form onSubmit={e => { e.preventDefault(); login(username, password); }}>
        <input onChange={e => setUsername(e.target.value)} placeholder='username' />
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' />
        <button>Login</button>
      </form>
      <button onClick={() => notifyUser(localStorage.getItem('userID'))}>Notify!</button>
    </>
  );
}

export default Login;

