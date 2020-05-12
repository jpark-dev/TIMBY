import React from 'react';
import './App.css';
import Routes from './Routes';

export default function App() {
  // const [msg, setMsg] = useState("Click the button to load data!");

  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     setMsg(response.data.message)
  //   })
  // };

  return (
    <Routes />
  );
};
