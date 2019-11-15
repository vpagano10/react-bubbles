import React, { useState } from "react";
import api from '../utils/api';

import styled from 'styled-components';

const PageTitle = styled.h1`
  color: navy;
  font-size: 3rem;
`;
const Form = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const Input = styled.input`
  margin: 0 auto;
  padding: 1%;
  width: 25%;
`;
const Button = styled.button`
  margin: 0 auto;
  padding: 1%;
  width: 27.5%;
  background-color: #6093ca;
  border: 2px solid navy;
  border-radius: 5px;
  color: Navy;
  &:hover {
    background-color: lightblue;
    color: white;
    border: 2px solid #6093ca;
  }
`;

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
    <Form>
      <PageTitle>Login!</PageTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='username'
          placeholder='username'
          value={data.username}
          onChange={handleChange}
        /><br />
        <Input
          type='password'
          name='password'
          placeholder='password'
          value={data.password}
          onChange={handleChange}
        /><br />
        <Button type='submit'>Login</Button>
      </form>
    </Form>
  );
};

export default Login;
