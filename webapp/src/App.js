import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import Login from './components/Login';
import Home from './components/Home';
import { Router, navigate } from '@reach/router';

class App extends Component {

  constructor(props){
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("login");
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Login app={ firebase } path="login"/>
        </Router>
      </div>
    );
  }
}

export default App;
