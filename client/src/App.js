import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path='/bubblepage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

{/* 
  Build a PrivateRoute component that will 
  display BubblePage when you're authenticated 
*/}