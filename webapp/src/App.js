import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import Login from './components/Login';
import Header from './components/Header';
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
          <Header path="/" />
          <Login app={ firebase } path="login"/>
        </Router>
      </div>
    );
  }
}

export default App;
