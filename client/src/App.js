import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import { getToken } from './utils/api';
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";

import "./styles.scss";
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-color: #6093ca;
  border: 4px solid navy;
`;
const PageTitle = styled.h1`
  color: firebrick;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: navy;
  margin-right: 15px;
  font-size: 1.2rem;
  &:hover {
    color: white;
  }
`;

function App() {
  const signedIn = getToken();

  return (
    <Router>
      <Nav>
        <div>
          <PageTitle>Welcome to the Bubble App!</PageTitle>
        </div>
        <div>
          {!signedIn && <Links to='/'>Home</Links>}
          {/* {signedIn && <Links to='/bubblepage'>BubblePage</Links>} */}
          {signedIn && <Links to='/logout'>Logout</Links>}
        </div>
      </Nav>

      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path='/bubblepage' component={BubblePage} />
        <ProtectedRoute exact path='/logout' component={Logout} />
      </div>
    </Router>
  );
}

export default App;

{/* 
  Build a PrivateRoute component that will 
  display BubblePage when you're authenticated 
*/}