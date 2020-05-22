import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import Login from './components/Login';

function App() {
  return (
    
    <div className="App">
      <Login app={ firebase }/>
    </div>
  );
}

export default App;
