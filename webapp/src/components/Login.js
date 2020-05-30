import React from 'react';
import logo from '../logo.svg';
import { Grid, Card } from 'semantic-ui-react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

function Login(props) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row />
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Card centered={true} raised={true} fluid={true}>
              <img src={logo} className="App-logo" alt="logo"/>
              <Card.Content>
                <Card.Header>Welcome to the Community!</Card.Header>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={props.app.auth()}/>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

// Configure FirebaseUI.
const uiConfig = {
  // Redirect signin flow rather than popup flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

export default Login;