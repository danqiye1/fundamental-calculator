import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import Login from './components/Login';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Login app={ firebase } path="login"/>
      </Router>
    </div>
  );
}

export default App;
