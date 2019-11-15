import React, { useState } from "react";
import api from '../utils/api';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const [error, setError] = useState();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post('/api/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblepage')
      })
      .catch(err => {
        console.log('Error with sign in req', err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={data.username}
          onChange={handleChange}
        /><br />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={data.password}
          onChange={handleChange}
        /><br />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
