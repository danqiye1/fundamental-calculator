import React from 'react';
import logo from '../logo.svg';
import { Container, Row, Card } from 'react-bootstrap';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

function Login(props) {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <img src={logo} className="App-logo" alt="logo"/>
          <Card.Body>
            <Card.Title>Welcome to the Community!</Card.Title>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={props.app.auth()}/>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

export default Login;