import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import Login from './components/Login';
import Home from './components/Home';
import Calculator from './components/Calculator';
import { Router, navigate } from '@reach/router';

class App extends Component {

  constructor(props){
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("Login");
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Home path="/*" firebase={ firebase }/>
          <Login app={ firebase } path="Login"/>
          <Calculator firebase={ firebase } path="Calculator" />
        </Router>
      </div>
    );
  }
}

export default App;
